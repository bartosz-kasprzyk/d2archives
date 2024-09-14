import { Link } from "react-router-dom";
import styled from "styled-components"

export const StyledText = styled.p`
    color: #ddd;
    font-size: 17px;
`;

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
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 300ms ease, filter 300ms ease;
    
    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.20);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 1));
    }

    &:active {
        transform: scale(0.80);
        filter: brightness(1.2);
    }
`;

export const RuneButtonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const StyledLink = styled(Link)`
    color: #ca8120;
    text-decoration: none;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
        text-decoration: underline;
    }
`;