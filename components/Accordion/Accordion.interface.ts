import { AccordionProps as MuiAccordionProps } from "@mui/material";

export interface AccordionProps extends Partial<MuiAccordionProps> {
    header: string;
    description: string;
}