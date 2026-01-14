import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text = 'Loading...' 
}) => {
  return (
    <div className={`loading-spinner ${size}`} role="status" aria-label={text}>
      <div className="spinner"></div>
      <span className="sr-only">{text}</span>
    </div>
  );
};