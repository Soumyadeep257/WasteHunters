import React, { useState } from 'react';
import CameraCapture from './components/CameraCapture';
import AIAnalysisResult from './components/AIAnalysisResult';
import { Loader2 } from 'lucide-react';

const HunterPage = () => {
  const [image, setImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleCapture = (imgUrl) => {
    setImage(imgUrl);
    setAnalyzing(true);

    // Simulate Gemini API Delay
    setTimeout(() => {
        setAnalyzing(false);
        setResult(true);
    }, 2500);
  };

  const handleReset = () => {
    setImage(null);
    setResult(null);
    setAnalyzing(false);
  };

  return (
    <div className="p-8 h-[calc(100vh-80px)] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tight">Hunter Tool</h1>
            <p className="text-gray-400 mt-1">AI-powered e-waste classification.</p>
        </div>

        {/* Content Area */}
        <div className="flex-1">
            {!image && (
                <CameraCapture onCapture={handleCapture} />
            )}

            {image && analyzing && (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-dark-700 border-t-waste-500 animate-spin mb-8"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">AI</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Analyzing Material...</h2>
                    <p className="text-gray-400">Identifying components and checking for hazards.</p>
                </div>
            )}

            {image && !analyzing && result && (
                <AIAnalysisResult image={image} onReset={handleReset} />
            )}
        </div>
    </div>
  );
};

export default HunterPage;