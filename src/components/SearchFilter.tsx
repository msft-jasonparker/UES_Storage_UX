import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import './SearchFilter.css';

interface SearchFilterProps {
  onSearch: (term: string) => void;
  onFilter: (filters: Record<string, any>) => void;
  placeholder?: string;
  filters?: Array<{
    key: string;
    label: string;
    type: 'select' | 'date' | 'checkbox';
    options?: Array<{ value: string; label: string }>;
  }>;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearch,
  onFilter,
  placeholder = "Search...",
  filters = []
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...activeFilters, [key]: value };
    if (!value || value === '') {
      delete newFilters[key];
    }
    setActiveFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    onFilter({});
  };

  const activeFilterCount = Object.keys(activeFilters).length;

  return (
    <div className="search-filter">
      <div className="search-filter-controls">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="search-input"
            aria-label="Search items"
          />
          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => handleSearchChange('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        {filters.length > 0 && (
          <button
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
            aria-expanded={showFilters}
          >
            <Filter size={16} />
            Filters
            {activeFilterCount > 0 && (
              <span className="filter-count">{activeFilterCount}</span>
            )}
          </button>
        )}
      </div>

      {showFilters && filters.length > 0 && (
        <div className="filter-panel">
          <div className="filter-header">
            <h3>Filter Options</h3>
            {activeFilterCount > 0 && (
              <button
                className="clear-filters"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className="filter-grid">
            {filters.map((filter) => (
              <div key={filter.key} className="filter-item">
                <label className="filter-label">{filter.label}</label>
                {filter.type === 'select' && (
                  <select
                    value={activeFilters[filter.key] || ''}
                    onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All</option>
                    {filter.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                {filter.type === 'checkbox' && (
                  <input
                    type="checkbox"
                    checked={activeFilters[filter.key] || false}
                    onChange={(e) => handleFilterChange(filter.key, e.target.checked)}
                    className="filter-checkbox"
                  />
                )}
                {filter.type === 'date' && (
                  <input
                    type="date"
                    value={activeFilters[filter.key] || ''}
                    onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                    className="filter-date"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};