import styled from "styled-components";

export const ButtonContainer = styled.a`
    position: fixed;
    bottom: ${({ $bottom }) => $bottom || 'auto'};
    right: -200px;
    background-color: ${({ $color }) => $color || 'inherit'};
    z-index: 9999;
    height: 62px;
    width: 260px;
    display: inline-flex;
    align-items: center;
    color: #ffffff;
    font-family: "Cookie", cursive;
    font-size: 30px;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    filter: brightness(0.6);
    transition: transform 1s ease, filter 1s ease;

    &:hover {
        transform: translateX(${({ $translateX }) => $translateX || '0px'});
        filter: brightness(1.2);
    }
`;

export const StyledIcon = styled.img`
    width: 45px;
    margin: -2px 7px 0 -11px;
`