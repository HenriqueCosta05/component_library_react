import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#f9d342",
            dark: "#d6b433",
            light: "#FFD700",
            contrastText: "#666",
        },
        secondary: {
            main: "#740318",
            dark: "#D84427",
            light: "#E54C44",
            contrastText: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: "Red Hat Display, sans-serif",
    },
    shape: {
        borderRadius: 8,
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f9d342', // primary.dark
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f9d342', // primary.main
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                   color: '#f9d342', // primary.main
                },
            },
        },
    },
});