import styled from "styled-components";
import { theme } from "../../../../providers/theme";

export const ButtonText = styled.label<{ $size: 'tiny' | 'small' | 'medium' | 'large' | 'giant', $color?: string }>`
    font-size: ${({ $size }) => {
        switch ($size) {
            case 'tiny':
                return '10px';
            case 'small':
                return '12px';
            case 'medium':
                return '14px';
            case 'large':
                return '16px';
            case 'giant':
                return '18px';
        }
    }};
    line-height: ${({ $size }) => {
        switch ($size) {
            case 'tiny':
                return '12px';
            case 'small':
                return '16px';
            case 'medium':
                return '16px';
            case 'large':
                return '20px';
            case 'giant':
                return '24px';
        }
    }};
    color: ${({ $color }) => $color ? $color : 'black'};
    margin: 0;
    padding: 0;
    font-weight: ${theme.fontWeights.medium};
    font-family: 'Inter', sans-serif;
`;