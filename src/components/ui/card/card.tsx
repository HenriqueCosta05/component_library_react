import { StyledCard } from "./card.style";

interface CardProps {
    orientation: "horizontal" | "vertical";
    children?: React.ReactNode;
}
export default function Card({ orientation, children }: CardProps) {
    return (
        <StyledCard $orientation={orientation}>
            {children}
        </StyledCard>
    )
}