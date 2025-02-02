import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const StyledTextField = styled(TextField) <{ $overrideColor?: string }>`
    & label.Mui-focused, {
        color: ${({ $overrideColor }) => $overrideColor};
    }

    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: ${({ $overrideColor }) => $overrideColor};
        }
   }
        
`;