import styled from 'styled-components';
import { theme } from '../../../../providers/theme';

export const HeadingText = styled.h1<{ $variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5', $color?: string }>`
    font-size: ${({ $variant }) => {
        switch ($variant) {
            case 'h1':
                return '48px';
            case 'h2':
                return '40px';
            case 'h3':
                return '32px';
            case 'h4':
                return '28px';
            case 'h5':
                return '24px';
            default:
                return '40px';
        }
    }};
    line-height: ${({ $variant }) => {
        switch ($variant) {
            case 'h1':
                return '58px';
            case 'h2':
                return '48px';
            case 'h3':
                return '38px';
            case 'h4':
                return '34px';
            case 'h5':
                return '28px';
            default:
                return '48px';
        }
    }};
    color: ${({ $color }) => $color ? $color : theme.colors.primary.main};
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
`;