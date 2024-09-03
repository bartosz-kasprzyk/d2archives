import React, { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, TableWrapper, TableCellBlue, TableCellGold } from "../../common/Table/styled";
import useLoadContent from '../../common/hooks/useLoadContent'
import { Container } from '../../common/Container';
import { RunewordButton, StyledNavigation, StyledText, ValueBox } from './styled';

const RunewordList = () => {
    const content = useLoadContent();
    const rowRefs = useRef({});

    const [highlightedRow, setHighlightedRow] = useState(null);

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
        return <div>Loading...</div>;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

    const runewordsNEW = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runewordNEW'))
        .map(key => content.content.runewordsTable[key]);

    console.log("New Runewords:", runewordsNEW.map(rw => rw[0]));

    const formatText = (text) => {
        const regex = /(?<!Adds\s)\b\d+-\d+\b/g;
        const lines = text.split('\n');

        return lines.map((line, lineIndex) => {
            const parts = line.split(/(\*New\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b)/g);

            return (
                <React.Fragment key={lineIndex}>
                    {parts.map((part, partIndex) => {
                        if (part === "*New*") {
                            return (
                                <span key={partIndex} style={{ color: 'green', fontWeight: 'bold', margin: '0 0.5em' }}>
                                    {part}
                                </span>
                            );
                        } else if (part === "(Weapon Version)" || part === "(Shield Version)" || part === "(Armor Version)" || part === "(Sword Version)") {
                            return (
                                <span key={partIndex} style={{ color: 'grey', fontStyle: 'italic', margin: '0 0.5em' }}>
                                    {part}
                                </span>
                            );
                        } else if (regex.test(part)) {
                            return (
                                <ValueBox key={partIndex}>
                                    {part}
                                </ValueBox>
                            );
                        } else {
                            return part;
                        }
                    })
                    }
                    <br />
                </React.Fragment >
            );
        });
    };

    return (
        <Container>
            <StyledText>
                {content.content.runewordsDescription}
            </StyledText>
            <StyledNavigation>
                {runewords.map((runeword) => (
                    <ul key={runeword[0]}>
                        <li>
                            <RunewordButton onClick={() => scrollToRuneword(runeword[0])}>
                                {formatText(runeword[0])}
                            </RunewordButton>
                        </li>
                    </ul>
                ))}
            </StyledNavigation>
            <StyledText>
                {formatText(content.content.runewordsPSA)}
            </StyledText>
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
                                <RowHeader>{formatText(runeword[0])}</RowHeader>
                                <TableCell>{formatText(runeword[1])}</TableCell>
                                <TableCellGold>{formatText(runeword[2])}</TableCellGold>
                                <TableCellBlue>
                                    {formatText(runeword[3])}
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