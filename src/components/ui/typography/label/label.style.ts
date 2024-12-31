import styled from 'styled-components';
import { theme } from '../../../../providers/theme';

export const LabelText = styled.label<{ color?: string }>`
    font-size: 12px;
    color: ${(props) => {
        switch (props.color) {
            case 'success':
                return theme.colors.green[500];
            case 'error':
                return theme.colors.red[500];
            case 'warning':
                return theme.colors.yellow[500];
            case 'info':
                return theme.colors.blue[500];
            case 'disabled':
                return theme.colors.grey[200];
            default:
                return theme.colors.grey[500];
        }
    }};
    line-height: 16px;
`;