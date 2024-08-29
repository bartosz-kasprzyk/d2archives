import styled from "styled-components"

export const StyledText = styled.p`
    color: ${({ theme }) => theme.color.white};
`

export const StyledNavigation = styled.div`
    border: 2px solid #000000;
    border-radius: 10%;
    max-width: 350px;
    padding: 0px 10px;
    box-shadow: 5px 5px 9px -3px #DF9C0C;
    max-width: 350px;
    padding: 0px 10px;
`

export const RunewordButton = styled.button`
    color: #df9c0c;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    
    &:focus {
        outline: none;
    }
`