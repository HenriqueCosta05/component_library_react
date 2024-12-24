import styled from 'styled-components'

export const StyledImage = styled.img<{$borderRadius?: string, filter?: string}>`
    border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
    filter: ${({ filter }) => filter || "none"};
    object-fit: cover;
    object-position: center;
    
`