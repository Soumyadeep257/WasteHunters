import React from 'react';
import { User, MapPin, Mail, Calendar, Edit2, Share2, Award, History } from 'lucide-react';
import AchievementCard from './components/AchievementCard';

const ProfilePage = () => {
  // Indian Persona
  const user = {
    name: "Aditya Roy",
    handle: "@GreenWarrior_Kolkata",
    location: "Sector V, Salt Lake, Kolkata",
    email: "aditya.roy@iem.edu.in",
    joined: "Jan 2026",
    tokens: 1250
  };

  const history = [
    { id: 1, item: "Old Laptop Battery", date: "Feb 24, 2026", center: "Salt Lake Sector V Hub", tokens: "+150" },
    { id: 2, item: "Broken Monitor (CRT)", date: "Feb 10, 2026", center: "New Town Action Area I", tokens: "+400" },
    { id: 3, item: "Smartphone PCB", date: "Jan 28, 2026", center: "Eco Park Collection Point", tokens: "+50" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Header & User Info Card */}
      <div className="bg-dark-800 rounded-3xl p-8 border border-dark-700 relative overflow-hidden">
        {/* Background Gradient Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-waste-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-linear-to-tr from-waste-500 to-blue-500 p-1">
                <div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                </div>
            </div>

            {/* Details */}
            <div className="flex-1">
                <div className="flex items-center gap-4 mb-1">
                    <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                    <span className="bg-waste-500/20 text-waste-500 text-xs font-bold px-3 py-1 rounded-full border border-waste-500/20">
                        Verified Hunter
                    </span>
                </div>
                <p className="text-gray-400 mb-4">{user.handle}</p>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-waste-500" />
                        {user.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-waste-500" />
                        {user.email}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-waste-500" />
                        Joined {user.joined}
                    </div>
                </div>
            </div>

            {/* Edit Action */}
            <button className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors">
                <Edit2 className="w-4 h-4" /> Edit Profile
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. Achievements Column (Left) */}
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-waste-500" /> Achievements
            </h2>
            <AchievementCard title="Elite Hunter" percent={85} color="bg-waste-500" />
            <AchievementCard title="Community Leader" percent={40} color="bg-blue-500" />
            <AchievementCard title="Zero Waste Master" percent={12} color="bg-purple-500" />
            
            {/* Referral Card */}
            <div className="bg-linear-to-br from-waste-600 to-waste-800 p-6 rounded-2xl text-center shadow-lg">
                <h3 className="text-white font-bold text-lg mb-2">Refer a Friend</h3>
                <p className="text-waste-100 text-sm mb-4">Earn 500 tokens for every friend in Kolkata who recycles their first item.</p>
                <button className="bg-black text-waste-900 w-full py-2 rounded-xl font-bold flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" /> Share Code: KOL-99
                </button>
            </div>
        </div>

        {/* 3. Recycling History Column (Right, spans 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <History className="w-5 h-5 text-waste-500" /> Recycling History
            </h2>
            
            <div className="bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden">
                {history.map((item) => (
                    <div key={item.id} className="p-4 border-b border-dark-700 last:border-0 hover:bg-dark-700/50 transition-colors flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-dark-900 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-waste-500 transition-all">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{item.item}</h4>
                                <p className="text-gray-500 text-sm">{item.center} • {item.date}</p>
                            </div>
                        </div>
                        <span className="text-waste-500 font-bold bg-waste-500/10 px-3 py-1 rounded-lg">
                            {item.tokens}
                        </span>
                    </div>
                ))}
                
                {history.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No recycling activity yet. Start hunting in Sector V!
                    </div>
                )}
                
                <div className="p-4 bg-dark-900/50 text-center">
                    <button className="text-sm text-gray-400 hover:text-white font-medium">View Detailed Report</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;