"use client"; 
import React, { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>; // Add onClick property
};

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => (
  <button
    className={`
      group
      relative
      inline-flex
      h-12
      sm:h-16
      lg:h-20
      items-center
      justify-center
      overflow-hidden
      rounded-md
      border-2
      border-duckBlue
      bg-transparent
      px-4
      sm:px-6
      lg:px-8
      font-medium
      sm:font-semibold
      text-duckBlue
      transition-all
      duration-100
      active:translate-x-[1px]
      active:translate-y-[1px]
      [box-shadow:5px_5px_rgb(236_215_60)]
      active:[box-shadow:0px_0px_rgb(236_215_60)]
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

