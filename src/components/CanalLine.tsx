import React from 'react';

interface CanalLineProps {
  height?: number;
  className?: string;
  animate?: boolean;
}

export const CanalLine: React.FC<CanalLineProps> = ({
  height = 40,
  className = '',
  animate = false,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center flex-shrink-0 ${
        animate ? 'animate-canal' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-[3px] bg-secondary rounded-b-full"
        style={{ height: `${height}px` }}
      />
      <div className="w-[9px] h-[9px] rounded-full bg-secondary -mt-[1px]" />
    </div>
  );
};
