import React, { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, BottomLine, TableWrapper, StyledSmallImage, RuneText, SmallImageCounter, SmallImageContainer } from "../../common/Table/styled";
import runeImages from "../../common/config/runeImages"
import useLoadContent from '../../common/hooks/useLoadContent';
import { RuneButton, RuneButtonImage, RuneButtonText, RuneGridContainer } from './styled';
import { Container } from '../../common/Container';
import { Loading } from '../../common/Loading';
import { formatText } from '../../common/config/formatText';
import gemImages from '../../common/config/gemImages';
import { toRunewords } from '../../common/config/routes';
import { StyledKeyword, StyledLink, StyledText } from '../../common/CommonStyles/styled';
import { useScreenWidth } from '../../common/hooks/useScreenWidth';
import { Navigation } from '../../common/Header/Navigation';
import { useTheme } from 'styled-components';

const RuneList = () => {
    const theme = useTheme();

    const state = useLoadContent('runeAndRuneword');
    const content = state.content;

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const rowRefs = useRef({});
    const [highlightedRow, setHighlightedRow] = useState(null);

    const scrollToRune = (runeName) => {
        if (rowRefs.current[runeName]) {
            const targetRow = rowRefs.current[runeName];
            targetRow.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            setHighlightedRow(runeName);

            setTimeout(() => {
                setHighlightedRow(null);
            }, 1000);
        }
    };

    if (!content) {
        return <Loading />;
    }

    const rows = Object.keys(content.content.runesTable)
        .filter(key => key.startsWith('row'))
        .map(key => content.content.runesTable[key]);

    return (
        <Container>
            {!isLargeScreen && <Navigation />}

            <StyledText>
                <StyledKeyword $color={"#CA8120"}>Runes</StyledKeyword> are stones that enhance items with socketed slots.
                They add various properties depending on the item type.
                When inserted in the correct order, they form <StyledLink to={toRunewords()}>runewords</StyledLink> that give items new properties.
                Here is a list of all runes:
            </StyledText>

            <RuneGridContainer>
                {Object.keys(runeImages).map((runeName) => (
                    <RuneButton key={runeName} onClick={() => scrollToRune(runeName)}>
                        <RuneButtonImage
                            src={runeImages[runeName]}
                            alt={`${runeName} Rune`}
                            title={`${runeName} Rune`}
                        />
                        <RuneButtonText>{runeName}</RuneButtonText>
                    </RuneButton>
                ))}
            </RuneGridContainer>

            <TableWrapper>
                <StyledTable>
                    <thead>
                        <TableRow $index={0}>
                            <ColumnHeader colSpan={isLargeScreen ? 2 : 1}>Rune</ColumnHeader>
                            <ColumnHeader>{isLargeScreen ? "Ingredients" : "Ingr."}</ColumnHeader>
                            <ColumnHeader>Properties</ColumnHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                id={`rune-${row[0]}`}
                                ref={el => rowRefs.current[row[0]] = el}
                                $highlight={highlightedRow === row[0]}
                                $index={index + 1}>
                                {isLargeScreen && (
                                    <RowHeader $color={theme.color.unique}>#{index + 1}</RowHeader>
                                )}
                                <TableCell>
                                    <RuneText>
                                        {formatText(row[0])}
                                    </RuneText>
                                    <StyledSmallImage
                                        src={runeImages[row[0]]}
                                        alt={`${row[0]} Rune`}
                                        title={`${row[0]} Rune`}
                                    />
                                </TableCell>
                                <TableCell>
                                    {row[0] === 'El' ? (
                                        '-'
                                    ) : (
                                        isLargeScreen ? (
                                            <>
                                                <StyledSmallImage
                                                    src={runeImages[row[1]]}
                                                    alt={`${row[1]} Rune`}
                                                    title={`${row[1]} Rune`}
                                                />
                                                <StyledSmallImage
                                                    src={runeImages[row[1]]}
                                                    alt={`${row[1]} Rune`}
                                                    title={`${row[1]} Rune`}
                                                />
                                                {index < 21 && (
                                                    <StyledSmallImage
                                                        src={runeImages[row[1]]}
                                                        alt={`${row[1]} Rune`}
                                                        title={`${row[1]} Rune`}
                                                    />
                                                )}
                                                {index >= 10 && (
                                                    <>
                                                        <StyledSmallImage
                                                            src={gemImages[index - 10].image}
                                                            alt={gemImages[index - 10].name}
                                                            title={gemImages[index - 10].name}
                                                        />
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <SmallImageContainer>
                                                    <SmallImageCounter>{index < 21 ? '3x' : '2x'}</SmallImageCounter>
                                                    <StyledSmallImage
                                                        src={runeImages[row[1]]}
                                                        alt={`${row[1]} Rune`}
                                                        title={`${row[1]} Rune`}
                                                    />
                                                </SmallImageContainer>
                                                {index >= 10 && (
                                                    <SmallImageContainer>
                                                        <SmallImageCounter>{'1x'}</SmallImageCounter>
                                                        <StyledSmallImage
                                                            src={gemImages[index - 10].image}
                                                            alt={gemImages[index - 10].name}
                                                            title={gemImages[index - 10].name}
                                                        />
                                                    </SmallImageContainer>
                                                )}
                                            </>
                                        )
                                    )}
                                </TableCell>
                                <TableCell>
                                    {formatText(row[2])}
                                    <BottomLine>
                                        {isLargeScreen ? row[3] : row[4]}
                                    </BottomLine>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </StyledTable>
            </TableWrapper>
        </Container >
    );
};

export default RuneList;