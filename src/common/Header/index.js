import { StyledHeader } from "./styled";
import { Navigation } from "./Navigation";
import LanguageSwitch from "./LanguageSwitch";

export const Header = () => (
    <StyledHeader>
        <LanguageSwitch />
        <Navigation />
    </StyledHeader>
);