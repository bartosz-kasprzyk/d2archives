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
`;

export const LogoIcon1 = styled.img`
    width: 300px;
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
`;

export const NavSection = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 80px;
    justify-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px;
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
`;

export const StyledUnderline = styled.img`
    width: 700px;
    margin: -340px auto;
    z-index: -1;
`;

export const StyledSigil = styled.img`
    width: 40px;
    margin-top: -30px;
    z-index: 0;
    filter: brightness(0.3);
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
`;