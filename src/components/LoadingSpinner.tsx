// src/components/LoadingSpinner.tsx

import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B132B] dark:bg-white transition-colors duration-300">
      <div className="text-center">
        <div className="loader mx-auto mb-4"></div>
        <p className="text-cyan-400 text-sm font-medium tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;