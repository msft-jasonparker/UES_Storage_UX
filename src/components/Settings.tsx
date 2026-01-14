import React, { useState } from 'react';
import { Save, Bell, Shield, Database, Users, Globe } from 'lucide-react';
import './Settings.css';

interface SettingSection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const settingSections: SettingSection[] = [
  { id: 'general', title: 'General', icon: <Globe size={20} /> },
  { id: 'storage', title: 'Storage Policies', icon: <Database size={20} /> },
  { id: 'security', title: 'Security', icon: <Shield size={20} /> },
  { id: 'notifications', title: 'Notifications', icon: <Bell size={20} /> },
  { id: 'users', title: 'User Management', icon: <Users size={20} /> },
];

export const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [settings, setSettings] = useState({
    autoBackup: true,
    compressionEnabled: true,
    encryptionLevel: 'aes256',
    retentionPeriod: '90',
    notifyOnAlert: true,
    emailReports: true,
    maxStoragePerDevice: '1000',
    allowPersonalFiles: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const handleSaveChanges = async () => {
    setIsLoading(true);
    setSaveStatus('saving');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setSaveStatus('idle');
  };

  const renderGeneralSettings = () => (
    <div className="settings-content">
      <h3>General Settings</h3>
      <div className="setting-group">
        <label className="setting-item">
          <div className="setting-info">
            <span>Auto Backup</span>
            <p>Automatically backup device data to central storage</p>
          </div>
          <input
            type="checkbox"
            checked={settings.autoBackup}
            onChange={(e) => handleSettingChange('autoBackup', e.target.checked)}
          />
        </label>
        
        <label className="setting-item">
          <div className="setting-info">
            <span>Enable Compression</span>
            <p>Compress data to save storage space</p>
          </div>
          <input
            type="checkbox"
            checked={settings.compressionEnabled}
            onChange={(e) => handleSettingChange('compressionEnabled', e.target.checked)}
          />
        </label>

        <div className="setting-item">
          <div className="setting-info">
            <span>Data Retention Period</span>
            <p>How long to keep archived data (days)</p>
          </div>
          <input
            type="number"
            value={settings.retentionPeriod}
            onChange={(e) => handleSettingChange('retentionPeriod', e.target.value)}
            className="setting-input"
          />
        </div>
      </div>
    </div>
  );

  const renderStorageSettings = () => (
    <div className="settings-content">
      <h3>Storage Policies</h3>
      <div className="setting-group">
        <div className="setting-item">
          <div className="setting-info">
            <span>Max Storage Per Device</span>
            <p>Maximum storage allocation per device (GB)</p>
          </div>
          <input
            type="number"
            value={settings.maxStoragePerDevice}
            onChange={(e) => handleSettingChange('maxStoragePerDevice', e.target.value)}
            className="setting-input"
          />
        </div>
        
        <label className="setting-item">
          <div className="setting-info">
            <span>Allow Personal Files</span>
            <p>Permit users to store personal files on managed devices</p>
          </div>
          <input
            type="checkbox"
            checked={settings.allowPersonalFiles}
            onChange={(e) => handleSettingChange('allowPersonalFiles', e.target.checked)}
          />
        </label>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="settings-content">
      <h3>Security Settings</h3>
      <div className="setting-group">
        <div className="setting-item">
          <div className="setting-info">
            <span>Encryption Level</span>
            <p>Choose encryption standard for stored data</p>
          </div>
          <select
            value={settings.encryptionLevel}
            onChange={(e) => handleSettingChange('encryptionLevel', e.target.value)}
            className="setting-select"
          >
            <option value="aes128">AES-128</option>
            <option value="aes256">AES-256</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="settings-content">
      <h3>Notification Settings</h3>
      <div className="setting-group">
        <label className="setting-item">
          <div className="setting-info">
            <span>Alert Notifications</span>
            <p>Receive notifications for system alerts</p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifyOnAlert}
            onChange={(e) => handleSettingChange('notifyOnAlert', e.target.checked)}
          />
        </label>
        
        <label className="setting-item">
          <div className="setting-info">
            <span>Email Reports</span>
            <p>Receive periodic email reports</p>
          </div>
          <input
            type="checkbox"
            checked={settings.emailReports}
            onChange={(e) => handleSettingChange('emailReports', e.target.checked)}
          />
        </label>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'general': return renderGeneralSettings();
      case 'storage': return renderStorageSettings();
      case 'security': return renderSecuritySettings();
      case 'notifications': return renderNotificationSettings();
      case 'users': return (
        <div className="settings-content">
          <h3>User Management</h3>
          <p>User management features coming soon...</p>
        </div>
      );
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="settings">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Configure system preferences and policies</p>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          {settingSections.map((section) => (
            <button
              key={section.id}
              className={`settings-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        <div className="settings-main">
          <div className="card">
            {renderContent()}
            <div className="settings-actions">
              <button className="button button-secondary">Reset to Default</button>
              <button className="button button-primary">
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};