import React from "react";
import { Autocomplete, TextField } from "../components";

export default {
    component: Autocomplete,
}

export const Default = () => (
    <Autocomplete
        options={["Option 1", "Option 2", "Option 3"]}
        renderInput={(props) => <TextField {...props} label="Escolha..."/>}
    />
);