import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        margin: -50px 0 60px;
    }
`

export const NavSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 80px;
    justify-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) { 
        grid-gap: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        grid-template-columns: auto;
        grid-gap: 0;
        padding: 0;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    padding-bottom: 15px;
    transition: transform 300ms ease, filter 300ms ease;

    &:hover {
        transform: scale(1.02);
        filter: brightness(1.3);
    }

    &.active {
        filter: brightness(2.5);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) { 
        transform: scale(0.9);

        &:hover {
        transform: scale(0.92);
    }
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        transform: scale(0.8);
        padding-bottom: 0;

        &:hover {
            transform: scale(0.82);
    }
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        transform: scale(0.6);
        padding-bottom: 0;

        &:hover {
            transform: scale(0.62);
    }
    }
`;

export const StyledUnderline = styled.img`
    width: 700px;
    margin: -340px auto;
    z-index: -2;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 330px;
        margin: -150px auto -120px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 200px;
        margin: -90px auto;
    }
`;

export const StyledSigil = styled.img`
    width: 40px;
    margin-top: -30px;
    z-index: -1;
    filter: brightness(0.3);

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 30px;
        margin-top: -60px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 20px;
        margin-top: -20px;
    }
`;

export const StyledChatGem = styled.img`
    width: 16px;
    margin: -28px auto;
    z-index: 0;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 14px;
        margin-top: -22px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 12px;
        margin-top: -16px;
    }
`;