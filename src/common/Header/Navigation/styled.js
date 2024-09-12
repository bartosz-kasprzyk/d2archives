import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import flameImage from '../../../images/flame.gif'

export const LogoWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 20px;         
    grid-column: 1 / 3;
    margin: 20px;
    margin-top: -20px;
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
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