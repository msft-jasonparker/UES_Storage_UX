import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';
import './TopNavigation.css';

export const TopNavigation: React.FC = () => {
  return (
    <header className="top-nav">
      <div className="search-section">
        <div className="search-box">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="nav-actions">
        <button className="nav-button">
          <img src="https://via.placeholder.com/24x24/0078d4/ffffff?text=C" alt="Copilot" className="copilot-icon" />
          Copilot
        </button>
        <button className="nav-button">
          <HelpCircle size={20} />
        </button>
        <button className="nav-button">
          <Bell size={20} />
        </button>
        <button className="nav-button user-button">
          <div className="user-avatar">JP</div>
          <span>rparker@thevoipdata001...</span>
        </button>
      </div>
    </header>
  );
};