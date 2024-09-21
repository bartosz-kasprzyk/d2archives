import React, { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, TableWrapper, TableCellBlue } from "../../common/Table/styled";
import { Container } from '../../common/Container';
import { RunewordButton, StyledList, StyledNavigation } from './styled';
import { Loading } from '../../common/Loading';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import { toRunes } from '../../common/config/routes';
import useLoadContent from '../../common/hooks/useLoadContent';
import { StyledLink, StyledText } from '../../common/CommonStyles/styled';

const RunewordList = () => {
    const state = useLoadContent('runeAndRuneword');
    const content = state.content;

    const rowRefs = useRef({});
    const [highlightedRow, setHighlightedRow] = useState(null);

    const location = useLocation();

    const scrollToRuneword = (runeword) => {
        if (rowRefs.current[runeword]) {
            const targetRow = rowRefs.current[runeword];
            targetRow.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            setHighlightedRow(runeword);

            setTimeout(() => {
                setHighlightedRow(null);
            }, 1000);
        }
    };

    if (!content) {
        return <Loading />;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

    const runewordsNEW = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runewordNEW'))
        .map(key => content.content.runewordsTable[key]);

    return (
        <Container>
            <StyledText>
                <b>Runewords</b> are combinations of several different <StyledLink to={toRunes()}>runes</StyledLink> designed to create powerful weapons or armor.
                The correct arrangement of runes in socketed items not only provides basic attributes but also bonus effects that enhance the item's power.
                Most of the most important weapons and armor in the game come from runewords.
                Many of these are very difficult to obtain due to the rare appearance of runes at higher levels.
                Besides the runes, you also need to find the appropriate item.
                It is worth mentioning that runewords that deal high damage are best combined with items that also have a high base attack rating.
                Experienced players spend a lot of time searching for the right items and runes to ultimately create their desired equipment.
                Here is a list of all runewords:
            </StyledText>

            <StyledNavigation>
                {runewords.map((runeword) => (
                    <StyledList key={runeword[0]}>
                        <li>
                            <RunewordButton onClick={() => scrollToRuneword(runeword[0])}>
                                {formatText(runeword[0], location.pathname)}
                            </RunewordButton>
                        </li>
                    </StyledList>
                ))}
            </StyledNavigation>

            <TableWrapper>
                <StyledTable>
                    <thead>
                        <TableRow $index={0}>
                            <ColumnHeader>{content.content.runewordsTable.header1}</ColumnHeader>
                            <ColumnHeader>{content.content.runewordsTable.header2}</ColumnHeader>
                            <ColumnHeader>{content.content.runewordsTable.header3}</ColumnHeader>
                            <ColumnHeader>{content.content.runewordsTable.header4}</ColumnHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {runewords.map((runeword, index) => (
                            <TableRow
                                key={index}
                                $index={index + 1}
                                ref={el => rowRefs.current[runeword[0]] = el}
                                $highlight={highlightedRow === runeword[0]}
                                $new={runewordsNEW.some(newRw => newRw[0] === runeword[0])}
                            >
                                <RowHeader $color={"#86735A"}>{formatText(runeword[0], location.pathname)}</RowHeader>
                                <TableCell>{formatText(runeword[1], location.pathname)}</TableCell>
                                <TableCell>{formatText(runeword[2], location.pathname)}</TableCell>
                                <TableCellBlue>
                                    {formatText(runeword[3], location.pathname)}
                                </TableCellBlue>
                            </TableRow>
                        ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Container>
    );
};

export default RunewordList;