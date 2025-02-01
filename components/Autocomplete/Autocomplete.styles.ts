import { Autocomplete, AutocompleteProps } from "@mui/material";
import styled from "styled-components";

type StyledAutocompleteProps<T> = AutocompleteProps<T, false, false, false>;

export const StyledAutocomplete = styled(Autocomplete)<StyledAutocompleteProps<unknown>>`
    
`;