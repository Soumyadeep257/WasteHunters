import React from 'react';

const AchievementCard = ({ title, percent, color }) => {
  return (
    <div className="bg-dark-800 p-5 rounded-2xl border border-dark-700">
      <div className="flex justify-between items-end mb-2">
        <h3 className="text-white font-bold">{title}</h3>
        <span className="text-waste-500 font-mono font-bold">{percent}%</span>
      </div>
      {/* Progress Bar Background */}
      <div className="w-full h-2 bg-dark-900 rounded-full overflow-hidden">
        {/* Actual Progress */}
        <div 
            className={`h-full rounded-full transition-all duration-1000 ${color}`} 
            style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AchievementCard;