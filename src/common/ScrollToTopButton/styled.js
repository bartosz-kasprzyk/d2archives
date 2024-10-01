import styled from "styled-components";
import ButtonLeft from "../../images/ScrollButton/button_left.webp"
import ButtonRight from "../../images/ScrollButton/button_right.webp"
import ButtonMid from "../../images/ScrollButton/button_mid.webp"
import ButtonBackground from "../../images/ScrollButton/button_background.png"

export const StyledButton = styled.button`
    width: 220px;
    color: #BD9B4E;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 1);
    font-family: 'AvQest', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: 
        url(${ButtonLeft}) left center no-repeat,
        url(${ButtonRight}) right center no-repeat,
        url(${ButtonMid}) center repeat-x;
    background-size: auto 100%, auto 100%, auto 100%;
    border: none;
    outline: none;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 20px;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, filter 0.3s ease;

    ${({ $isVisible }) => $isVisible && `
        opacity: 1;
        visibility: visible;
    `}

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        transform: scale(0.99, 0.97);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        opacity: 0;
        visibility: hidden;
    }
`;

export const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 16px;
    right: 27px;
    width: 226px;
    height: 48px;
    background: url(${ButtonBackground});
    background-size: auto 100%;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    ${({ $isVisible }) => $isVisible && `
        opacity: 1;
        visibility: visible;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        opacity: 0;
        visibility: hidden;
    }
`