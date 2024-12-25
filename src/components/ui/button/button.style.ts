import styled from "styled-components";
import { theme } from "../../../providers/theme";

export const StyledButton = styled.button<{
    $variant?: "primary" | "outlined";
    $size: "tiny" | "small" | "medium" | "large" | "giant";
    $color?: string;
    $disabled?: boolean;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 4px;
    cursor: pointer;
    font-family: Inter, sans-serif;
    font-weight: ${theme.fontWeights.medium};
    padding: ${({ $size }) => {
        switch ($size) {
            case "tiny":
                return "8px 6px";
            case "small":
                return "12px 8px";
            case "medium":
                return "16px 12px";
            case "large":
                return "20px 14px";
            case "giant":
                return "16px 24px";
        }
    }};
    font-size: ${({ $size }) => {
        switch ($size) {
            case "tiny":
                return theme.fontSizes.buttonFont.tiny;
            case "small":
                return theme.fontSizes.buttonFont.small;
            case "medium":
                return theme.fontSizes.buttonFont.medium;
            case "large":
                return theme.fontSizes.buttonFont.large;
            case "giant":
                return theme.fontSizes.buttonFont.giant;
        }
    }};
    border: ${({ $variant }) => {
        switch ($variant) {
            case "outlined":
                return `1px solid ${theme.colors.primary[500]}`;
            default:
                return "none";
        }
    }};
    border-radius: ${({ $size }) => {
        switch ($size) {
            case "tiny":
                return "8px";
            case "small":
                return "8px";
            case "medium":
                return "12px";
            case "large":
                return "12px";
            case "giant":
                return "12px";
        }}
    };

    background-color: ${({ $variant, $color }) => {
        if ($color) {
            return $color;
        }
        switch ($variant) {
            case "primary":
                return theme.colors.primary[500];
            case "outlined":
                return "transparent";
            default:
                return theme.colors.primary[500];
        }
    }};
    color: ${({ $variant }) => {
        switch ($variant) {
            case "primary":
                return theme.colors.white.main;
            case "outlined":
                return theme.colors.primary.main;
            default:
                return theme.colors.white.main;
        }
    }};
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    &:hover {
        background-color: ${({ $variant }) => {
        switch ($variant) {
            case "primary":
                return theme.colors.primary[600];
            case "outlined":
                return theme.colors.primary[100];
            default:
                return theme.colors.primary[600];
        }
    }};
        transition: background-color 0.2s ease;
    }
    &:active {
        background-color: ${({ $variant }) => {
        switch ($variant) {
            case "primary":
                return theme.colors.primary[700];
            case "outlined":
                return theme.colors.primary[200];
            default:
                return theme.colors.primary[700];
        }
    }};
        transition: background-color 0.2s ease;
    }
    &:focus {
        outline: none;
    };
`;