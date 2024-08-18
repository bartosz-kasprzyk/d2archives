import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, StyledRune, MutedText, BottomLine } from "./styled";
import runeImages from "../config/runeImages"

export const Table = () => {
    const location = useLocation();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lang = searchParams.get('lang') || 'eng';

        const loadContent = async () => {
            try {
                let contentModule;
                if (lang === 'pl') {
                    contentModule = await import('../translations/pl.json');
                } else {
                    contentModule = await import('../translations/eng.json');
                }
                setContent(contentModule);
            } catch (error) {
                console.error('Error loading language file:', error);
            }
        };

        loadContent();
    }, [location.search]);

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
                        <TableRow key={index} $index={index + 1}>
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
        </Container>
    );
};
