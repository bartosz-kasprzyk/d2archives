import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import flameImage from '../../images/Logo/flame.gif'
import cornerImage from '../../images/Ornaments/corner.png'

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LogoWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 20px;         
    grid-column: 1 / 3;
    margin: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        margin-bottom: 5px;
    }
`;

export const LogoIcon1 = styled.img`
    width: 300px;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) { 
        width: 225px;
        margin-top: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 150px;
        margin-top: 40px;
    }
`;

export const LogoIcon2 = styled.img`
    width: 250px;
    padding: 20px;
    margin-top: -40px;
    background-image: url(${flameImage});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 50% 20px;
        display: inline-block;

    @media(max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) { 
        width: 200px;
        padding: 15px;
        margin-top: -32px;
        background-size: 50% 10px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 120px;
        padding: 10px;
        margin-top: -30px;
        background-size: 50% 10px;
    }
`;

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
        width: 400px;
        margin: -190px auto -120px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 300px;
        margin: -140px auto;
    }
`;

export const StyledSigil = styled.img`
    width: 40px;
    margin-top: -30px;
    z-index: -1;
    filter: brightness(0.3);

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 30px;
        margin-top: -95px;
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

export const StyledCorner = styled.div`
    position: absolute;
    top: 20px;
    ${({ $position = 'right' }) =>
        $position === 'left'
            ? 'left: 20px;'
            : 'right: 20px; transform: scaleX(-1);'}
    width: 150px;
    height: 150px;
    background: url(${cornerImage}) no-repeat center center;
    background-size: contain;
    z-index: 100;
    filter: brightness(0.3);

    @media(max-width: ${({ theme }) => theme.breakpoint.phone}) { 
        width: 125px;
        height: 125px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) { 
        width: 100px;
        height: 100px;
    }
`;