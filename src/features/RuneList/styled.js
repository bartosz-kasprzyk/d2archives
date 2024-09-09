import styled from "styled-components"

export const StyledText = styled.p`
    color: ${({ theme }) => theme.color.white};
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
`;

export const RuneButtonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;