import os
import json
from fastapi import FastAPI, UploadFile, File, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker, Session
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

# Initialize Gemini Client
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

app = FastAPI(title="WasteHunters API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================
# DATABASE SETUP
# ==========================================
SQLALCHEMY_DATABASE_URL = "sqlite:///./wastehunters.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class DBUser(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    green_tokens = Column(Integer, default=0)
    total_recycling_events = Column(Integer, default=0)

class DBLesson(Base):
    __tablename__ = "lessons"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    content_summary = Column(String)
    video_url = Column(String) 

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ==========================================
# STARTUP & SEEDING
# ==========================================
@app.on_event("startup")
def startup_event():
    db = SessionLocal()
    # Seed User
    if not db.query(DBUser).filter(DBUser.id == "user_123").first():
        test_user = DBUser(id="user_123", username="GreenHacker", green_tokens=150, total_recycling_events=4)
        db.add(test_user)
    
    # Seed Lessons with VERIFIED Embed URLs
    if not db.query(DBLesson).first():
        lessons = [
            DBLesson(
                title="The Hidden Dangers of E-Waste", 
                content_summary="Why mercury and lead are dangerous to soil.",
                video_url="https://www.youtube.com/embed/nvNbDV1Yu-Q" 
            ),
            DBLesson(
                title="Safe Battery Disposal", 
                content_summary="How to tape terminals to prevent fires.",
                # REPLACED broken link with verified embeddable link
                video_url="https://www.youtube.com/embed/aLzk1zsRQCU" 
            ),
            DBLesson(
                title="Monitor Management", 
                content_summary="Handling CRT and LED screens properly.",
                video_url="https://www.youtube.com/embed/zweHhVUdjjw" 
            )
        ]
        db.add_all(lessons)
        
    db.commit()
    db.close()

# ==========================================
# CORE ENDPOINTS
# ==========================================

@app.get("/api/lessons")
async def get_lessons(db: Session = Depends(get_db)):
    lessons = db.query(DBLesson).all()
    return [
        {
            "id": lesson.id,
            "title": lesson.title,
            "content_summary": lesson.content_summary,
            "video_url": lesson.video_url
        } for lesson in lessons
    ]

@app.get("/api/user-stats")
async def get_stats(db: Session = Depends(get_db)):
    user = db.query(DBUser).filter(DBUser.id == "user_123").first()
    return {"tokens": user.green_tokens, "events": user.total_recycling_events}

@app.post("/api/claim-tokens")
async def claim_tokens(payload: dict, db: Session = Depends(get_db)):
    user = db.query(DBUser).filter(DBUser.id == "user_123").first()
    tokens_to_add = payload.get("tokens", 0)
    user.green_tokens += tokens_to_add
    db.commit()
    return {"status": "success", "new_balance": user.green_tokens}

@app.get("/api/centers")
def get_active_centers():
    centers = []
    try:
        with open("active_centers.jsonl", "r") as f:
            for line in f:
                centers.append(json.loads(line))
    except FileNotFoundError:
        return []
    return centers

@app.post("/api/classify")
async def classify_ewaste(file: UploadFile = File(...)):
    image_bytes = await file.read()
    prompt = "Analyze this image. If e-waste, return JSON: {'item': 'name', 'hazards': 'list', 'tokens': 50}."
    
    # Hunter tool using the specified gemini-3-flash-preview model
    response = client.models.generate_content(
        model="gemini-3-flash-preview", 
        contents=[prompt, types.Part.from_bytes(data=image_bytes, mime_type=file.content_type)]
    )
    return {"status": "success", "classification": response.text}