import React from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({primary = false, backgroundColor = null, size = 'medium', label, ...props}) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type="button"
            className={['button', `button--${size}`, mode].join(' ')}
            style={backgroundColor && {backgroundColor}}
            {...props}
        >
            {label}
        </button>
    );
};
