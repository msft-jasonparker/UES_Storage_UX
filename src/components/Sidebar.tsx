import React from 'react';
import { Home, BarChart3, Monitor, Smartphone, Shield, BarChart, Users, ChevronRight } from 'lucide-react';
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
    { id: 'endpoint-security' as ActiveTab, label: 'Endpoint security', icon: Shield },
    { id: 'reports' as ActiveTab, label: 'Reports', icon: BarChart },
    { id: 'users' as ActiveTab, label: 'Users', icon: Users },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Microsoft Intune admin center</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`sidebar-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => onTabChange(id)}
          >
            <Icon size={20} />
            <span>{label}</span>
            <ChevronRight size={16} className="chevron" />
          </button>
        ))}
      </nav>
    </div>
  );
};