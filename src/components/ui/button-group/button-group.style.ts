import styled from "styled-components";

export const StyledButtonGroup = styled.div<{ $size: "tiny" | "small" | "medium" | "large" | "giant" }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    button {
    border-radius: 0;
        &:first-child {
            ${({ $size }) => {
                switch ($size) {
                    case "tiny":
                        return `
                            border-radius: 8px 0 0 8px;
                        `;
                    case "small":
                        return `
                            border-radius: 8px 0 0 8px;
                        `;
                    case "medium":
                        return `
                            border-radius: 12px 0 0 12px;
                        `;
                    case "large":
                        return `
                            border-radius: 12px 0 0 12px;
                        `;
                    case "giant":
                        return `
                            border-radius: 12px 0 0 12px;
                        `;
                }
            }}
        }

        &:last-child {
            ${({ $size }) => {
                switch ($size) {
                    case "tiny":
                        return `
                            border-radius: 0 8px 8px 0;
                        `;
                    case "small":
                        return `
                            border-radius: 0 8px 8px 0;
                        `;
                    case "medium":
                        return `
                            border-radius: 0 12px 12px 0;
                        `;
                    case "large":
                        return `
                            border-radius: 0 12px 12px 0;
                        `;
                    case "giant":
                        return `
                            border-radius: 0 12px 12px 0;
                        `;
                }
            }}
        }
    }
`;