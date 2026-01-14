import React, { useState } from 'react';
import { Info } from 'lucide-react';
import './InfoTooltip.css';

interface InfoTooltipProps {
  text: string;
  size?: number;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ text, size = 14 }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="info-tooltip-container">
      <button
        className="info-tooltip-trigger"
        onClick={() => setIsVisible(!isVisible)}
        onBlur={() => setIsVisible(false)}
        aria-label="More information"
        type="button"
      >
        <Info size={size} />
      </button>
      {isVisible && (
        <div className="info-tooltip-balloon" role="tooltip">
          <div className="tooltip-content">
            {text}
          </div>
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};