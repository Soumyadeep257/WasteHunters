import React from 'react';
import { Zap, ArrowUpRight } from 'lucide-react';
import ImpactStats from './components/ImpactStats';
import LiveFeedTicker from './components/LiveFeedTicker';

const DashboardPage = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-gray-400 mt-1">Real-time overview of recycling operations.</p>
        </div>
        
        {/* Quick Action Button */}
        <button className="bg-waste-500 hover:bg-waste-600 text-dark-900 font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 transition-all hover:shadow-[0_0_20px_-5px_#10b981]">
          <Zap className="w-4 h-4 fill-current" />
          <span>Quick Scan</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Impact Graph & Stats (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          <ImpactStats />
          
          {/* Quick Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-800 p-5 rounded-2xl border border-dark-700">
                <div className="text-gray-400 text-xs uppercase font-bold mb-2">Total Processed</div>
                <div className="text-2xl font-bold text-white flex items-end gap-2">
                    1,240 kg <span className="text-waste-500 text-xs mb-1 flex items-center bg-waste-500/10 px-1.5 py-0.5 rounded">+12% <ArrowUpRight className="w-3 h-3 ml-0.5"/></span>
                </div>
            </div>
            <div className="bg-dark-800 p-5 rounded-2xl border border-dark-700">
                <div className="text-gray-400 text-xs uppercase font-bold mb-2">Active Centers</div>
                <div className="text-2xl font-bold text-white">
                    8 <span className="text-gray-500 text-sm font-normal">/ 12</span>
                </div>
            </div>
             <div className="bg-dark-800 p-5 rounded-2xl border border-dark-700 hidden md:block">
                <div className="text-gray-400 text-xs uppercase font-bold mb-2">Network Load</div>
                <div className="text-2xl font-bold text-waste-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-waste-500 animate-pulse"></span>
                    Optimal
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Feed */}
        <div className="lg:col-span-1 h-full">
          <LiveFeedTicker />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;