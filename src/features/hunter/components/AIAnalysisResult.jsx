import React from 'react';
import { CheckCircle, AlertTriangle, Cpu, RefreshCw } from 'lucide-react';

const AIAnalysisResult = ({ image, onReset }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full animate-in zoom-in-95 duration-300">
      
      {/* Left: The Image Scanned */}
      <div className="relative rounded-3xl overflow-hidden border border-dark-700 group">
        <img src={image} alt="Scanned E-Waste" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-dark-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6">
            <span className="bg-waste-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                CONFIDENCE: 98.2%
            </span>
        </div>
      </div>

      {/* Right: The Analysis Data */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
            <h2 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Identification Complete</h2>
            <h1 className="text-4xl font-bold text-white">Printed Circuit Board (PCB)</h1>
        </div>

        {/* Hazard Alert Box */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
            <div>
                <h3 className="text-yellow-500 font-bold">Hazardous Material Detected</h3>
                <p className="text-yellow-200/70 text-sm mt-1">Contains lead and mercury. Do not dispose in general waste.</p>
            </div>
        </div>

        {/* Reward Section */}
        <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Base Reward</span>
                <span className="text-white font-mono">50 TOKENS</span>
            </div>
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Hazard Bonus</span>
                <span className="text-waste-400 font-mono">+25 TOKENS</span>
            </div>
            <div className="h-px bg-dark-700 my-4"></div>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Total</span>
                <span className="text-2xl font-bold text-waste-500">75 TOKENS</span>
            </div>
        </div>

        <div className="flex gap-4 pt-4">
            <button 
                onClick={onReset}
                className="flex-1 bg-dark-700 hover:bg-dark-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
                <RefreshCw className="w-4 h-4" />
                Scan Again
            </button>
            <button className="flex-1 bg-waste-500 hover:bg-waste-600 text-dark-900 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_#10b981]">
                <CheckCircle className="w-4 h-4" />
                Claim Reward
            </button>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisResult;