import { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, TableWrapper, TableCellBlue } from "../../common/Table/styled";
import { Container } from '../../common/Container';
import { Loading } from '../../common/Loading';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import { toRunes } from '../../common/config/routes';
import useLoadContent from '../../common/hooks/useLoadContent';
import { StyledKeyword, StyledLink, StyledText } from '../../common/CommonStyles/styled';
import { SearchBar } from '../../common/SearchBar';
import { NoResults } from '../../common/NoResults';
import { ClearSelectedButton, FilterContainer, FilterTitle, ResetIcon, RuneButton, RuneButtonImage, RuneButtonText, RuneGridContainer, StyledArrow } from './styled';
import runeAssets from "../../common/config/runeAssets"
import arrow from '../../images/UI/arrow.png'
import hoverArrow from '../../images/UI/arrow_highlight.png'
import { useScreenWidth } from '../../common/hooks/useScreenWidth';
import { Navigation } from '../../common/Header/Navigation';
import { useTheme } from 'styled-components';
import { DataType, RuneAndRunewordData } from '../../types';
import { Footer } from '../../common/Footer';

const RunewordList = ({ dataType }: { dataType: DataType }) => {
    const theme = useTheme();

    const state = useLoadContent(dataType);
    const content = state.content as RuneAndRunewordData;

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const rowRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRunes, setSelectedRunes] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    if (!content) {
        return <Loading dataType={dataType} />;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

    const filteredBySearch = runewords.filter((runeword: string[]) =>
        runeword.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredByRunes = selectedRunes.length > 0 ? filteredBySearch.filter(runeword => {
        const runewordRunes: string[] = runeword[2].split(/\s*\+\s*/);
        return runewordRunes.every(rune => selectedRunes.includes(rune));
    }) : filteredBySearch;



    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRuneClick = (rune: string) => {
        setSelectedRunes(prev => {
            if (prev.includes(rune)) {
                return prev.filter(r => r !== rune);
            } else {
                return [...prev, rune];
            }
        });
    };

    const clearSelected = () => {
        setSelectedRunes([]);
    };

    return (
        <Container>
            {!isLargeScreen && <Navigation />}

            <StyledText>
                <StyledKeyword $color={theme.color.unique}>Runewords</StyledKeyword> are combinations of several different <StyledLink to={toRunes()}>runes</StyledLink> designed to create powerful weapons or armor.
                The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power.
                Most of the most important weapons and armor in the game come from runewords.
                Many of these are very difficult to obtain due to the rare appearance of runes at higher levels.
                Besides the runes, you also need to find the appropriate item.
                It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating.
                Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment.
            </StyledText>

            <FilterContainer $isOpen={isOpen}>
                <StyledArrow
                    src={isHovered ? hoverArrow : arrow}
                    $isOpen={isOpen}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleToggle} />
                <FilterTitle>
                    Filter by runes
                </FilterTitle>
                <RuneGridContainer>
                    {Object.keys(runeAssets).map((runeName) => (
                        <RuneButton
                            key={runeName}
                            $isLargeScreen={isLargeScreen}
                            onClick={() => handleRuneClick(runeName)}>
                            <RuneButtonImage
                                src={runeAssets[runeName].image}
                                alt={`${runeName} Rune`}
                                title={`${runeName} Rune`}
                                $opacity={selectedRunes.includes(runeName) ? 1 : 0.2}
                            />
                            <RuneButtonText $opacity={selectedRunes.includes(runeName) ? 1 : 0.4}>{runeName}</RuneButtonText>
                        </RuneButton>
                    ))}
                    <ClearSelectedButton onClick={clearSelected}>
                        <ResetIcon />
                        Reset
                    </ClearSelectedButton>
                </RuneGridContainer>
            </FilterContainer>

            <SearchBar
                placeholder={"Search runewords..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredByRunes.length === 0 ? (
                selectedRunes.length > 0 ? (
                    <NoResults
                        text={"Ah, it seems the runes you possess do not create anything formidable, my friend. Perhaps you should seek out more runes to reveal greater secrets."}
                    />
                ) :
                    <NoResults
                        text={"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}
                    />
            ) : (
                <TableWrapper>
                    <StyledTable>
                        <thead>
                            <TableRow $index={0}>
                                <ColumnHeader>Runeword</ColumnHeader>
                                {isLargeScreen && <ColumnHeader>Base</ColumnHeader>}
                                {isLargeScreen && <ColumnHeader>Runes</ColumnHeader>}
                                <ColumnHeader>Properties</ColumnHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            {filteredByRunes.map((runeword, index) => (
                                <TableRow
                                    key={index}
                                    $index={index + 1}
                                    ref={(el) => (rowRefs.current[runeword[0]] = el)}
                                >
                                    <RowHeader $color={theme.color.unique}>
                                        {formatText({
                                            text: runeword[0],
                                            currentPath: location.pathname,
                                            searchQuery: searchQuery
                                        })}
                                        {!isLargeScreen && (
                                            <div style={{ color: theme.color.white.soft }}>
                                                <small>
                                                    {formatText({
                                                        text: runeword[2],
                                                        currentPath: location.pathname,
                                                        searchQuery: searchQuery
                                                    })}
                                                </small>
                                                <div style={{ fontSize: '0.85em', paddingTop: "10px", opacity: 0.7 }}>
                                                    {formatText({
                                                        text: runeword[1],
                                                        currentPath: location.pathname,
                                                        searchQuery: searchQuery
                                                    })}
                                                </div>
                                            </div>

                                        )}
                                    </RowHeader>

                                    {isLargeScreen && (
                                        <TableCell style={{ opacity: 0.7 }}>
                                            {formatText({
                                                text: runeword[1],
                                                currentPath: location.pathname,
                                                searchQuery: searchQuery
                                            })}
                                        </TableCell>
                                    )}

                                    {isLargeScreen && (
                                        <TableCell>
                                            {formatText({
                                                text: runeword[2],
                                                currentPath: location.pathname,
                                                searchQuery: searchQuery
                                            })}
                                        </TableCell>
                                    )}

                                    <TableCellBlue>
                                        {formatText({
                                            text: runeword[3],
                                            currentPath: location.pathname,
                                            searchQuery: searchQuery
                                        })}
                                    </TableCellBlue>
                                </TableRow>
                            ))}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )}
            <Footer />
        </Container >
    );
};

export default RunewordList;