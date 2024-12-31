import { StyledColumn } from "../../ui/column/column.style";
import { LabelText } from "../../ui/typography";
import { useInput } from "./input.hook";
import { StyledInput } from "./input.style";

interface InputProps {
    label: string;
    helperText: string;
}
export default function Input({label, helperText}: InputProps) {
    const { ...props } = useInput();

    return (
        <StyledColumn>
            <LabelText>{label}</LabelText>
            <StyledInput $size={props.inputSize} $state={props.inputState} />
            <LabelText color={props.inputState}>{helperText}</LabelText>
        </StyledColumn>
    )
}
