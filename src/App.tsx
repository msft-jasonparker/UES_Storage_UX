import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNavigation } from './components/TopNavigation';
import { UserStorage } from './components/UserStorage';
import { Dashboard } from './components/Dashboard';
import { DeviceManagement } from './components/DeviceManagement';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import './App.css';

type ActiveTab = 'home' | 'dashboard' | 'devices' | 'apps' | 'endpoint-security' | 'reports' | 'users';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('devices');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'dashboard':
        return <Dashboard />;
      case 'devices':
        return <UserStorage />;
      case 'apps':
        return <DeviceManagement />;
      case 'endpoint-security':
        return <Settings />;
      case 'reports':
        return <Reports />;
      case 'users':
        return <Settings />;
      default:
        return <UserStorage />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="main-content">
        <TopNavigation />
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;