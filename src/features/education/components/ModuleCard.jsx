import React from 'react';
import { PlayCircle, BookOpen } from 'lucide-react';

const ModuleCard = ({ level, title, desc, reward, duration }) => {
  return (
    <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700 hover:border-waste-500 transition-all group cursor-pointer flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border 
            ${level === 'Beginner' ? 'text-blue-400 border-blue-400/20 bg-blue-400/10' : 'text-purple-400 border-purple-400/20 bg-purple-400/10'}`}>
            {level}
        </span>
        <span className="text-waste-500 font-mono text-xs font-bold">+{reward} Tokens</span>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-waste-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-1">{desc}</p>
      
      <div className="flex items-center justify-between pt-4 border-t border-dark-700">
        <span className="text-gray-500 text-xs flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> {duration}
        </span>
        <button className="bg-white text-dark-900 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-200 transition-colors">
            Start <PlayCircle className="w-3 h-3 fill-current" />
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;