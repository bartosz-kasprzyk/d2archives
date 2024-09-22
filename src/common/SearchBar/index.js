import { SearchBarContainer, SearchBarWrapper, SearchIcon, SearchInput, UnderlineGlow } from "./styled";

export const SearchBar = ({ value, onChange, placeholder }) => (
    <SearchBarContainer>
        <SearchBarWrapper>
            <SearchIcon />
            <SearchInput
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <UnderlineGlow />
        </SearchBarWrapper>
    </SearchBarContainer>
);