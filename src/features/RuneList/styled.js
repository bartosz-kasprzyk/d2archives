import styled from "styled-components"

export const StyledText = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 17px;
`;

export const RuneGridContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 45px);
    grid-template-rows: repeat(3, auto);
    gap: 10px;
    margin: 20px 0;
`;

export const RuneButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    
    &:focus {
        outline: none;
    }
`;

export const RuneButtonImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;