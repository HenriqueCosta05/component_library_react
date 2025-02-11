import styled from "styled-components";
import { Accordion as MuiAccordionContainer, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails, Paper} from "@mui/material"; 
import { theme } from "../../theme/styled-components";

export const StyledAccordionContainer = styled(MuiAccordionContainer)`
    & .MuiAccordionSummary-root {
        font-family: "Red Hat Display", Arial, sans-serif;
        background-color: ${theme.palette.background[700]};
        color: ${theme.palette.background[50]};
        border-radius: 5px 5px 0 0;
    }
`

export const StyledAccordionSummary = styled(MuiAccordionSummary)`
    color: ${theme.palette.primary.contrastText};
`

export const StyledAccordionDetails = styled(MuiAccordionDetails)`
    font-family: "Red Hat Display", Arial, sans-serif;
    background-color: ${theme.palette.background[700]};
    border-top: 1px solid #fff;
    border-radius: 0 0 5px 5px;
    color: ${theme.palette.background[50]};
`