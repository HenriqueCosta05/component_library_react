import React from "react";

export interface AutocompleteProps {
    options: unknown[];
    renderInput: (params: object) => React.ReactNode;
    autocomplete?: boolean;
    autoHighlight?: boolean;
    autoSelect?: boolean;
    blurOnSelect?: 'mouse' | 'touch' | boolean;
    clearIcon?: React.ReactNode;
    multiple?: boolean;
    disabled?: boolean;
}