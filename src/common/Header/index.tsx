import { toRunes } from "../config/routes";
import { LogoIcon1, LogoIcon2, LogoWrapper, StyledCorner, StyledHeader } from "./styled";
import d2r from "../../images/Logo/d2r.gif"
import archives from "../../images/Logo/archives.png"
import { Navigation } from "./Navigation";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Header = () => {
    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    return (
        <StyledHeader>
            <StyledCorner $position="left" />
            <StyledCorner />
            <LogoWrapper to={toRunes()}>
                <LogoIcon1 src={d2r} alt="Diablo II Logo" />
                <LogoIcon2 src={archives} alt="Archives Logo" />
            </LogoWrapper>

            {isLargeScreen && <Navigation />}
        </StyledHeader>
    )
};