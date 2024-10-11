import styled from "styled-components"
import Backdrop from '../../images/ValueBox/box_background.webp'
import Frame from '../../images/UI/frame.png'
import { ReactComponent as Reset } from "../../images/UI/Reset.svg";

export const FilterContainer = styled.div`
    position: fixed;
    top: 19%;
    left: ${({ $isOpen }) => ($isOpen ? '-10px' : '-175px')};
    width: 190px;
    height: auto;
    background: ${({ theme }) => theme.color.black.deep};
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    border: 10px solid transparent;
    border-image: url(${Frame}) 30 stretch;
    border-left: none;
    border-radius: 0 10px 10px 0;
    transition: left 300ms ease;
    z-index: 2000;

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        top: 50%;
        transform: translateY(-50%);
        left: ${({ $isOpen }) => ($isOpen ? '-10px' : '-155px')};
        width: 170px;
    }
`;

export const RuneGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 45px);
    grid-template-rows: repeat(12, auto);
    gap: 2px;
    padding: 3px 20px 7px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(3, 35px);
        padding: 3px 20px 7px 28px;
        gap: 4px;
    }
`;

export const StyledArrow = styled.img`
    position: absolute;
    right: ${({ $isOpen }) => ($isOpen ? '-15px' : '-29px')};
    top: 45%;
    transform: translateY(-50%);
    padding: 20px 0;
    cursor: pointer;
    width: 30px;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const FilterTitle = styled.span`
    display: block;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 4px;
    padding-bottom: 0;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 18px;
        padding-left: 15px;
    }
`;

export const RuneButton = styled.button`
    background: none;
    border: none;
    padding: 5px;
    margin: 0;
    width: 45px;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
    transition: transform 300ms ease, filter 1000ms ease;
    -webkit-tap-highlight-color: transparent; 

    &:focus {
        outline: none;
    }

    &:hover {
        transform: ${({ $isLargeScreen }) => ($isLargeScreen ? 'scale(1.05)' : 'none')};
    }

    &:active {
        transform: scale(0.80);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 35px;
        height: 40px;
    }
`;

export const RuneButtonImage = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${({ $opacity }) => $opacity || 'inherit'};

    ${({ $opacity }) => $opacity === 1 && `
        animation: goldenSheen 1s linear;
    `}

    @keyframes goldenSheen {
        0% {
            filter: brightness(2) drop-shadow(0 0 30px rgba(255, 215, 0, 1));
        }
        50% {
            filter: brightness(1.5) drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
        }
        100% {
            filter: brightness(1) drop-shadow(0 0 10px rgba(255, 215, 0, 0));
        }
    }
`;

export const RuneButtonText = styled.div`
    font-family: 'AvQest', sans-serif;
    font-size: 13px;
    color: ${({ theme }) => theme.color.rune};
    text-align: center;
    margin-top: 5px;
    opacity: ${({ $opacity }) => $opacity || 'inherit'};

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        margin-top: 2px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const ResetIcon = styled(Reset)`
    width: 18px;
    height: 18px;
    margin: 3px 10px -3px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 14px;
        height: 14px;
        margin-right: 7px;
    }
`;

export const ClearSelectedButton = styled.button`
    grid-column: span 3;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 7px;
    margin: 2px 7px;
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    filter: brightness(1.3);
    transition: transform 300ms ease, filter 300ms ease;

    &:hover {
        transform: scale(1.005);
        filter: brightness(1.4);
    }

    &:active {
        transform: scale(0.97, 0.9);
        filter: brightness(2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 16px;
    }
`;