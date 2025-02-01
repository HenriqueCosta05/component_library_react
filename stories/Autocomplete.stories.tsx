import React from "react";
import type { Meta } from '@storybook/react';
import { Autocomplete, TextField } from "../components";

const meta: Meta<typeof Autocomplete> = {
    title: "Autocomplete",
    component: Autocomplete,
}
export default meta;

export const Default = () => (
    <Autocomplete
        options={["Option 1", "Option 2", "Option 3"]}
        renderInput={(props) => <TextField {...props} label="Escolha uma opção..." />}
    />
);
