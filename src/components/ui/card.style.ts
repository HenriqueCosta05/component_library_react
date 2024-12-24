import styled from 'styled-components'

export const StyledCard = styled.div<{ $orientation: 'horizontal' | 'vertical' }>`
    display: flex;
    flex-direction: ${({ $orientation }) => $orientation === 'horizontal' ? 'row' : 'column'};
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    margin: 8px 0;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #333;
    font-family: Arial, sans-serif;

`