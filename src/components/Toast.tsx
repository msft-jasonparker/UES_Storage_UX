import React from 'react';
import { AlertTriangle, XCircle, CheckCircle, Info } from 'lucide-react';
import './Toast.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  type, 
  message, 
  onClose, 
  duration = 4000 
}) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle size={20} />;
      case 'error': return <XCircle size={20} />;
      case 'warning': return <AlertTriangle size={20} />;
      case 'info': return <Info size={20} />;
    }
  };

  return (
    <div 
      className={`toast toast-${type}`}
      role="alert"
      aria-live="polite"
    >
      <div className="toast-icon">
        {getIcon()}
      </div>
      <div className="toast-message">{message}</div>
      <button 
        className="toast-close"
        onClick={onClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};