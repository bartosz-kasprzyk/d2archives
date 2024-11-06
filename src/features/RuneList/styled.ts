import styled from "styled-components"

export const RuneGridContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(11, 60px);
    grid-template-rows: repeat(3, auto);
    gap: 15px;
    margin: 20px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        grid-template-columns: repeat(9, 60px);
        gap: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phoneTwo}) {
        grid-template-columns: repeat(7, 60px);
        gap: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        grid-template-columns: repeat(6, 50px);
        gap: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        grid-template-columns: repeat(6, 35px);
        gap: 5px;
    }
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
        filter: brightness(2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
        width: 50px;
        height: 70px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 45px;
        height: 65px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 35px;
        height: 55px;
    }
`;

export const RuneButtonImage = styled.img<{ $opacity?: number }>`
    width: 100%;
    height: 60%;
    object-fit: cover;
    display: block;
    opacity: ${({ $opacity }) => $opacity || 'inherit'};
`;

export const RuneButtonText = styled.div`
    font-family: 'AvQest', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.rune};
    text-align: center;
    margin-top: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;