import React, { useState } from 'react';
import { Loading } from '../../common/Loading';
import { Container } from '../../common/Container';
import { ColumnHeader, RowHeader, StyledBigImage, StyledTable, TableCell, TableRow, TableWrapper } from '../../common/Table/styled';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import images from '../../utils/loadImages';
import useLoadContent from '../../common/hooks/useLoadContent';
import { StyledKeyword, StyledLink, StyledText } from '../../common/CommonStyles/styled';
import { toSets } from '../../common/config/routes';
import { SearchBar } from '../../common/SearchBar';
import { NoResults } from '../../common/NoResults';
import { useScreenWidth } from '../../common/hooks/useScreenWidth';
import { Navigation } from '../../common/Header/Navigation';
import { useTheme } from 'styled-components';

const UniqueItemsList = () => {
    const theme = useTheme();

    const state = useLoadContent('uniqueAndSet');
    const content = state.content;

    const screenWidth = useScreenWidth();
    const isLargeScreen = screenWidth > 767;

    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    if (!content) return <Loading />;

    const filteredUniqueItems = Object.values(content.content.uniqueItems).filter(uniqueItem => {
        const nameMatch = uniqueItem.name.toLowerCase().includes(searchQuery.toLowerCase());
        const typeMatch = uniqueItem.type.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = uniqueItem.category.toLowerCase().includes(searchQuery.toLowerCase());
        const propsMatch = uniqueItem.props.some(prop => prop.toLowerCase().includes(searchQuery.toLowerCase()));

        return nameMatch || typeMatch || categoryMatch || propsMatch;
    });

    return (
        <Container>
            {!isLargeScreen && <Navigation />}

            <StyledText>
                <StyledKeyword $color={theme.color.unique}>Unique Items</StyledKeyword> are by far the most sought-after, possessing many magical properties that no Magical, Rare, or Crafted Item has.
                There is usually only one Unique item for every type of weapon and armor in the game.
                Unique items are denoted by their names being colored gold. <StyledLink to={toSets()}>Set Items</StyledLink> are different from Unique ones,
                but very similar to them in terms of how they work and rarity.
            </StyledText>

            <SearchBar
                placeholder={"Search uniques..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredUniqueItems.length === 0 ? (
                <NoResults
                    text={"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}
                />
            ) : (
                <TableWrapper>
                    <StyledTable>
                        <thead>
                            <TableRow $index={0}>
                                <ColumnHeader>Item</ColumnHeader>
                                {isLargeScreen && (<ColumnHeader>Category</ColumnHeader>)}
                                <ColumnHeader>Properties</ColumnHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            {filteredUniqueItems.map((uniqueItem, index) => {
                                const imageKey = uniqueItem.image
                                    .replace(/^\/images\//, '')
                                    .replace(/\.(png|jpg|gif|jpeg)$/, '');
                                const imageSrc = images[imageKey] || '/default_image.png';

                                return (
                                    <TableRow
                                        key={uniqueItem.name}
                                        $index={index + 1}
                                    >
                                        <RowHeader $color={theme.color.unique}>
                                            <StyledBigImage
                                                src={imageSrc}
                                                alt={uniqueItem.name}
                                            />
                                            <div>
                                                <big>{formatText(uniqueItem.name, location.pathname, searchQuery)}</big>
                                                <small>{formatText(uniqueItem.type, location.pathname, searchQuery)}</small>
                                                <small style={{ color: theme.color.white }}>
                                                    {!isLargeScreen && (
                                                        formatText(uniqueItem.category.split(' ').slice(0, 2).join(' '), location.pathname, searchQuery)
                                                    )}
                                                </small>
                                            </div>
                                        </RowHeader>

                                        {isLargeScreen && (
                                            <TableCell>
                                                {formatText(uniqueItem.category.split(' ').slice(0, 2).join(' '), location.pathname, searchQuery)}
                                            </TableCell>
                                        )}
                                        < TableCell >
                                            {
                                                uniqueItem.props.map((prop, propIndex, propsArray) => {
                                                    const reqLevelIndex = propsArray.findIndex(p => p.startsWith('Required Level:'));
                                                    const isRequires = prop.startsWith('Required');

                                                    return (
                                                        <div
                                                            key={propIndex}
                                                            style={{
                                                                color: propIndex <= reqLevelIndex
                                                                    ? isRequires
                                                                        ? theme.color.required
                                                                        : theme.color.white
                                                                    : theme.color.magic
                                                            }}
                                                        >
                                                            {formatText(prop, location.pathname, searchQuery)}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )
            }
        </Container >
    );
};

export default UniqueItemsList;