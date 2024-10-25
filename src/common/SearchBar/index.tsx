import { SearchBarContainer, SearchBarWrapper, SearchIcon, SearchInput, UnderlineGlow } from "./styled";

interface SearchBarProps {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SearchBar = ({ placeholder, value, onChange }: SearchBarProps) => (
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