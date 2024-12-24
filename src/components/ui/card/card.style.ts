import styled from 'styled-components'

export const StyledCard = styled.div<{ $orientation: 'horizontal' | 'vertical' }>`
    display: flex;
    flex-direction: ${({ $orientation }) => $orientation === 'horizontal' ? 'row' : 'column'};
    border-radius: 4px;
    padding: 16px;
    margin: 8px 0;
    width: 100%;
    max-width: 400px;
    gap: 16px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #333;
    font-family: Arial, sans-serif;

`