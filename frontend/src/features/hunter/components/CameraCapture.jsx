import React, { useRef } from 'react';
import { Camera, Upload, ScanLine } from 'lucide-react';

const CameraCapture = ({ onCapture }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a fake local URL to display the image immediately
      const imageUrl = URL.createObjectURL(file);
      onCapture(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-150 bg-dark-800 rounded-3xl border-2 border-dashed border-dark-700 p-8 text-center relative overflow-hidden group">
      
      {/* Animated Scan Line Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-waste-500/50 shadow-[0_0_15px_#10b981] animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="w-20 h-20 bg-dark-900 rounded-2xl flex items-center justify-center mb-6 border border-dark-700 shadow-xl">
        <Camera className="w-10 h-10 text-waste-500" />
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">Ready to report?</h2>
      <p className="text-gray-400 max-w-md mb-8">
        Upload a clear photo of the device. Our AI will handle the identification and hazardous material classification.
      </p>

      <div className="flex gap-4">
        <button 
          onClick={() => fileInputRef.current.click()}
          className="bg-waste-500 hover:bg-waste-600 text-dark-900 font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_-5px_#10b981]"
        >
          <Upload className="w-5 h-5" />
          Upload Photo
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*"
          onChange={handleFileUpload}
        />

        <button className="bg-white hover:bg-gray-200 text-dark-900 font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-colors">
          <Camera className="w-5 h-5" />
          Open Camera
        </button>
      </div>

      <p className="mt-8 text-xs text-dark-700 font-mono">
        AI MODEL: GEMINI-PRO-VISION • v2.4.0
      </p>
    </div>
  );
};

export default CameraCapture;