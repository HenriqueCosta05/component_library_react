import styled from 'styled-components';

export const BodyText = styled.p<{ $variant?: 'body1' | 'body2' | 'body3' | 'body4', $color?: string }>`
    font-size: ${({ $variant }) => {
        switch ($variant) {
            case 'body1':
                return '16px';
            case 'body2':
                return '16px';
            case 'body3':
                return '14px';
            case 'body4':
                return '14px';
            default:
                return '16px';
        }
    }};
    line-height: ${({ $variant }) => {
        switch ($variant) {
            case 'body1':
                return '24px';
            case 'body2':
                return '24px';
            case 'body3':
                return '20px';
            case 'body4':
                return '20px';
            default:
                return '24px';
        }}
    };
    color: ${({ $color }) => $color ? $color : 'black'};
    margin: 0;
    padding: 0;
    font-weight: ${({ $variant }) => {
        switch ($variant) {
            case 'body1':
                return '400';
            case 'body2':
                return '500';
            case 'body3':
                return '400';
            case 'body4':
                return '500';
            default:
                return '400';
        }
    }};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.5px;
`;