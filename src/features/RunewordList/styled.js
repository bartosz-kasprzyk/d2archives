import styled from "styled-components"
import Backdrop from '../../images/ValueBox/box_background.webp'

export const FilterContainer = styled.div`
    position: fixed;
    top: 20%;
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-170px')};
    width: 170px;
    height: auto;
    background: #201F1F5A;
    border-radius: 0 10px 10px 0;
    transition: left 300ms ease;
    z-index: 2000;
`;

export const RuneGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 45px);
    grid-template-rows: repeat(12, auto);
    gap: 5px;
    padding: 10px;
`;

export const ToggleTextContainer = styled.div`
    position: absolute;
    right: -65px;
    top: 50%;
    transform: translateY(-50%);
    background: #201F1F4A;
    padding: 30px 0;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-radius: 0 10px 10px 0;
    white-space: normal;
    width: 65px;
`;

export const Arrow = styled.svg`
    display: block;
    width: 24px;
    height: 24px;
    transition: transform 300ms ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
    margin: 10px auto 0;
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
    transition: transform 300ms ease, filter 300ms ease;

    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.8);
    }

    &:active {
        transform: scale(0.80);
        filter: brightness(3);
    }
`;

export const RuneButtonImage = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${({ $opacity }) => $opacity || 'inherit'};
`;

export const RuneButtonText = styled.div`
    font-family: 'AvQest', sans-serif;
    font-size: 13px;
    color: #ca8120;
    text-align: center;
    margin-top: 5px;
    opacity: ${({ $opacity }) => $opacity || 'inherit'};
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const ClearSelectedButton = styled.button`
    grid-column: span 3;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 10px;
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    color: #ddd;
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
`;