import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: ${() => theme.colors.white[300]};
        color: ${() => theme.colors.black.main};
    }
`;
