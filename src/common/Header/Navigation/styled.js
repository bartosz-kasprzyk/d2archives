import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import flameImage from '../../../images/flame.gif'

export const LogoWrapper = styled(Link)`
    grid-column: 1 / 3;
    margin: 20px;
`;

export const LogoIcon = styled.img`
    width: 300px;
    display: flex;
    align-items: center;
    margin: -60px 0 20px;
`;

export const NavSection = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    justify-items: center;
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px;
`;

export const StyledNavLink = styled(NavLink)`

    &.active {
        background-image: url(${flameImage});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 110% 20px;
        padding-bottom: 15px;
        display: inline-block;
    }
`;