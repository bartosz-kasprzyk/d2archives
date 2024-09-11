import React, { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, TableWrapper, TableCellBlue } from "../../common/Table/styled";
import useLoadContent from '../../common/hooks/useLoadContent'
import { Container } from '../../common/Container';
import { RunewordButton, StyledList, StyledNavigation, StyledText } from './styled';
import { Loading } from '../../common/Loading';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';

const RunewordList = () => {
    const state = useLoadContent();
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
                {content.content.runewordsDescription}
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
                                <RowHeader>{formatText(runeword[0], location.pathname)}</RowHeader> {/* Pass the path */}
                                <TableCell>{formatText(runeword[1], location.pathname)}</TableCell> {/* Pass the path */}
                                <TableCell>{formatText(runeword[2], location.pathname)}</TableCell> {/* Pass the path */}
                                <TableCellBlue>
                                    {formatText(runeword[3], location.pathname)} {/* Pass the path */}
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