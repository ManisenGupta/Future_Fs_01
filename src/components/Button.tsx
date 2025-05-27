import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
  
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={styles} 
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={styles} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;