import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, Calendar, FileText } from 'lucide-react';
import './Reports.css';

const storageReportData = [
  { month: 'Jan', allocated: 1200, used: 800, available: 400 },
  { month: 'Feb', allocated: 1300, used: 950, available: 350 },
  { month: 'Mar', allocated: 1250, used: 875, available: 375 },
  { month: 'Apr', allocated: 1400, used: 1050, available: 350 },
  { month: 'May', allocated: 1500, used: 1200, available: 300 },
  { month: 'Jun', allocated: 1450, used: 1100, available: 350 },
];

const complianceData = [
  { date: '2024-01-01', compliant: 95, nonCompliant: 5 },
  { date: '2024-01-02', compliant: 94, nonCompliant: 6 },
  { date: '2024-01-03', compliant: 96, nonCompliant: 4 },
  { date: '2024-01-04', compliant: 93, nonCompliant: 7 },
  { date: '2024-01-05', compliant: 97, nonCompliant: 3 },
];

const reportTemplates = [
  { id: 1, name: 'Storage Usage Summary', description: 'Weekly storage consumption across all devices', lastGenerated: '2 hours ago' },
  { id: 2, name: 'Device Compliance Report', description: 'Policy compliance status for all managed devices', lastGenerated: '1 day ago' },
  { id: 3, name: 'Capacity Planning Report', description: 'Storage growth trends and capacity forecasting', lastGenerated: '3 days ago' },
  { id: 4, name: 'Security Audit Report', description: 'Security posture and access control analysis', lastGenerated: '1 week ago' },
];

export const Reports: React.FC = () => {
  return (
    <div className="reports">
      <div className="page-header">
        <h1>Reports & Analytics</h1>
        <p>Generate and view storage management reports and analytics</p>
      </div>

      <div className="reports-grid">
        <div className="card chart-card">
          <div className="chart-header">
            <h3>Storage Allocation Trends</h3>
            <button className="button button-secondary">
              <Download size={16} />
              Export
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={storageReportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="allocated" fill="#0078d4" />
              <Bar dataKey="used" fill="#107c10" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <div className="chart-header">
            <h3>Compliance Tracking</h3>
            <button className="button button-secondary">
              <Download size={16} />
              Export
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="compliant" stroke="#107c10" strokeWidth={2} />
              <Line type="monotone" dataKey="nonCompliant" stroke="#d13438" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card report-templates">
        <div className="template-header">
          <h3>Report Templates</h3>
          <div className="template-actions">
            <button className="button button-secondary">
              <Calendar size={16} />
              Schedule Report
            </button>
            <button className="button button-primary">
              <FileText size={16} />
              Create Custom Report
            </button>
          </div>
        </div>

        <div className="templates-list">
          {reportTemplates.map((template) => (
            <div key={template.id} className="template-item">
              <div className="template-info">
                <h4>{template.name}</h4>
                <p>{template.description}</p>
                <span className="last-generated">Last generated: {template.lastGenerated}</span>
              </div>
              <div className="template-actions-inline">
                <button className="button button-secondary">Generate</button>
                <button className="button button-secondary">
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-card card">
          <h4>Total Reports Generated</h4>
          <div className="stat-value">847</div>
          <div className="stat-change positive">+12% this month</div>
        </div>
        
        <div className="stat-card card">
          <h4>Scheduled Reports</h4>
          <div className="stat-value">23</div>
          <div className="stat-change">Active schedules</div>
        </div>
        
        <div className="stat-card card">
          <h4>Data Retention</h4>
          <div className="stat-value">90 days</div>
          <div className="stat-change">Current policy</div>
        </div>
      </div>
    </div>
  );
};