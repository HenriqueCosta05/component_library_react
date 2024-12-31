import { useState } from "react";


export const useInput = () => {

    const [inputState, setInputState] = useState<'filled' | 'hover' | 'focus' | 'error' | 'disabled' | 'default' | 'success' | 'warning' | 'info'>('default');
    const [inputSize, setInputSize] = useState<'large' | 'medium'>('medium');
    const [inputValue, setInputValue] = useState<string>('');
    const [inputPlaceholder, setInputPlaceholder] = useState<string>('');
    const [inputIcon, setInputIcon] = useState<React.ReactNode | null>(null);
    const [inputLabel, setInputLabel] = useState<string | ''>('');
    const [inputHelperText, setInputHelperText] = useState<string>('');
    const [inputType, setInputType] = useState<string>('text');

    const handleChange = (inputChanged: HTMLInputElement, event: Event) => {
        if (typeof inputChanged.onchange === 'function') {
            inputChanged.onchange(event);
            setInputValue(inputChanged.value);
        }
    }

    const validateInput = (input: HTMLInputElement) => {
        if (input.validity.valid) {
            setInputState('success');
        } else {
            setInputState('error');
        }
    }


    return {
        handleChange,
        validateInput,
        inputState,
        setInputState,
        inputSize,
        setInputSize,
        inputValue,
        setInputValue,
        inputPlaceholder,
        setInputPlaceholder,
        inputIcon,
        setInputIcon,
        inputLabel,
        setInputLabel,
        inputHelperText,
        setInputHelperText,
        inputType,
        setInputType
    }
}