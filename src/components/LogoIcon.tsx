import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ size = 24, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Droplet Outline/Fill */}
      <path
        d="M12 2C12 2 5 9 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 9 12 2 12 2Z"
        fill="url(#flow-gradient)"
      />
      {/* Wrench Cutout */}
      <path
        d="M12 9C10.34 9 9 10.34 9 12C9 12.82 9.33 13.56 9.87 14.1L8 16.97L9.5 17.97L11.37 15.1C11.57 15.16 11.78 15.2 12 15.2C13.66 15.2 15 13.86 15 12.2C15 11.38 14.67 10.64 14.13 10.1L12.63 11.6L11.63 10.6L13.13 9.1C12.78 9.04 12.39 9 12 9Z"
        fill="white"
      />
      <defs>
        <linearGradient id="flow-gradient" x1="5" y1="2" x2="19" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6E63" />
          <stop offset="1" stopColor="#0F2B3D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
