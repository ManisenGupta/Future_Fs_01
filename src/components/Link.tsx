import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If onClick prop exists, call it
    if (onClick) {
      onClick();
    }
    
    // Smooth scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`text-gray-300 hover:text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};