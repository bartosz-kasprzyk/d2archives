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

const UniqueItemsList = () => {
    const state = useLoadContent('uniqueAndSet');
    const content = state.content;

    const [searchQuery, setSearchQuery] = useState('');

    const location = useLocation();

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
            <StyledText>
                <StyledKeyword $color={"#86735A"}>Unique Items</StyledKeyword> are by far the most sought-after, possessing many magical properties that no Magical, Rare, or Crafted Item has.
                There is usually only one Unique item for every type of weapon and armor in the game.
                Unique items are denoted by their names being colored gold. <StyledLink to={toSets()}>Set Items</StyledLink> are different from Unique ones,
                but very similar to them in terms of how they work and rarity.
                Here is a list of all Unique Items:
            </StyledText>

            <SearchBar
                placeholder={"Search uniques..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredUniqueItems.length === 0 ? (
                <NoResults />
            ) : (
                <TableWrapper>
                    <StyledTable>
                        <thead>
                            <TableRow $index={0}>
                                <ColumnHeader>Item</ColumnHeader>
                                <ColumnHeader>Category</ColumnHeader>
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
                                        <RowHeader $color={"#86735A"}>
                                            <StyledBigImage
                                                src={imageSrc}
                                                alt={uniqueItem.name}
                                            />
                                            <div>
                                                <big>{formatText(uniqueItem.name, searchQuery)}</big>
                                                <small>{formatText(uniqueItem.type, searchQuery)}</small>
                                            </div>
                                        </RowHeader>

                                        <TableCell>{formatText(uniqueItem.category.split(' ').slice(0, 2).join(' '), searchQuery)}</TableCell>
                                        <TableCell>
                                            {uniqueItem.props.map((prop, propIndex, propsArray) => {
                                                const reqLevelIndex = propsArray.findIndex(p => p.startsWith('Required Level:'));
                                                const isRequires = prop.startsWith('Required');

                                                return (
                                                    <div
                                                        key={propIndex}
                                                        style={{
                                                            color: propIndex <= reqLevelIndex
                                                                ? isRequires
                                                                    ? '#9d4a3c'
                                                                    : '#fff'
                                                                : '#4f53c5'
                                                        }}
                                                    >
                                                        {formatText(prop, location.pathname, searchQuery)}
                                                    </div>
                                                );
                                            })}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </tbody>
                    </StyledTable>
                </TableWrapper>
            )}
        </Container >
    );
};

export default UniqueItemsList;