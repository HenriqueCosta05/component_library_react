import { Autocomplete } from "@mui/material";
import styled from "styled-components";
import { AutocompleteProps } from "./Autocomplete.interface";
import { theme } from "../../theme/material-ui";

export const StyledAutocomplete = styled(Autocomplete)<AutocompleteProps>`
    .MuiAutocomplete-input {
        padding: 10px;
        font-size: 16px;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.primary.main};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.primary.dark};
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.primary.main};
    }

    .MuiAutocomplete-endAdornment {
        top: 50%;
        transform: translateY(-50%);
    }

    .MuiAutocomplete-popupIndicator {
        color: ${theme.palette.primary.main};
    }

    .MuiAutocomplete-clearIndicator {
        color: ${theme.palette.primary.main};
    }

    .MuiAutocomplete-option {
        font-size: 16px;
    }

    .MuiAutocomplete-option[data-focus="true"] {
        background-color: ${theme.palette.primary.light};
    }
`;