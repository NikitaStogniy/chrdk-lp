import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const StorageIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M21 9.5L12 2L3 9.5V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9.5Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M9 21V12H15V21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6 9H18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle 
      cx="8" 
      cy="6" 
      r="1" 
      fill="currentColor"
    />
    <circle 
      cx="16" 
      cy="6" 
      r="1" 
      fill="currentColor"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle 
      cx="11" 
      cy="11" 
      r="8" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="m21 21-4.35-4.35" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="11" 
      cy="8" 
      r="2" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    <path 
      d="M8.5 13.5L13.5 8.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const FamilyIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="9" 
      cy="7" 
      r="4" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M22 21V19C22 18.1332 21.7361 17.2878 21.2416 16.5729C20.747 15.858 20.0478 15.3065 19.2426 15" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M16 3.13003C16.8052 3.3192 17.5044 3.87067 17.999 4.58563C18.4936 5.30059 18.7574 6.146 18.7574 7.01253C18.7574 7.87906 18.4936 8.72447 17.999 9.43943C17.5044 10.1544 16.8052 10.7059 16 10.895" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="9" 
      cy="7" 
      r="1.5" 
      fill="currentColor"
    />
  </svg>
);

export const HistoryIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect 
      x="3" 
      y="4" 
      width="18" 
      height="16" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M7 8H17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M7 12H17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M7 16H13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle 
      cx="16" 
      cy="16" 
      r="3" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M16 14.5V16L17 17" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const PhotoLocationIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <circle 
      cx="9" 
      cy="9" 
      r="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M21 15L16 10L5 21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M18 6L20 8L18 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="9" 
      cy="9" 
      r="0.5" 
      fill="currentColor"
    />
  </svg>
);

export const SyncIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M21.5 2V6H17.5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M2.5 22V18H6.5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M7 13.5C7 10.4624 9.46243 8 12.5 8C14.3747 8 16.0242 8.91583 17.0005 6.32129" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M17 10.5C17 13.5376 14.5376 16 11.5 16C9.6253 16 7.97583 15.0842 6.99951 17.6787" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M19.5 4L21.5 2L19.5 4Z" 
      fill="currentColor"
    />
    <path 
      d="M4.5 20L2.5 22L4.5 20Z" 
      fill="currentColor"
    />
  </svg>
);

// Why Choose Icons
export const FastIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.1"
    />
  </svg>
);

export const ReliableIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 22S8 18 8 14V6L12 4L16 6V14C16 18 12 22 12 22Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path 
      d="M9 12L11 14L15 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const SimpleIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle 
      cx="12" 
      cy="12" 
      r="3" 
      stroke="currentColor" 
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path 
      d="M19.4 15C18.2 15.8 16.1 16.3 12 16.3C7.9 16.3 5.8 15.8 4.6 15" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M19.4 9C18.2 8.2 16.1 7.7 12 7.7C7.9 7.7 5.8 8.2 4.6 9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M12 1V23" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="1" 
      fill="currentColor"
    />
  </svg>
);