import React from 'react';
import { Home, BarChart3, Monitor, Smartphone, Shield, BarChart, Users } from 'lucide-react';
import './Sidebar.css';

type ActiveTab = 'home' | 'dashboard' | 'devices' | 'apps' | 'endpoint-security' | 'reports' | 'users';

interface SidebarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Home },
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: BarChart3 },
    { id: 'devices' as ActiveTab, label: 'Devices', icon: Monitor },
    { id: 'apps' as ActiveTab, label: 'Apps', icon: Smartphone },
    { id: 'endpoint-security' as ActiveTab, label: 'Endpoint Security', icon: Shield },
    { id: 'reports' as ActiveTab, label: 'Reports', icon: BarChart },
    { id: 'users' as ActiveTab, label: 'Users', icon: Users },
  ];

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`sidebar-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => onTabChange(id)}
            title={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </nav>
    </div>
  );
};