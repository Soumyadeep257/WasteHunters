import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', recycled: 40, carbon: 24 },
  { name: 'Feb', recycled: 30, carbon: 13 },
  { name: 'Mar', recycled: 60, carbon: 48 },
  { name: 'Apr', recycled: 90, carbon: 65 },
  { name: 'May', recycled: 70, carbon: 55 },
  { name: 'Jun', recycled: 100, carbon: 85 },
];

// NEW: Accept totalKg as a prop
const ImpactStats = ({ totalKg }) => {
  return (
    <div className="w-full h-[350px] bg-dark-800 rounded-2xl p-6 border border-dark-700 shadow-xl flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Environmental Impact</h3>
            <div className="flex items-baseline gap-2">
                {/* DYNAMIC: Display actual calculated kg here */}
                <p className="text-2xl font-bold text-white mt-1">{totalKg} kg</p>
                <span className="text-waste-500 text-sm">Recycled</span>
            </div>
        </div>
        {/* Legend */}
        <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-waste-500 shadow-[0_0_8px_#10b981]"></span>
                <span className="text-gray-400">Recycled</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                <span className="text-gray-400">Carbon Saved</span>
            </div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
            <defs>
                <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
            <YAxis stroke="#94a3b8" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
            <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                itemStyle={{ color: '#fff', fontSize: '12px' }}
                cursor={{ stroke: '#334155', strokeWidth: 1 }}
            />
            <Area type="monotone" dataKey="recycled" stroke="#10b981" fillOpacity={1} fill="url(#colorWaste)" strokeWidth={3} />
            <Area type="monotone" dataKey="carbon" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCarbon)" strokeWidth={3} />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ImpactStats;