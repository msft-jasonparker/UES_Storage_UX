import React, { useState } from 'react';
import { Search, Filter, RefreshCw, MoreHorizontal, ChevronRight, AlertTriangle } from 'lucide-react';
import './UserStorage.css';

interface UserStorageData {
  id: string;
  user: string;
  usedSizeGB: number;
  maxSize: string;
  state: 'Attached' | 'Pending' | 'Not attached';
  lastAttach: string;
}

const mockUserData: UserStorageData[] = [
  {
    id: '1',
    user: 'david_lang@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 6.96,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '6/8/2025, 3:54:49 PM'
  },
  {
    id: '2',
    user: 'justin_jong@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 28.13,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '1/2/2025, 8:27:49 AM'
  },
  {
    id: '3',
    user: 'james_garcia@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 4.64,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '2/13/2025, 4:16:39 PM'
  },
  {
    id: '4',
    user: 'laura_liang@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 9.79,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '2/14/2025, 2:35:14 PM'
  },
  {
    id: '5',
    user: 'kevin_reed@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 13.35,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '6/4/2025, 8:51:42 PM'
  },
  {
    id: '6',
    user: 'justin_ryan@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 2.12,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '3/9/2025, 3:50:34 PM'
  },
  {
    id: '7',
    user: 'heather_ning@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 18.86,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '8/10/2025, 2:27:58 PM'
  },
  {
    id: '8',
    user: 'elizabeth_chang@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 4.35,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '11/24/2025, 4:37:31 PM'
  },
  {
    id: '9',
    user: 'justin_lang@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 29.65,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '1/20/2025, 11:04:59 PM'
  },
  {
    id: '10',
    user: 'james_all@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 3.24,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '4/12/2025, 11:30:40 PM'
  },
  {
    id: '11',
    user: 'sarah_wilson@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 15.47,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '5/15/2025, 2:22:15 PM'
  },
  {
    id: '12',
    user: 'michael_brown@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 22.88,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '7/22/2025, 9:33:42 AM'
  },
  {
    id: '13',
    user: 'anna_davis@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 8.12,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '3/18/2025, 4:55:30 PM'
  },
  {
    id: '14',
    user: 'robert_miller@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 31.92,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '9/12/2025, 1:17:25 PM'
  },
  {
    id: '15',
    user: 'lisa_taylor@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 12.34,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '6/30/2025, 11:45:18 AM'
  },
  {
    id: '16',
    user: 'mark_anderson@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 19.76,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '4/8/2025, 3:28:55 PM'
  },
  {
    id: '17',
    user: 'jennifer_thomas@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 7.89,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '8/25/2025, 10:12:40 AM'
  },
  {
    id: '18',
    user: 'chris_jackson@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 24.56,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '2/5/2025, 6:41:33 PM'
  },
  {
    id: '19',
    user: 'amanda_white@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 16.23,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '5/27/2025, 8:19:22 AM'
  },
  {
    id: '20',
    user: 'daniel_harris@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 11.45,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '7/14/2025, 2:37:18 PM'
  },
  {
    id: '21',
    user: 'nicole_martin@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 26.78,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '9/3/2025, 5:23:45 PM'
  },
  {
    id: '22',
    user: 'paul_thompson@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 5.91,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '1/19/2025, 12:56:33 PM'
  },
  {
    id: '23',
    user: 'stephanie_garcia@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 20.14,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '6/11/2025, 4:08:27 PM'
  },
  {
    id: '24',
    user: 'ryan_martinez@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 14.67,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '3/29/2025, 9:14:52 AM'
  },
  {
    id: '25',
    user: 'melissa_rodriguez@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 30.21,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '8/7/2025, 1:42:16 PM'
  },
  {
    id: '26',
    user: 'kevin_lewis@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 9.33,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '4/16/2025, 7:25:41 AM'
  },
  {
    id: '27',
    user: 'rachel_lee@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 17.82,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '10/2/2025, 3:59:28 PM'
  },
  {
    id: '28',
    user: 'jason_walker@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 23.45,
    maxSize: '32 GB',
    state: 'Pending',
    lastAttach: '5/8/2025, 11:33:17 AM'
  },
  {
    id: '29',
    user: 'kimberly_hall@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 6.78,
    maxSize: '32 GB',
    state: 'Attached',
    lastAttach: '7/1/2025, 2:15:44 PM'
  },
  {
    id: '30',
    user: 'andrew_allen@thevoipdata001.onmicrosoft.com',
    usedSizeGB: 21.09,
    maxSize: '32 GB',
    state: 'Not attached',
    lastAttach: '9/19/2025, 8:47:52 AM'
  }
];

