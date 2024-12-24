import { StyledCard } from "./card.style";

export default function Card({ variant, color, children }) {
    return (
        <StyledCard $variant={variant} $color={color}>
            {children}
        </StyledCard>
    )
}