import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils'; // Ensure you have the utils file from Batch 1

const CenterCard = ({ name, address, status, distance, isSelected, onClick }) => {
  // Determine color based on status (FULL = Orange, ACTIVE = Green)
  const isFull = status === 'FULL';
  const statusColor = isFull ? 'text-orange-500 bg-orange-500/10 border-orange-500/20' : 'text-waste-500 bg-waste-500/10 border-waste-500/20';
  const dotColor = isFull ? 'bg-orange-500' : 'bg-waste-500';

  return (
    <div 
        onClick={onClick}
        className={cn(
            "p-4 rounded-2xl border cursor-pointer transition-all duration-200 group relative overflow-hidden",
            isSelected 
                ? "bg-dark-800 border-waste-500 ring-1 ring-waste-500/50" 
                : "bg-dark-900 border-dark-700 hover:bg-dark-800 hover:border-dark-600"
        )}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-semibold group-hover:text-waste-400 transition-colors">{name}</h3>
        <span className={`w-2 h-2 rounded-full ${dotColor} shadow-[0_0_8px_currentColor]`}></span>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 truncate">{address}</p>
      
      <div className="flex items-center justify-between mt-2">
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${statusColor}`}>
            {status}
        </span>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
            <MapPin className="w-3 h-3" />
            {distance}
        </div>
      </div>

      {/* Hover Effect: Arrow appears */}
      {isSelected && (
        <div className="absolute bottom-4 right-4 text-waste-500 animate-in fade-in slide-in-from-left-2">
            <Navigation className="w-4 h-4 fill-current" />
        </div>
      )}
    </div>
  );
};

export default CenterCard;