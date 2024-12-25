import React from 'react';
import { StyledButton } from './button.style';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: string;
    size: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
    variant?: 'primary' | 'outlined';
    disabled?: boolean;
}

export default function Button({ children, onClick, color, size, variant, disabled }: ButtonProps) {
    return (
        <StyledButton onClick={onClick} color={color} $size={size} $variant={variant} disabled={disabled}>
            {children}
        </StyledButton>
    );
}