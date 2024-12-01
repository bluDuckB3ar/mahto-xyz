"use client";
import React, { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => (
  <button
    className={`
      active:translate-x-[1px]
      [box-shadow:5px_5px_rgb(236_215_60)]
      active:[box-shadow:0px_0px_rgb(236_215_60)]
      group
      relative
      inline-flex
      sm:h-8
      lg:px-16
      sm:px-8
      sm:border-3
      sm:square
      justify-center
      items-center
      overflow-hidden
      border-2
      border-duckBlue
      bg-transparent
      font-medium
      sm:font-semibold
      text-duckBlue2
      transition-all
      duration-100
      active:translate-y-[1px]
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
