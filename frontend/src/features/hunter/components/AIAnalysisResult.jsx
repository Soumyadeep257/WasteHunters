import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, RefreshCw, XCircle, Loader2 } from 'lucide-react';

const AIAnalysisResult = ({ image, result, onReset }) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);

  // Parse JSON from Gemini response
  let data = {};
  try {
    const cleanJson = typeof result === 'string' 
      ? result.replace(/```json|```/g, '').trim() 
      : result;
    data = JSON.parse(cleanJson);
  } catch (e) {
    data = { error: "Failed to read AI analysis." };
  }

  const handleClaimTokens = async () => {
    setIsClaiming(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/claim-tokens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokens: data.tokens || 50 }),
      });
      const resData = await response.json();
      if (resData.status === "success") {
        setClaimed(true);
      }
    } catch (error) {
      alert("Error connecting to backend database.");
    } finally {
      setIsClaiming(false);
    }
  };

  if (data.error || data.item === "Not E-Waste") {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-dark-800 rounded-3xl border border-red-500/20">
        <XCircle className="w-20 h-20 text-red-500 mb-6" />
        <h2 className="text-2xl font-bold text-white mb-2">Invalid Item</h2>
        <p className="text-gray-400 mb-8">{data.error || "Please upload electronic waste only."}</p>
        <button onClick={onReset} className="bg-white text-dark-900 font-bold px-8 py-3 rounded-xl">Try Again</button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full animate-in zoom-in-95">
      <div className="relative rounded-3xl overflow-hidden border border-dark-700">
        <img src={image} alt="Scanned" className="w-full h-full object-cover" />
        <div className="absolute bottom-6 left-6">
            <span className="bg-waste-500 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">AI VERIFIED</span>
        </div>
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div>
            <h2 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Identification Complete</h2>
            <h1 className="text-4xl font-bold text-white capitalize">{data.item}</h1>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
            <div>
                <h3 className="text-yellow-500 font-bold">Hazard Analysis</h3>
                <p className="text-gray-400 text-sm mt-1">{data.hazards}</p>
            </div>
        </div>

        <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
            <div className="flex justify-between items-center mb-4 text-gray-400">
                <span>Reward Amount</span>
                <span className="text-waste-500 font-bold">{data.tokens || 50} TOKENS</span>
            </div>
            <div className="h-px bg-dark-700 my-4"></div>
            <p className="text-xs text-gray-500">Tokens will be added to your Green Balance upon claiming.</p>
        </div>

        <div className="flex gap-4 pt-4">
            <button onClick={onReset} className="flex-1 bg-dark-700 text-white font-bold py-3 rounded-xl">Scan Again</button>
            <button 
                onClick={handleClaimTokens}
                disabled={claimed || isClaiming}
                className={`flex-1 font-bold py-3 rounded-xl flex items-center justify-center gap-2 ${
                    claimed ? 'bg-gray-600 text-gray-400' : 'bg-waste-500 text-dark-900 shadow-lg shadow-waste-500/20'
                }`}
            >
                {isClaiming ? <Loader2 className="animate-spin" /> : claimed ? <CheckCircle /> : null}
                {claimed ? "Claimed!" : isClaiming ? "Processing..." : "Claim Reward"}
            </button>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisResult;