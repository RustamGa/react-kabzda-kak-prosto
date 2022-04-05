import React from 'react';
import './button.css';

interface ButtonProps {
  onClick: () => void;
  value:string;

}

export const Button = ({
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
    >
      {props.value}
    </button>
  );
};
