import React from 'react';
import { Container, StyledTable, TableCell, ColumnHeader, RowHeader, TableRow } from "../../common/Table/styled";
import useLoadContent from '../../common/hooks/useLoadContent'

const RunewordList = () => {
    const content = useLoadContent();

    if (!content) {
        return <div>Loading...</div>;
    }

    const runewords = Object.keys(content.content.runewordsTable)
        .filter(key => key.startsWith('runeword'))
        .map(key => content.content.runewordsTable[key]);

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
                        <TableRow key={index} $index={index + 1}>
                            <RowHeader>{runeword[0]}</RowHeader>
                            <TableCell>{formatText(runeword[1])}</TableCell>
                            <TableCell>{formatText(runeword[2])}</TableCell>
                            <TableCell>
                                {formatText(runeword[3])}
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </StyledTable>
        </Container>
    )
};

export default RunewordList;