import { toRunes, toRunewords } from "../../config/routes";
import { LogoIcon, LogoWrapper, NavSection, StyledNavLink } from "./styled";
import d2r from "../../../images/d2r.gif"
import RunesPageEn from "../../../images/RUNES.png"
import RunesPagePl from "../../../images/RUNY.png"
import RunewordsPageEn from "../../../images/RUNEWORDS.png"
import RunewordsPagePl from "../../../images/SLOWA RUNICZNE.png"
import useLoadContent from "../../hooks/useLoadContent";

export const Navigation = () => {
    const state = useLoadContent();
    const content = state.content;

    if (!content) {
        return;
    }

    return (
        <>
            <LogoWrapper to={toRunes()}>
                <LogoIcon src={d2r} alt="Diablo II Logo" />
            </LogoWrapper>
            <NavSection>
                <li><StyledNavLink to={toRunes()}><img src={content.content.lang === "en" ? RunesPageEn : RunesPagePl}></img></StyledNavLink></li>
                <li><StyledNavLink to={toRunewords()}><img src={content.content.lang === "en" ? RunewordsPageEn : RunewordsPagePl}></img></StyledNavLink></li>
            </NavSection >
        </>
    )
};