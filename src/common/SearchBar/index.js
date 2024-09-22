import { SearchBarContainer, SearchBarWrapper, SearchInput, UnderlineGlow } from "./styled";

export const SearchBar = ({ value, onChange, placeholder }) => (
    <SearchBarContainer>
        <SearchBarWrapper>
            <SearchInput
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <UnderlineGlow className="underline-glow" />
        </SearchBarWrapper>
    </SearchBarContainer>
);