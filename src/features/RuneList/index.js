import React, { useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, StyledRune, BottomLine, TableWrapper } from "../../common/Table/styled";
import runeImages from "../../common/config/runeImages"
import useLoadContent from '../../common/hooks/useLoadContent';
import { RuneButton, RuneButtonImage, RuneGridContainer, StyledText } from './styled';
import { Container } from '../../common/Container';

const RuneList = () => {
    const content = useLoadContent();
    const rowRefs = useRef({});

    const [highlightedRow, setHighlightedRow] = useState(null);

    const scrollToRune = (runeName) => {
        if (rowRefs.current[runeName]) {
            const targetRow = rowRefs.current[runeName];
            targetRow.scrollIntoView({ behavior: 'smooth' });

            // Highlight the row
            setHighlightedRow(runeName);

            // Remove highlight after 1 second (1000 ms)
            setTimeout(() => {
                setHighlightedRow(null);
            }, 1000); // Adjust the duration as needed
        }
    };

    if (!content) {
        return <div>Loading...</div>;
    }

    const rows = Object.keys(content.content.runesTable)
        .filter(key => key.startsWith('row'))
        .map(key => content.content.runesTable[key]);

    const formatText = (text) => {
        return text.split('\n').map((part, index) => (
            <React.Fragment key={index}>
                {part}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <Container>
            <StyledText>
                {content.content.runesDescription}
            </StyledText>
            <RuneGridContainer>
                {Object.keys(runeImages).map((runeName) => (
                    <RuneButton key={runeName} onClick={() => scrollToRune(runeName)}>
                        <RuneButtonImage src={runeImages[runeName]} alt={`${runeName} Rune `} title={`${runeName} Rune`} />
                    </RuneButton>
                ))}
            </RuneGridContainer>
            <TableWrapper>
                <StyledTable>
                    <thead>
                        <TableRow $index={0}>
                            <ColumnHeader colSpan="2">{content.content.runesTable.header1}</ColumnHeader>
                            <ColumnHeader>{content.content.runesTable.header2}</ColumnHeader>
                            <ColumnHeader>{content.content.runesTable.header3}</ColumnHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <TableRow key={index} id={`rune-${row[0]}`} ref={el => rowRefs.current[row[0]] = el} $highlight={highlightedRow === row[0]} $index={index + 1}>
                                <RowHeader>#{index + 1}</RowHeader>
                                <TableCell>
                                    {formatText(row[0])}
                                    <StyledRune src={runeImages[row[0]]} alt={`${row[0]} Rune`} />
                                </TableCell>
                                <TableCell>{formatText(row[1])}</TableCell>
                                <TableCell>
                                    {formatText(row[2])}
                                    <BottomLine>
                                        {row[3]}
                                    </BottomLine>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Container>
    );
};

export default RuneList;