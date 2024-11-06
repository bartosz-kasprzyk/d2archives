import styled from "styled-components";

export const StyledNavigation = styled.nav`
    column-count: 5;
    column-gap: 0;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        column-gap: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        column-gap: 50px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        column-count: 3;
    }
`;

export const StyledSetList = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
    break-inside: avoid;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletTwo}) {
        li {
            position: relative;

            &::before {
                content: '◈';
                color: ${({ theme }) => theme.color.darkGreen};
                font-size: ${({ theme }) => theme.fontSize.s};
                position: absolute;
                left: -15px;
                top: 15px;
                }
        }
    }
`;

export const StyledSetItemList = styled.ul`
    list-style-type: none;
    padding-left: 25px;

    li {
        position: relative;

        &::before {
            content: '◈';
            color: ${({ theme }) => theme.color.darkGreen};
            font-size: ${({ theme }) => theme.fontSize.xs};
            position: absolute;
            left: -16px;
            top: 7px;
        }
    }
`;

export const SetButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.rune};
    text-align: left;
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
    color: ${({ theme }) => theme.color.set};
    font-family: 'AvQest', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.xl2};
    padding: 0;
    margin: 0;
    margin-top: 15px;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(1.5);
        transform: scale(1.01);
    }

    &:active {
        filter: brightness(5);
        transform: scale(0.98);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const SetItemButton = styled(SetButton)`
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    opacity: 0.9;

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        font-size: ${({ theme }) => theme.fontSize.s};
        margin: 0 -3px;
    }
`;
