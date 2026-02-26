# 🌿 WasteHunters: AI E-Waste Recycling Portal

**WasteHunters** is a high-fidelity, real-time **"Green-Tech"** platform designed to gamify e-waste disposal and environmental education. It leverages actual AI to classify electronic waste and provides a localized ecosystem for recycling in Kolkata, India.

---

### 🚀 Core Features

* **AI Hunter Tool**: Capture or upload photos of electronic devices for instant identification and hazardous material detection using the live **Google Gemini API**.
* **Community Campaigns**: Create, explore, and join local cleanup drives (e.g., in Sector V or Eco Park). Features real-time volunteer progress tracking.
* **Real-Time Impact Dashboard**: Visualize recycling progress and carbon footprint savings through dynamic, interactive charts powered by live database statistics.
* **Interactive Live Map**: Locate nearby recycling centers in Kolkata with active status indicators and localized routing.
* **Gamified Rewards Store**: Earn tokens for every successful recycle and educational quiz. Redeem them securely for INR-based vouchers (e.g., Amazon Pay ₹500) and eco-friendly gadgets.
* **Educational Hub**: Interactive video modules and quizzes on the safe disposal of PCBs, Batteries, and Screens.
* **Dynamic User Profiles**: Track your personal "Total Hunts," view your recycling history, and manage persistent account settings.

---

### 🛠️ Tech Stack

**Frontend**
* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS v4 (Emerald Green & Charcoal palette)
* **Icons:** Lucide React
* **Visualizations:** Recharts
* **State Management:** React Hooks & LocalStorage

**Backend & AI**
* **Server:** FastAPI (Python)
* **Database:** SQLite with SQLAlchemy ORM
* **AI Integration:** Google GenAI SDK (Gemini 3 Flash Preview)
* **Architecture:** RESTful API architecture with CORS middleware

---

### 📍 Localized Impact: Kolkata
The platform is currently optimized for users in **Salt Lake, Sector V, and New Town, Kolkata**. Verified Hunters can track their personal contributions, earn community badges, and participate in local cleanup drives.

---

### 🏃 Getting Started

Because WasteHunters is a full-stack application, you will need to run both the backend server and the frontend client.

**1. Clone the repository:**
```bash
git clone [https://github.com/Soumyadeep257/WasteHunters.git](https://github.com/Soumyadeep257/WasteHunters.git)
cd WasteHunters