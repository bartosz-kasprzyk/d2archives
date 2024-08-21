import { toRunes, toRunewords } from "../../config/routes";
import { LogoIcon, LogoWrapper, NavSection, StyledNavLink } from "./styled";
import d2r from "../../../images/d2r.gif"

export const Navigation = () => (
    <>
        <LogoWrapper to={toRunes()}>
            <LogoIcon src={d2r} alt="Diablo II Logo" />
        </LogoWrapper>
        <NavSection>
            <li><StyledNavLink to={toRunes()}>RUNES</StyledNavLink></li>
            <li><StyledNavLink to={toRunewords()}>RUNEWORDS</StyledNavLink></li>
        </NavSection>
    </>
);