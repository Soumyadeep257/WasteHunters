import React from 'react';
import { Activity, Battery, MapPin, AlertTriangle, ArrowRight } from 'lucide-react';

const feedItems = [
  {
    id: 1,
    type: 'pickup',
    message: 'New pickup scheduled in Sector V',
    time: '2m ago',
    icon: MapPin,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 2,
    type: 'process',
    message: 'Emerald City processed 50kg batteries',
    time: '5m ago',
    icon: Battery,
    color: 'text-waste-500 bg-waste-500/10 border-waste-500/20'
  },
  {
    id: 3,
    type: 'alert',
    message: 'Hazardous material alert: PCBs',
    time: '12m ago',
    icon: AlertTriangle,
    color: 'text-red-400 bg-red-500/10 border-red-500/20'
  }
];

const LiveFeedTicker = () => {
  return (
    <div className="w-full bg-dark-800 rounded-2xl p-6 border border-dark-700 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-waste-500" />
            Pathway Feed
        </h3>
        <span className="text-[10px] font-bold bg-waste-500/10 text-waste-500 px-2 py-1 rounded-full animate-pulse border border-waste-500/20">
            LIVE
        </span>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto">
        {feedItems.map((item) => (
          <div key={item.id} className="flex gap-4 relative group cursor-pointer">
             {/* Timeline Line */}
            <div className="absolute left-4.75 top-8 w-0.5 h-full bg-dark-700 last:hidden group-hover:bg-dark-600 transition-colors"></div>
            
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110 ${item.color}`}>
                <item.icon className="w-5 h-5" />
            </div>
            
            <div>
                <p className="text-white text-sm font-medium group-hover:text-waste-400 transition-colors">{item.message}</p>
                <p className="text-gray-500 text-xs mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 text-xs font-bold uppercase text-gray-400 hover:text-white border-t border-dark-700 transition-colors flex items-center justify-center gap-2 group">
        View All Activity
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default LiveFeedTicker;