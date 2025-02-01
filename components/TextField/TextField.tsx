import { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import { StyledTextField } from "./TextField.style";

export default function TextField(props: TextFieldProps) {
    return <StyledTextField {...props} $overrideColor={props.color} />;
}