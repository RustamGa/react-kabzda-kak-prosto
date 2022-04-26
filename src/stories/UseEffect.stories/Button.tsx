import React from 'react';

interface ButtonProps {
    onClick: () => void;
    value: string;

}

export const Button = ({...props}: ButtonProps) => {
    return (
        <button
            {...props}
        >
            {props.value}
        </button>
    );
};
