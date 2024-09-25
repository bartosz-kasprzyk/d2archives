import { toRunes, toRunewords, toSets, toUniques } from "../config/routes";
import { LogoIcon1, LogoIcon2, LogoWrapper, NavSection, StyledChatGem, StyledCorner, StyledHeader, StyledNavLink, StyledSigil, StyledUnderline } from "./styled";
import d2r from "../../images/Logo/d2r.gif"
import archives from "../../images/Logo/archives.png"
import runes from "../../images/Navigation/runes.png"
import runewords from "../../images/Navigation/runewords.png"
import uniques from "../../images/Navigation/uniques.png"
import sets from "../../images/Navigation/sets.png"
import underline from '../../images/Ornaments/underline.png'
import sigil from '../../images/Ornaments/sigil.png'
import chatgem_blue from '../../images/chatgem_blue.webp'
import chatgem_pink from '../../images/chatgem_pink.webp'
import { useState } from "react";

export const Header = () => {
    const [isBlueGem, setIsBlueGem] = useState(true);

    const handleGemClick = () => {
        setIsBlueGem((prev) => !prev);
    };

    const gemSrc = isBlueGem ? chatgem_blue : chatgem_pink;

    return (
        <StyledHeader>
            <StyledCorner $position="left" />
            <StyledCorner />
            <LogoWrapper to={toRunes()}>
                <LogoIcon1 src={d2r} alt="Diablo II Logo" />
                <LogoIcon2 src={archives} alt="Archives Logo" />
            </LogoWrapper>
            <NavSection>
                <li>
                    <StyledNavLink to={toRunes()}>
                        <img src={runes} alt="Runes" />
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toRunewords()}>
                        <img src={runewords} alt="Runewords" />
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toUniques()}>
                        <img src={uniques} alt="Uniques" />
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toSets()}>
                        <img src={sets} alt="sets" />
                    </StyledNavLink>
                </li>
            </NavSection >
            <StyledUnderline src={underline} />
            <StyledSigil src={sigil} />
            <StyledChatGem src={gemSrc} onClick={handleGemClick} alt="Chat Gem" />
        </StyledHeader>
    )
};