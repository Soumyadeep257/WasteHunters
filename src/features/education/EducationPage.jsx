import React from 'react';
import ModuleCard from './components/ModuleCard';
import { Zap } from 'lucide-react';

const EducationPage = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      
      {/* Featured Header */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-dark-800 to-dark-900 border border-dark-700 p-8 md:p-12">
        <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-waste-500 text-dark-900 text-xs font-bold px-2 py-1 rounded">FEATURED MODULE</span>
                <span className="text-waste-500 text-xs font-bold flex items-center gap-1"><Zap className="w-3 h-3 fill-current" /> 500 TOKENS</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Electronics: Decomposition & Recovery</h1>
            <p className="text-gray-400 mb-8 text-lg">Master the complex process of precious metal recovery from modern motherboards and earn the "Master Recycler" badge.</p>
            <button className="bg-white hover:bg-gray-100 text-dark-900 font-bold py-3 px-8 rounded-xl transition-colors">
                Start Masterclass
            </button>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-waste-500/10 to-transparent pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModuleCard 
            level="Intermediate" 
            title="Safe Disposal of PCBs" 
            desc="Learn how to handle Printed Circuit Boards safely to avoid lead exposure." 
            reward="100"
            duration="15 mins"
        />
        <ModuleCard 
            level="Beginner" 
            title="Battery Breakdown" 
            desc="The dangers of Lithium-ion batteries and how to recycle them properly." 
            reward="50"
            duration="10 mins"
        />
        <ModuleCard 
            level="Beginner" 
            title="Monitor Management" 
            desc="Handling CRT and LED screens: separating glass from hazardous gases." 
            reward="75"
            duration="12 mins"
        />
      </div>
    </div>
  );
};

export default EducationPage;