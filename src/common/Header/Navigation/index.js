import { toRunes, toRunewords } from "../../config/routes";
import { LogoIcon, LogoWrapper, NavSection, StyledNavLink } from "./styled";
import d2r from "../../../images/d2r.gif"
import useLoadContent from "../../hooks/useLoadContent";

export const Navigation = () => {
    const content = useLoadContent();

    if (!content) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <LogoWrapper to={toRunes()}>
                <LogoIcon src={d2r} alt="Diablo II Logo" />
            </LogoWrapper>
            <NavSection>
                <li><StyledNavLink to={toRunes()}>{content.content.navRunes}</StyledNavLink></li>
                <li><StyledNavLink to={toRunewords()}>{content.content.navRunewords}</StyledNavLink></li>
            </NavSection>
        </>
    )
};