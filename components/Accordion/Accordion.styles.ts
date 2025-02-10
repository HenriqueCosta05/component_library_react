import styled from "styled-components";
import { Accordion as MuiAccordionContainer, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails} from "@mui/material"; 
import { theme } from "../../theme/styled-components";

export const StyledAccordionContainer = styled(MuiAccordionContainer)`
    background-color: ${theme.palette.primary.dark}
    color: ${theme.palette.primary.contrastText}
`

export const StyledAccordionSummary = styled(MuiAccordionSummary)`
    background-color: ${theme.palette.primary.dark}
    color: ${theme.palette.primary.contrastText}
`

export const StyledAccordionDetails = styled(MuiAccordionDetails)`
    background-color: ${theme.palette.primary.dark}
    color: ${theme.palette.primary.contrastText}
`