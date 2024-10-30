import { useRef, useState } from 'react';
import { StyledTable, TableCell, ColumnHeader, RowHeader, TableRow, BottomLine, TableWrapper, StyledSmallImage, RuneText, SmallImageCounter, SmallImageContainer, CategoryText } from "../../common/Table/styled";
import runeAssets from '../../common/config/runeAssets';
import useLoadContent from '../../common/hooks/useLoadContent';
import { RuneButton, RuneButtonImage, RuneButtonText, RuneGridContainer } from './styled';
import { Container } from '../../common/Container';
import { Loading } from '../../common/Loading';
import { formatText } from '../../common/config/formatText';
import { toRunewords } from '../../common/config/routes';
import { StyledKeyword, StyledLink, StyledText } from '../../common/CommonStyles/styled';
import { useScreenWidth } from '../../common/hooks/useScreenWidth';
import { Navigation } from '../../common/Header/Navigation';
import { useTheme } from 'styled-components';
import { DataType, RuneAndRunewordData } from '../../types';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '../../common/SearchBar';
import { NoResults } from '../../common/NoResults';
import { Footer } from '../../common/Footer';

const RuneList = ({ dataType }: { dataType: DataType }) => {
    const theme = useTheme();

    const state = useLoadContent(dataType);
    const content = state.content as RuneAndRunewordData;

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const rowRefs = useRef<{ [key: string]: HTMLTableRowElement | null }>({});
    const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    const scrollToRune = (runeName: string) => {
        if (rowRefs.current[runeName]) {
            const targetRow = rowRefs.current[runeName];
            if (targetRow) {
                targetRow.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                setHighlightedRow(runeName);

                setTimeout(() => {
                    setHighlightedRow(null);
                }, 1000);
            }
        }
    };

    if (!content) {
        return <Loading dataType={dataType} />;
    }

    const runes = Object.keys(content.content.runesTable)
        .filter(key => key.startsWith('rune'))
        .map(key => content.content.runesTable[key]);

    const filteredRunes = runes
        .map((row, index) => ({
            data: row,
            originalIndex: index + 1
        }))
        .filter(({ data }) => {
            const runeMatches = data[0].toLowerCase().includes(searchQuery.toLowerCase());

            const propertiesMatch = data.slice(1).some((property) =>
                property.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return runeMatches || propertiesMatch;
        });

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
                {Object.keys(runeAssets).map((runeName) => (
                    <RuneButton key={runeName} onClick={() => scrollToRune(runeName)}>
                        <RuneButtonImage
                            src={runeAssets[runeName].image}
                            alt={`${runeName} Rune`}
                            title={`${runeName} Rune`}
                        />
                        <RuneButtonText>{runeName}</RuneButtonText>
                    </RuneButton>
                ))}
            </RuneGridContainer>

            <SearchBar
                placeholder={"Search runes..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredRunes.length === 0 ? (
                <NoResults
                    text={"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}
                />
            ) : (
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
                            {filteredRunes.map(({ data: row, originalIndex }, index) => (
                                <TableRow
                                    key={index}
                                    id={`rune-${row[0]}`}
                                    ref={el => rowRefs.current[row[0]] = el}
                                    $highlight={highlightedRow === row[0]}
                                    $index={index + 1}>
                                    {isLargeScreen && (
                                        <RowHeader $color={theme.color.unique}>#{originalIndex}</RowHeader>
                                    )}
                                    <TableCell>
                                        <RuneText>
                                            {formatText({
                                                text: row[0],
                                                currentPath: location.pathname,
                                                searchQuery: searchQuery
                                            })}
                                        </RuneText>
                                        <StyledSmallImage
                                            src={runeAssets[row[0]].image}
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
                                                    {runeAssets[row[0]].runes.map((rune, index) => (
                                                        <StyledSmallImage
                                                            key={index}
                                                            src={runeAssets[rune].image}
                                                            alt={`${rune} Rune`}
                                                            title={`${rune} Rune`}
                                                        />
                                                    ))}

                                                    {runeAssets[row[0]].gem && (
                                                        <StyledSmallImage
                                                            src={runeAssets[row[0]].gem?.image}
                                                            alt={runeAssets[row[0]].gem?.name}
                                                            title={runeAssets[row[0]].gem?.name}
                                                        />
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    <SmallImageContainer>
                                                        <SmallImageCounter>
                                                            {runeAssets[row[0]].runes.length}x
                                                        </SmallImageCounter>
                                                        <StyledSmallImage
                                                            src={runeAssets[row[0]].image}
                                                            alt={`${row[0]} Rune`}
                                                            title={`${row[0]} Rune`}
                                                        />
                                                    </SmallImageContainer>

                                                    {runeAssets[row[0]].gem && (
                                                        <SmallImageContainer>
                                                            <SmallImageCounter>1x</SmallImageCounter>
                                                            <StyledSmallImage
                                                                src={runeAssets[row[0]].gem?.image}
                                                                alt={runeAssets[row[0]].gem?.name}
                                                                title={runeAssets[row[0]].gem?.name}
                                                            />
                                                        </SmallImageContainer>
                                                    )}
                                                </>
                                            )
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <CategoryText>
                                            Weapon:
                                        </CategoryText>
                                        {formatText({
                                            text: row[1],
                                            currentPath: location.pathname,
                                            searchQuery: searchQuery
                                        })}

                                        <CategoryText>
                                            Helmet/Armor:
                                        </CategoryText>
                                        {formatText({
                                            text: row[2],
                                            currentPath: location.pathname,
                                            searchQuery: searchQuery
                                        })}

                                        <CategoryText>
                                            Shield:
                                        </CategoryText>
                                        {formatText({
                                            text: row[3],
                                            currentPath: location.pathname,
                                            searchQuery: searchQuery
                                        })}

                                        <BottomLine>
                                            {(isLargeScreen ? "Required Character Level: " : "Req Clvl: ") + row[4]}
                                        </BottomLine>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )}
            <Footer />
        </Container >
    );
};

export default RuneList;