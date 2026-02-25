import React, { useState } from 'react';
import CampaignCard from './components/CampaignCard';
import { Plus, Search, Megaphone } from 'lucide-react';

const CampaignsPage = () => {
  const [activeTab, setActiveTab] = useState('Explore');

  const campaigns = [
    { id: 1, title: "Sector V Tech-Cleanup", location: "Salt Lake, Sector V", date: "March 5, 2026", volunteers: 12, maxVolunteers: 20, creator: "Rahul S." },
    { id: 2, title: "New Town Battery Drive", location: "Action Area I, New Town", date: "March 12, 2026", volunteers: 45, maxVolunteers: 50, creator: "Priya K." },
    { id: 3, title: "Eco Park E-Waste Awareness", location: "Eco Park Main Gate", date: "March 20, 2026", volunteers: 8, maxVolunteers: 15, creator: "Aditya Roy" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      {/* Header with Create Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Megaphone className="w-8 h-8 text-waste-500" /> Community Campaigns
          </h1>
          <p className="text-gray-400 mt-1">Join forces with other Hunters in Kolkata to clean up our city.</p>
        </div>
        <button className="bg-waste-500 hover:bg-waste-600 text-dark-900 font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_#10b981] transition-all">
          <Plus className="w-5 h-5" /> Start a Campaign
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-dark-700 pb-6">
        <div className="flex gap-6">
          {['Explore', 'My Campaigns', 'Joined'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-bold pb-2 transition-colors ${activeTab === tab ? 'text-waste-500 border-b-2 border-waste-500' : 'text-gray-500 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search by area..." 
            className="w-full bg-dark-800 border border-dark-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-waste-500"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map(camp => (
          <CampaignCard key={camp.id} {...camp} />
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;