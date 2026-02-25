import React, { useState } from 'react';
import CenterCard from './components/CenterCard';
import { Search, MapPin, Navigation } from 'lucide-react';

const centers = [
  { id: 1, name: "Carbon Guard Station", address: "789 Eco Blvd, Northside", status: "FULL", distance: "1.2 km away" },
  { id: 2, name: "Emerald City Recycling", address: "123 Green Way, Sector V", status: "ACTIVE", distance: "0.8 km away" },
  { id: 3, name: "TechSafe Hub", address: "456 Tech St. Downtown", status: "ACTIVE", distance: "2.5 km away" },
];

const MapPage = () => {
  const [selectedCenter, setSelectedCenter] = useState(2); 

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden">
      {/* Left Sidebar: Center List */}
      <div className="w-96 bg-dark-900 border-r border-dark-700 flex flex-col z-10 shadow-xl">
        <div className="p-6 border-b border-dark-700 bg-dark-900">
            <h2 className="text-xl font-bold text-white mb-4">Recycling Centers</h2>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Find Nearest..." 
                    className="w-full bg-dark-800 border border-dark-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-waste-500 transition-colors"
                />
            </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {centers.map(center => (
                <CenterCard 
                    key={center.id}
                    {...center}
                    isSelected={selectedCenter === center.id}
                    onClick={() => setSelectedCenter(center.id)}
                />
            ))}
        </div>
      </div>

      {/* Right Side: Map View */}
      <div className="flex-1 bg-dark-800 relative flex items-center justify-center overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12,0/1000x1000?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2NsNXZoN28wY28xMnBtYm1sN2Z5b20ifQ.Example')" }}
        ></div>
        
        <div className="absolute top-1/3 left-1/4">
            <div className="relative group cursor-pointer">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white relative z-10 shadow-[0_0_15px_#f97316]"></div>
            </div>
        </div>

        <div className="absolute bottom-8 right-8 bg-dark-900/90 backdrop-blur-md border border-dark-600 p-6 rounded-2xl shadow-2xl max-w-sm">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-waste-500/20 rounded-full flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-waste-500" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Google Maps Ready</h3>
                    <p className="text-gray-400 text-sm mt-1 mb-4">
                        Connect your API key to view real-time traffic.
                    </p>
                    <button className="w-full bg-white hover:bg-gray-200 text-dark-900 font-bold py-2 rounded-lg text-sm transition-colors">
                        Enable Location Services
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;