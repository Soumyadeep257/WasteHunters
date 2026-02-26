

```markdown
<div align="center">
  
# 🌿 WasteHunters: AI E-Waste Recycling Portal

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](#)
[![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Gemini AI](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)](#)

**WasteHunters** is a high-fidelity, full-stack **"Green-Tech"** platform designed to gamify e-waste disposal and environmental education. By leveraging multimodal AI to instantly classify electronic waste, the platform creates a localized, verifiable ecosystem for recycling.

[Report Bug](https://github.com/Soumyadeep257/WasteHunters/issues) · [Request Feature](https://github.com/Soumyadeep257/WasteHunters/issues)

</div>

---

## 📑 Table of Contents
- [System Architecture](#-system-architecture)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [Localized Impact](#-localized-impact)
- [API Reference](#-api-reference)
- [Getting Started (Local Development)](#-getting-started)
- [Roadmap](#-roadmap)

---

## 🏗️ System Architecture

WasteHunters operates on a decoupled client-server architecture, ensuring scalability and rapid AI inference.

```text
┌─────────────────┐       REST API        ┌─────────────────┐
│                 │   (JSON / Axios)      │                 │
│  React Client   │ ◄───────────────────► │ FastAPI Server  │
│  (Vite + Lucide)│                       │  (Python 3.10+) │
│                 │                       │                 │
└────────┬────────┘                       └────────┬─┬──────┘
         │                                         │ │
         │ LocalStorage                            │ │ SQLALchemy
         ▼ (State Persistence)                     │ │ ORM
┌─────────────────┐                                │ │
│ Browser Memory  │                                │ ▼
└─────────────────┘                       ┌────────┴────────┐
                                          │ SQLite Database │
                                          └─────────────────┘
                                                   │
                                     (Image Bytes) │
                                                   ▼
                                        ┌──────────────────┐
                                        │ Google Gemini AI │
                                        │ (3 Flash Preview)│
                                        └──────────────────┘

```

---

## 🚀 Core Features

* **🤖 AI Hunter Tool:** Capture or upload photos of electronic devices. The backend sends the image payload to Google Gemini for instant item identification, hazard detection, and disposal routing.
* **🌍 Community Campaigns:** Create, explore, and join local cleanup drives. Features dynamic progress bars and real-time volunteer tracking.
* **📊 Live Impact Dashboard:** Visualize global recycling progress and carbon footprint savings through dynamic Recharts graphs powered by live database statistics.
* **🗺️ Interactive Map:** Locate nearby recycling centers with active status indicators and localized routing.
* **🏆 Gamified Economy:** Earn 'Green Tokens' for successful recycles and educational quizzes. Redeem them securely for INR-based vouchers (e.g., Amazon Pay ₹500).
* **👤 Dynamic Profiles:** Track lifetime "Total Hunts," view historical recycling logs, and manage persistent account settings.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| --- | --- | --- |
| **Frontend** | React.js (Vite) | Lightning-fast build tool with React |
| **Styling** | Tailwind CSS v4 | Utility-first styling (Emerald & Charcoal palette) |
| **Backend** | FastAPI | High-performance async Python framework |
| **Database** | SQLite & SQLAlchemy | Relational DB mapped via Python ORM |
| **AI Integration** | Google GenAI SDK | Powers the computer vision & classification |
| **Visuals** | Lucide React & Recharts | SVGs and responsive charting |

---

## 📍 Localized Impact: Kolkata

The platform's initial deployment logic is optimized for users in **Salt Lake, Sector V, and New Town, Kolkata**. Verified Hunters can track their personal contributions, earn community badges, and participate in local cleanup drives at verified hubs like the **Eco Park Collection Point**.

---

## 🔌 API Reference (Sample)

The FastAPI backend provides clean REST endpoints. Here is a sample of the AI classification route:

**`POST /api/classify`**

* **Content-Type:** `multipart/form-data`
* **Payload:** `file` (Image bytes)
* **Response:**

```json
{
  "status": "success",
  "classification": {
    "item": "Laptop Battery",
    "category": "Hazardous E-Waste",
    "hazards": ["Lithium-ion fire risk", "Toxic heavy metals"],
    "is_recyclable": true,
    "disposal_guide": "Tape terminals with clear tape. Drop off at Sector V Hub.",
    "tokens": 150
  }
}

```

---

## 🏃 Getting Started

To run WasteHunters locally, you will need **Node.js 18+** and **Python 3.10+**.

### 1. Clone the repository

```bash
git clone [https://github.com/Soumyadeep257/WasteHunters.git](https://github.com/Soumyadeep257/WasteHunters.git)
cd WasteHunters

```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install fastapi uvicorn sqlalchemy python-dotenv google-genai python-multipart

```

**Environment Variables**
Create a `.env` file inside the `/backend` directory:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here

```

**Start the API Server**

```bash
uvicorn api:app --reload
# Server runs on [http://127.0.0.1:8000](http://127.0.0.1:8000)

```

### 3. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
# Client runs on http://localhost:5173

```

---

## 🗺️ Roadmap

* [x] Integrate Gemini AI for image classification
* [x] Build local SQLite database with SQLAlchemy
* [x] Implement persistent LocalStorage for user state
* [ ] Migrate SQLite to PostgreSQL for production
* [ ] Integrate Google Maps API for real-time routing
* [ ] Implement secure JWT Authentication

---

<div align="center">
<b>Built for a greener tomorrow.</b>




</div>


