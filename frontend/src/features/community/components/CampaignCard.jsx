import React from 'react';
import { Users, Calendar, MapPin, ArrowRight } from 'lucide-react';

const CampaignCard = ({ title, location, date, volunteers, maxVolunteers, creator }) => {
  const progress = (volunteers / maxVolunteers) * 100;

  return (
    <div className="bg-dark-800 rounded-2xl border border-dark-700 p-6 hover:border-waste-500 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-waste-400 transition-colors">{title}</h3>
        <span className="text-[10px] font-bold bg-waste-500/10 text-waste-500 px-2 py-1 rounded-full border border-waste-500/20">
          Active
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MapPin className="w-4 h-4 text-waste-500" /> {location}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="w-4 h-4 text-waste-500" /> {date}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Users className="w-4 h-4 text-waste-500" /> Organized by <span className="text-white font-medium">{creator}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-gray-500 uppercase">Volunteer Progress</span>
          <span className="text-waste-500">{volunteers}/{maxVolunteers}</span>
        </div>
        <div className="w-full h-1.5 bg-dark-900 rounded-full overflow-hidden">
          <div className="h-full bg-waste-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <button className="w-full mt-6 bg-white hover:bg-waste-50 text-dark-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
        Join Campaign <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CampaignCard;