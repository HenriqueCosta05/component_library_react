import styled from 'styled-components'
import { theme } from '../../../../providers/theme';

export const CaptionText = styled.p<{ $variant?: 'caption1' | 'caption2' | 'caption3' }>`
    font-size: ${({ $variant }) => {
        switch ($variant) {
            case 'caption1':
                return '12px';
            case 'caption2':
                return '12px';
            case 'caption3':
                return '10px';
            default:
                return '12px';
        }
    }};
    line-height: ${({ $variant }) => {
        switch ($variant) {
            case 'caption1':
                return '12px';
            case 'caption2':
                return '12px';
            case 'caption3':
                return '10px';
            default:
                return '12px';
        }
    }};
    color: ${() => theme.colors.grey[500]};
    margin: 0;
    padding: 0;
    font-weight: ${({ $variant }) => {
        switch ($variant) {
            case 'caption1':
                return '400';
            case 'caption2':
                return '500';
            case 'caption3':
                return '400';
            default:
                return '400';
        }
    }};
    font-family: 'Inter', sans-serif;
`;