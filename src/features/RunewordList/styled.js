import styled from "styled-components"
import Backdrop from '../../images/ValueBox/box_background.webp'

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: -40px;
`;

export const ToggleButton = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    background-color: #0000008A;
    background-image: url(${Backdrop});
        background-repeat: repeat;
        background-size: cover;
        background-position: center center;
        background-blend-mode: overlay;
    color: #757575;
    border: 3px solid #000;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    transition: filter 300ms ease;

    &:hover {
        filter: brightness(1.3);
    }

    &:focus {
        outline: none;
    }

    svg {
        transition: transform 300ms ease;
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
`;

export const ToggleButtonText = styled.span`
    font-size: 18px;
    margin: 0 auto;
`

export const RuneGridContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 60px);
    grid-template-rows: repeat(4, auto);
    gap: 15px;
    padding: 20px;
    background: #201F1F5A;
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    border: 3px solid #000;
    border-radius: 0 0 10px 10px;
    transition: max-height 300ms ease, padding 300ms ease;
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    padding: ${({ $isOpen }) => ($isOpen ? '20px' : '0 20px')};
`;

export const RuneButton = styled.button`
    background: none;
    border: none;
    padding: 5px;
    margin: 0;
    width: 60px;
    height: 80px;
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
        transform: scale(1.10);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
    }

    &:active {
        transform: scale(0.80);
        filter: brightness(1.2);
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
    grid-column: span 11;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    width: 100%;
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
        transform: scale(0.99, 0.94);
        filter: brightness(2);
    }
`;