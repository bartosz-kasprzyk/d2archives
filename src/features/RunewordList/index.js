import React, { useRef, useState } from 'react';
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
import runeImages from "../../common/config/runeImages"
import arrow from '../../images/UI/arrow.png'
import hoverArrow from '../../images/UI/arrow_highlight.png'
import { useScreenWidth } from '../../common/hooks/useScreenWidth';
import { Navigation } from '../../common/Header/Navigation';

const RunewordList = () => {
    const state = useLoadContent('runeAndRuneword');
    const content = state.content;

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const rowRefs = useRef({});
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRunes, setSelectedRunes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    if (!content) {
        return <Loading />;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

    const filteredBySearch = runewords.filter((runeword) =>
        runeword.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredByRunes = selectedRunes.length > 0 ? filteredBySearch.filter(runeword => {
        const runewordRunes = runeword[2].split(/\s*\+\s*/);
        return runewordRunes.every(rune => selectedRunes.includes(rune));
    }) : filteredBySearch;



    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRuneClick = (rune) => {
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
                <StyledKeyword $color={"#86735A"}>Runewords</StyledKeyword> are combinations of several different <StyledLink to={toRunes()}>runes</StyledLink> designed to create powerful weapons or armor.
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
                    Sort by runes
                </FilterTitle>
                <RuneGridContainer $isOpen={isOpen}>
                    {Object.keys(runeImages).map((runeName) => (
                        <RuneButton
                            key={runeName}
                            onClick={() => handleRuneClick(runeName)}>
                            <RuneButtonImage
                                src={runeImages[runeName]}
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

            {
                filteredByRunes.length === 0 ? (
                    selectedRunes.length > 0 ? (
                        <NoResults
                            text={"Ah, it seems the runes you possess do not create anything formidable, my friend. Perhaps seek out more runes to uncover new possibilities."}
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
                                        <RowHeader $color={'#86735A'}>
                                            {formatText(runeword[0], location.pathname, searchQuery)}
                                            {!isLargeScreen && (
                                                <div style={{ color: "#ddd" }}>
                                                    <small>
                                                        {formatText(runeword[2], location.pathname, searchQuery)}
                                                    </small>
                                                    <div style={{ paddingTop: "30px" }}>
                                                        {formatText(runeword[1], location.pathname, searchQuery)}
                                                    </div>
                                                </div>

                                            )}
                                        </RowHeader>

                                        {isLargeScreen && (
                                            <TableCell>
                                                {formatText(runeword[1], location.pathname, searchQuery)}
                                            </TableCell>
                                        )}

                                        {isLargeScreen && (
                                            <TableCell>
                                                {formatText(runeword[2], location.pathname, searchQuery)}
                                            </TableCell>
                                        )}

                                        <TableCellBlue>
                                            {formatText(runeword[3], location.pathname, searchQuery)}
                                        </TableCellBlue>
                                    </TableRow>
                                ))}
                            </tbody>
                        </StyledTable>
                    </TableWrapper>
                )
            }
        </Container >
    );
};

export default RunewordList;