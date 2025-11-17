
import React from 'react';

export const MusicNoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C10.93 2 10 2.93 10 4s.93 2 1.99 2c.49 0 .93-.19 1.27-.49L12 7.07l-1.27-1.56C11.07 5.19 11.51 5 12.01 5c1.06 0 1.99-.93 1.99-2s-.93-2-1.99-2zM4 10c-1.07 0-2 .93-2 2s.93 2 2 2c.49 0 .93-.19 1.27-.49L4 15.07l-1.27-1.56C3.07 13.19 3.51 13 4.01 13c1.06 0 1.99-.93 1.99-2s-.93-2-1.99-2zm16 0c-1.07 0-2 .93-2 2s.93 2 2 2c.49 0 .93-.19 1.27-.49L20 15.07l-1.27-1.56c-.34.3-.78.49-1.27.49-1.06 0-1.99-.93-1.99-2s.93-2 1.99-2zM12 18c-1.07 0-2 .93-2 2s.93 2 2 2 2-.93 2-2-.93-2-2-2z"/>
  </svg>
);

export const AlertTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);
