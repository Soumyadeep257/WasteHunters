import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Camera, Gift, GraduationCap, User, Settings, Map } from 'lucide-react';
import { cn } from '../../lib/utils';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Hunter Tool', icon: Camera, path: '/hunter' },
    { name: 'Live Map', icon: Map, path: '/map' }, // Added Map link
    { name: 'Rewards', icon: Gift, path: '/rewards' },
    { name: 'Education', icon: GraduationCap, path: '/education' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <aside className="w-64 h-screen bg-dark-900 border-r border-dark-700 flex flex-col fixed left-0 top-0 z-50">
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-waste-500 tracking-wider">
          Waste<span className="text-white">Hunters</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-waste-500/10 text-waste-500 font-medium" 
                  : "text-gray-400 hover:bg-dark-800 hover:text-white"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-dark-700">
        <NavLink 
            to="/settings"
            className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-dark-800 transition-all",
                isActive && "text-waste-500 bg-waste-500/10"
            )}
        >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;