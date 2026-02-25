import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// Feature Imports
import DashboardPage from './features/dashboard/DashboardPage';
import HunterPage from './features/hunter/HunterPage';
import MapPage from './features/map/MapPage';
import RewardsPage from './features/rewards/RewardsPage';
import EducationPage from './features/education/EducationPage';
import ProfilePage from './features/profile/ProfilePage'; // <--- Import this

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-dark-900 font-sans text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64 transition-all duration-300">
          <Header />
          <main className="flex-1 mt-20 bg-dark-900 overflow-y-auto min-h-[calc(100vh-80px)]">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/hunter" element={<HunterPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/rewards" element={<RewardsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              
              <Route path="/settings" element={<div className="p-8">Settings Page Coming Soon</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;