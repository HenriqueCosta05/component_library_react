import { createTheme, CssBaseline } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material";
import {theme as MuiTheme} from "../../theme/material-ui";

const ThemeDecorator = (Story) => {

    const theme = createTheme(MuiTheme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    );
};

export default ThemeDecorator;