const getStateClass = (state: UserStorageData['state']) => {
  switch (state) {
    case 'Attached': return 'state-attached';
    case 'Pending': return 'state-pending';
    case 'Not attached': return 'state-not-attached';
    default: return '';
  }
};

export const UserStorage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [cloudPcSize, setCloudPcSize] = useState<'128' | '256'>('256');
  const [numberOfCloudPcs, setNumberOfCloudPcs] = useState(2);
  const [userStorageMaxSize, setUserStorageMaxSize] = useState(32);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsersInput, setTotalUsersInput] = useState(mockUserData.length.toString());
  const [userData, setUserData] = useState<UserStorageData[]>(mockUserData);
  const itemsPerPage = 10;

  // Function to generate random user data
  const generateUserData = (count: number): UserStorageData[] => {
    const firstNames = ['David', 'Justin', 'James', 'Laura', 'Kevin', 'Sarah', 'Mike', 'Lisa', 'John', 'Emma', 'Chris', 'Anna', 'Robert', 'Jennifer', 'Mark', 'Maria', 'Paul', 'Susan', 'Daniel', 'Karen'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
    const states: Array<'Attached' | 'Pending' | 'Not attached'> = ['Attached', 'Pending', 'Not attached'];
    const domain = 'thevoipdata001.onmicrosoft.com';
    
    return Array.from({ length: count }, (_, index) => {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const email = `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${domain}`;
      const usedSizeGB = Math.round((Math.random() * userStorageMaxSize + 0.1) * 100) / 100;
      const state = states[Math.floor(Math.random() * states.length)];
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 365));
      
      return {
        id: (index + 1).toString(),
        user: email,
        usedSizeGB,
        maxSize: `${userStorageMaxSize} GB`,
        state,
        lastAttach: randomDate.toLocaleString()
      };
    });
  };

  // Function to handle applying new user count
  const handleApplyUserCount = () => {
    const count = parseInt(totalUsersInput);
    if (count >= 0 && count <= 999) {
      const newUserData = generateUserData(count);
      setUserData(newUserData);
      setSelectedUsers([]);
      setCurrentPage(1);
    }
  };
  
  // Update user data when max storage changes
  const updatedUserData = userData.map(user => ({
    ...user,
    usedSizeGB: Math.min(user.usedSizeGB, userStorageMaxSize),
    maxSize: `${userStorageMaxSize} GB`
  }));

  // Calculate storage metrics using updated data
  const totalStorage = parseInt(cloudPcSize) * numberOfCloudPcs;
  const usedStorage = updatedUserData.reduce((sum, user) => sum + user.usedSizeGB, 0);
  const availableStorage = Math.max(0, totalStorage - usedStorage);
  const exceededStorage = usedStorage > totalStorage ? usedStorage - totalStorage : 0;
  const usagePercentage = Math.min((usedStorage / totalStorage) * 100, 100);
  const isOverQuota = usedStorage > totalStorage;
  const totalUsers = userData.length;
  const potentialMaxUsage = userStorageMaxSize * totalUsers;
  const isPotentialOverQuota = potentialMaxUsage > totalStorage;

  const filteredUsers = updatedUserData.filter(user =>
    user.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedUsers([]);
  };

  return (
    <div className="user-storage">
      {/* Warning Banners */}
      {isOverQuota && (
        <div className="warning-banner">
          <AlertTriangle size={20} />
          <span>
            The user storage for this policy has exceeded its quota. Add more cloud pcs or delete per-user storage to get under the quota total. In 7 days, the oldest per-user storage will be deleted.
          </span>
        </div>
      )}

      {isPotentialOverQuota && !isOverQuota && (
        <div className="warning-banner">
          <AlertTriangle size={20} />
          <span>
            WARNING: Based on the user storage max size and the total number of users, this policy could exceed the storage quota.
          </span>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span>Home</span>
        <ChevronRight size={16} />
        <span>Devices | Windows 365</span>
      </div>

      {/* Page Header */}
      <div className="page-header">
        <div className="header-title">
          <h1>Contoso Hotel Staff</h1>
          <button className="close-button">×</button>
        </div>
        
        <div className="page-actions">
          <button className="action-btn">
            <RefreshCw size={16} />
            Reprovision
          </button>
          <button className="action-btn">
            Delete
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button className="tab-item">Overview</button>
        <button className="tab-item">Properties</button>
        <button className="tab-item">Devices</button>
        <button className="tab-item active">User storage</button>
      </div>

      {/* Content Area */}
      <div className="content-section">
        <div className="storage-description">
          <p>Monitor and manage user storage usage. <a href="#" className="learn-link">Learn more about User Experience Sync</a></p>
        </div>

        {/* Storage Information */}
        <div className="storage-info-section">
          <h3>Storage information</h3>
          <div className="storage-metrics">
            <div className="metric-item">
              <span className="metric-label">Cloud PC size</span>
              <select 
                className="metric-dropdown"
                value={cloudPcSize}
                onChange={(e) => setCloudPcSize(e.target.value as '128' | '256')}
              >
                <option value="128">2vCPU / 8GB / 128GB</option>
                <option value="256">2vCPU / 8GB / 256GB</option>
              </select>
            </div>
            <div className="metric-item">
              <span className="metric-label">Number of Cloud PCs</span>
              <select 
                className="metric-dropdown"
                value={numberOfCloudPcs}
                onChange={(e) => setNumberOfCloudPcs(parseInt(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="metric-item">
              <span className="metric-label">User storage max size</span>
              <select 
                className="metric-dropdown"
                value={userStorageMaxSize}
                onChange={(e) => setUserStorageMaxSize(parseInt(e.target.value))}
              >
                <option value="4">4 GB</option>
                <option value="8">8 GB</option>
                <option value="16">16 GB</option>
                <option value="32">32 GB</option>
                <option value="64">64 GB</option>
              </select>
            </div>
            <div className="metric-item">
              <span className="metric-label">Total users</span>
              <div className="metric-input-group">
                <input
                  type="number"
                  className="metric-input"
                  value={totalUsersInput}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 999)) {
                      setTotalUsersInput(value);
                    }
                  }}
                  min="0"
                  max="999"
                  placeholder="0-999"
                />
                <button
                  className="apply-btn"
                  onClick={handleApplyUserCount}
                  disabled={
                    totalUsersInput === '' || 
                    parseInt(totalUsersInput) < 0 || 
                    parseInt(totalUsersInput) > 999 ||
                    parseInt(totalUsersInput) === userData.length
                  }
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Storage Progress Bar */}
          <div className="storage-progress">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${usagePercentage}%` }}
              />
            </div>
            <div className="storage-stats">
              <span>Total: <strong>{totalStorage} GB</strong></span>
              {availableStorage > 0 ? (
                <span>Available: <strong>{availableStorage.toFixed(2)} GB</strong></span>
              ) : (
                <span>Available: <strong>0 GB</strong></span>
              )}
              <span>Used: <strong>{usedStorage.toFixed(2)} GB</strong></span>
              {exceededStorage > 0 && (
                <span className="exceeded">Exceeded: <strong>{exceededStorage.toFixed(2)} GB</strong></span>
              )}
            </div>
          </div>
        </div>

        {/* Table Controls */}
        <div className="table-controls">
          <button className="control-btn">
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="control-btn">
            Columns ▼
          </button>
          <button className="control-btn">
            Delete
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <div className="search-box">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="filter-btn">
            <Filter size={16} />
            Add filters
          </button>
        </div>

        {/* User Storage Table */}
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(currentUsers.map(u => u.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                    checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                  />
                </th>
                <th>User</th>
                <th>Used Size</th>
                <th>Max Size</th>
                <th>State</th>
                <th>Last Attach</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </td>
                  <td className="user-email">{user.user}</td>
                  <td>{user.usedSizeGB.toFixed(2)} GB</td>
                  <td>{user.maxSize}</td>
                  <td>
                    <span className={`state-badge ${getStateClass(user.state)}`}>
                      {user.state}
                    </span>
                  </td>
                  <td>{user.lastAttach}</td>
                  <td>
                    <button className="action-menu">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span>Rows per page: 10</span>
          <span>{startIndex + 1}-{Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length}</span>
          <div className="pagination-controls">
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              ←
            </button>
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={currentPage === pageNum ? 'active' : ''}
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > 5 && <span>...</span>}
            <button 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};