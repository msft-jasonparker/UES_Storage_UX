import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, CheckCircle, HardDrive } from 'lucide-react';
import './Dashboard.css';

const storageUsageData = [
  { name: 'Jan', usage: 65 },
  { name: 'Feb', usage: 72 },
  { name: 'Mar', usage: 68 },
  { name: 'Apr', usage: 75 },
  { name: 'May', usage: 82 },
  { name: 'Jun', usage: 78 },
];

const deviceStatusData = [
  { name: 'Healthy', value: 85, color: '#107c10' },
  { name: 'Warning', value: 12, color: '#ff8c00' },
  { name: 'Critical', value: 3, color: '#d13438' },
];

const recentAlerts = [
  { id: 1, message: 'Storage capacity warning on Server-01', severity: 'warning', time: '2 hours ago' },
  { id: 2, message: 'New device registered: Laptop-156', severity: 'info', time: '4 hours ago' },
  { id: 3, message: 'Backup completed successfully', severity: 'success', time: '6 hours ago' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Storage Management Dashboard</h1>
        <p>Overview of your unified endpoint storage infrastructure</p>
      </div>

      <div className="metrics-grid">
        <div className="card metric-card">
          <HardDrive size={24} className="metric-icon" />
          <div className="metric-value">2.4 TB</div>
          <div className="metric-label">Total Storage Used</div>
        </div>
        
        <div className="card metric-card">
          <CheckCircle size={24} className="metric-icon success" />
          <div className="metric-value">156</div>
          <div className="metric-label">Devices Online</div>
        </div>
        
        <div className="card metric-card">
          <AlertTriangle size={24} className="metric-icon warning" />
          <div className="metric-value">12</div>
          <div className="metric-label">Alerts</div>
        </div>
        
        <div className="card metric-card">
          <TrendingUp size={24} className="metric-icon" />
          <div className="metric-value">94%</div>
          <div className="metric-label">System Health</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="card chart-card">
          <h3>Storage Usage Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={storageUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="usage" stroke="#0078d4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <h3>Device Status Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={deviceStatusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
              >
                {deviceStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card alerts-card">
        <h3>Recent Alerts</h3>
        <div className="alerts-list">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className={`alert-item severity-${alert.severity}`}>
              <div className="alert-message">{alert.message}</div>
              <div className="alert-time">{alert.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};