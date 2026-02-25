import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

const RewardCard = ({ type, title, desc, cost, color }) => {
  return (
    <div className="bg-dark-800 rounded-2xl border border-dark-700 overflow-hidden group hover:border-waste-500 transition-all duration-300">
      {/* Image Placeholder with Gradient */}
      <div className={`h-40 ${color} relative flex items-center justify-center`}>
        <Gift className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
            {type}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{desc}</p>
        
        <div className="flex items-center justify-between mt-auto">
            <span className="text-waste-500 font-bold font-mono">{cost} TOKENS</span>
            <button className="text-white hover:text-waste-400 text-sm font-bold flex items-center gap-1 transition-colors">
                Redeem <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;