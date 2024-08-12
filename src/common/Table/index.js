import React from 'react';
import { Container, StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, StyledRune } from "./styled";
import content from '../translations/pl.json';
import runeImages from "../config/runeImages"

export const Table = () => {
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
            <StyledTable>
                <thead>
                    <TableRow index={0}>
                        <ColumnHeader colSpan="2">{content.content.runesTable.header1}</ColumnHeader>
                        <ColumnHeader>{content.content.runesTable.header2}</ColumnHeader>
                        <ColumnHeader>{content.content.runesTable.header3}</ColumnHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <TableRow key={index} index={index + 1}>
                            <RowHeader>#{index + 1}</RowHeader>
                            <TableCell>
                                {formatText(row[0])}
                                <StyledRune src={runeImages[row[0]]} alt={`${row[0]} Rune`} />
                            </TableCell>
                            <TableCell>{formatText(row[1])}</TableCell>
                            <TableCell>{formatText(row[2])}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </StyledTable>
        </Container>
    );
};
