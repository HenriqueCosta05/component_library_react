import { StyledButtonGroup } from "./button-group.style";

interface ButtonGroupProps {
    children: React.ReactNode;
    size: "tiny" | "small" | "medium" | "large" | "giant";
}
export default function ButtonGroup({ children, size }: ButtonGroupProps) {
    return (
        <StyledButtonGroup $size={size}>
            {children}
        </StyledButtonGroup>
    );
}