import styled from "styled-components"

export const RuneGridContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 60px);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    margin: 20px 0;
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
`;