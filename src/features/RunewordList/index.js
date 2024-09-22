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

const RunewordList = () => {
    const state = useLoadContent('runeAndRuneword');
    const content = state.content;

    const rowRefs = useRef({});
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    if (!content) {
        return <Loading />;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

    const filteredRunewords = runewords.filter((runeword) =>
        runeword.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <Container>
            <StyledText>
                <StyledKeyword $color={"#86735A"}>Runewords</StyledKeyword> are combinations of several different <StyledLink to={toRunes()}>runes</StyledLink> designed to create powerful weapons or armor.
                The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power.
                Most of the most important weapons and armor in the game come from runewords.
                Many of these are very difficult to obtain due to the rare appearance of runes at higher levels.
                Besides the runes, you also need to find the appropriate item.
                It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating.
                Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment.
                Here is a list of all runewords:
            </StyledText>

            <SearchBar
                placeholder={"Search runewords..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredRunewords.length === 0 ? (
                <NoResults />
            ) : (
                <TableWrapper>
                    <StyledTable>
                        <thead>
                            <TableRow $index={0}>
                                <ColumnHeader>Runeword</ColumnHeader>
                                <ColumnHeader>Base</ColumnHeader>
                                <ColumnHeader>Runes</ColumnHeader>
                                <ColumnHeader>Properties</ColumnHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            {filteredRunewords.map((runeword, index) => (
                                <TableRow
                                    key={index}
                                    $index={index + 1}
                                    ref={(el) => (rowRefs.current[runeword[0]] = el)}
                                >
                                    <RowHeader $color={'#86735A'}>
                                        {formatText(runeword[0], location.pathname, searchQuery)}
                                    </RowHeader>
                                    <TableCell>
                                        {formatText(runeword[1], location.pathname, searchQuery)}
                                    </TableCell>
                                    <TableCell>
                                        {formatText(runeword[2], location.pathname, searchQuery)}
                                    </TableCell>
                                    <TableCellBlue>
                                        {formatText(runeword[3], location.pathname, searchQuery)}
                                    </TableCellBlue>
                                </TableRow>
                            ))}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )}
        </Container>
    );
};

export default RunewordList;