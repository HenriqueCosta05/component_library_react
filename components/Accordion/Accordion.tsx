import React from "react";
import { AccordionProps } from "./Accordion.interface";
import { StyledAccordionContainer, StyledAccordionDetails, StyledAccordionSummary } from "./Accordion.styles";

export default function Accordion({header, description}: AccordionProps) {
    return (
        <StyledAccordionContainer>
            <StyledAccordionSummary>{header}</StyledAccordionSummary>
            <StyledAccordionDetails>{description}</StyledAccordionDetails>
        </StyledAccordionContainer>
    )
}