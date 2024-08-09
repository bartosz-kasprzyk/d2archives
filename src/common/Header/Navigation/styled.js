import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const LogoWrapper = styled(Link)`
    grid-column: 1 / 3;
    padding: 20px;
`;

export const LogoIcon = styled.img`
    width: 200px;
    display: flex;
    align-items: center;
`;

export const NavSection = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
`;