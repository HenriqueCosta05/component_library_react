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
        error: {
            main: "#E54C44",
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
                    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(249, 211, 66, 0.56)', 
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E54C44', // error.main
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#f9d342', // primary.main
                    '&.Mui-disabled': {
                        color: 'rgba(249, 211, 66, 0.56)', 
                    },
                    '&.Mui-error': {
                        color: '#E54C44', // error.main
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#4B4945",
                    color: "#f9d342",
                },
                root: {
                    "&.Mui-disabled .MuiAutocomplete-inputRoot": {
                        borderColor: "rgba(249, 211, 66, 0.56)",
                    },
                    "&.Mui-invalid .MuiAutocomplete-inputRoot": {
                        borderColor: "#E54C44",
                    },
                },
                popupIndicator: {
                    '& .Mui-error': {
                        color: '#E54C44', // error.main
                    },
                },
                clearIndicator: {
                    '& .Mui-error': {
                        color: '#E54C44', // error.main
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: "#4B4945",
                    color: "#f9d342", // Ensures text is readable
                },
                deleteIcon: {
                    color: "#f9d342", // Lighter "X" icon for better visibility
                    "&:hover": {
                        color: "#E54C44", // Change color on hover
                    },
                },
            },
        },
    },
});

// Teste