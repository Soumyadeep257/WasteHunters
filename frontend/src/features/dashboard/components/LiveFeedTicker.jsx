import React, { useState, useEffect } from 'react';
import { Activity, MapPin, ArrowRight, Loader2, Megaphone } from 'lucide-react';

const LiveFeedTicker = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch live campaigns to use as the activity feed
    const fetchLiveFeed = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/campaigns');
        if (res.ok) {
          const campaigns = await res.json();
          // Map campaigns into a format our feed can display
          const formattedFeed = campaigns.slice(-4).reverse().map(camp => ({
            id: camp.id,
            message: `New campaign: ${camp.title}`,
            time: camp.date,
            icon: Megaphone, // Using Megaphone icon for campaigns
            color: 'text-waste-500 bg-waste-500/10 border-waste-500/20'
          }));
          setFeedItems(formattedFeed);
        }
      } catch (error) {
        console.error("Failed to fetch live feed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveFeed();
  }, []);

  return (
    <div className="w-full bg-dark-800 rounded-2xl p-6 border border-dark-700 h-[350px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-waste-500" />
            Pathway Feed
        </h3>
        <span className="text-[10px] font-bold bg-waste-500/10 text-waste-500 px-2 py-1 rounded-full animate-pulse border border-waste-500/20">
            LIVE
        </span>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto pr-2">
        {loading ? (
          <div className="flex justify-center h-full items-center"><Loader2 className="animate-spin text-waste-500" /></div>
        ) : (
          feedItems.map((item, index) => (
            <div key={item.id} className="flex gap-4 relative group cursor-pointer">
              {/* Timeline Line (Hidden on the last item) */}
              <div className={`absolute left-4.75 top-8 w-0.5 h-full bg-dark-700 transition-colors ${index === feedItems.length - 1 ? 'hidden' : 'group-hover:bg-dark-600'}`}></div>
              
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
              </div>
              
              <div>
                  <p className="text-white text-sm font-medium group-hover:text-waste-400 transition-colors">{item.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
      
      <button 
        onClick={() => window.location.href = '/community'} // Route to community tab
        className="w-full mt-4 py-3 text-xs font-bold uppercase text-gray-400 hover:text-white border-t border-dark-700 transition-colors flex items-center justify-center gap-2 group"
      >
        View All Activity
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default LiveFeedTicker;