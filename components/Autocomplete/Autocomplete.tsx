import React from "react";
import { StyledAutocomplete } from "./Autocomplete.styles";
import { AutocompleteProps } from "./Autocomplete.interface";

export default function Autocomplete({ options, renderInput, ...props }: AutocompleteProps) {
    return (
        <StyledAutocomplete
            options={options}
            renderInput={renderInput}
            {...props}
        />
    );
}