import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Laptop, Smartphone, Monitor } from 'lucide-react';
import './DeviceManagement.css';

interface Device {
  id: string;
  name: string;
  type: 'laptop' | 'desktop' | 'mobile';
  status: 'online' | 'offline' | 'warning';
  storageUsed: string;
  storageTotal: string;
  lastSync: string;
  user: string;
}

const mockDevices: Device[] = [
  {
    id: '1',
    name: 'LAPTOP-JOHN-001',
    type: 'laptop',
    status: 'online',
    storageUsed: '245 GB',
    storageTotal: '500 GB',
    lastSync: '2 minutes ago',
    user: 'John Smith'
  },
  {
    id: '2',
    name: 'DESKTOP-MARY-002',
    type: 'desktop',
    status: 'online',
    storageUsed: '1.2 TB',
    storageTotal: '2 TB',
    lastSync: '5 minutes ago',
    user: 'Mary Johnson'
  },
  {
    id: '3',
    name: 'MOBILE-ALEX-003',
    type: 'mobile',
    status: 'warning',
    storageUsed: '58 GB',
    storageTotal: '64 GB',
    lastSync: '1 hour ago',
    user: 'Alex Brown'
  },
  {
    id: '4',
    name: 'LAPTOP-SARAH-004',
    type: 'laptop',
    status: 'offline',
    storageUsed: '180 GB',
    storageTotal: '256 GB',
    lastSync: '2 days ago',
    user: 'Sarah Wilson'
  },
];

const getDeviceIcon = (type: Device['type']) => {
  switch (type) {
    case 'laptop': return <Laptop size={16} />;
    case 'desktop': return <Monitor size={16} />;
    case 'mobile': return <Smartphone size={16} />;
  }
};

const getStatusClass = (status: Device['status']) => {
  switch (status) {
    case 'online': return 'status-healthy';
    case 'offline': return 'status-error';
    case 'warning': return 'status-warning';
  }
};

export const DeviceManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const filteredDevices = mockDevices.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectDevice = (deviceId: string) => {
    setSelectedDevices(prev =>
      prev.includes(deviceId)
        ? prev.filter(id => id !== deviceId)
        : [...prev, deviceId]
    );
  };

  return (
    <div className="device-management">
      <div className="page-header">
        <h1>Device Management</h1>
        <p>Monitor and manage storage across all endpoint devices</p>
      </div>

      <div className="device-controls">
        <div className="search-filter-section">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search devices or users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="button button-secondary">
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="action-buttons">
          <button className="button button-secondary">Bulk Actions</button>
          <button className="button button-primary">Add Device</button>
        </div>
      </div>

      <div className="card">
        <div className="device-table-header">
          <h3>Connected Devices ({filteredDevices.length})</h3>
          {selectedDevices.length > 0 && (
            <span className="selected-count">{selectedDevices.length} selected</span>
          )}
        </div>

        <table className="table device-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedDevices(filteredDevices.map(d => d.id));
                    } else {
                      setSelectedDevices([]);
                    }
                  }}
                  checked={selectedDevices.length === filteredDevices.length}
                />
              </th>
              <th>Device</th>
              <th>Status</th>
              <th>Storage Usage</th>
              <th>User</th>
              <th>Last Sync</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
              <tr key={device.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedDevices.includes(device.id)}
                    onChange={() => handleSelectDevice(device.id)}
                  />
                </td>
                <td>
                  <div className="device-info">
                    <div className="device-icon">
                      {getDeviceIcon(device.type)}
                    </div>
                    <div>
                      <div className="device-name">{device.name}</div>
                      <div className="device-type">{device.type}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={getStatusClass(device.status)}>
                    {device.status}
                  </span>
                </td>
                <td>
                  <div className="storage-info">
                    <div>{device.storageUsed} / {device.storageTotal}</div>
                    <div className="storage-bar">
                      <div
                        className="storage-fill"
                        style={{
                          width: `${(parseInt(device.storageUsed) / parseInt(device.storageTotal)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td>{device.user}</td>
                <td>{device.lastSync}</td>
                <td>
                  <button className="action-button">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};