import styled from "styled-components";
import { theme } from '../../../providers/theme';

export const StyledInput = styled.input<{ $state: 'filled' | 'hover' | 'focus' | 'error' | 'disabled' | 'default' | 'success' | 'warning' | 'info', $size: 'large' | 'medium' }>` 
    padding: ${theme.spacing.sm};
    border-radius: ${(input) => {
        switch (input.$size) {
            case 'large':
                return theme.radius.sm;
            case 'medium':
                return theme.radius.xs;
            default:
                return theme.radius.sm;
        }
    }};
    margin: ${(input) => {
        switch (input.$size) {
            case 'large':
                return theme.spacing.sm;
            case 'medium':
                return theme.spacing.xs;
            default:
                return theme.spacing.sm;
        }
    }};
    border: ${(input) => {
        switch (input.$state) {
            case 'filled':
                return `1px solid ${theme.colors.grey[200]}`;
            case 'hover':
                return `1px solid ${theme.colors.primary}`;
            case 'focus':
                return `1px solid ${theme.colors.primary}`;
            case 'error':
                return `1px solid ${theme.colors.red[500]}`;
            case 'disabled':
                return `1px solid ${theme.colors.grey[200]}`;
            case 'success':
                return `1px solid ${theme.colors.green[500]}`;
            case 'warning':
                return `1px solid ${theme.colors.yellow[500]}`;
            case 'info':
                return `1px solid ${theme.colors.blue[500]}`;
            default:
                return `1px solid ${theme.colors.grey[200]}`;
        }
    }};

    &::placeholder {
        color: ${theme.colors.grey[400]};
    }
`;