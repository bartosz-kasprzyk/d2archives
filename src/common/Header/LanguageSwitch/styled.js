import styled from "styled-components";

export const ButtonSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px;
    padding-right: 20px;
    width: 100%;
    gap: 20px;
`;

export const StyledButton = styled.button`
    width: 32px;
    height: 24px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    background-image: url(${props => props.$flag});
    display: inline-block;
`;
