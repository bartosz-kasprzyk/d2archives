import React, { useRef, useState } from 'react';
import { Loading } from '../../common/Loading';
import { Container } from '../../common/Container';
import { BonusList, BonusListItem, BonusListTitle, ColumnHeader, ImageSubtitle, ImageTitle, RowHeader, StyledBigImage, StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from '../../common/Table/styled';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import images from '../../utils/loadImages';
import useLoadContent from '../../common/hooks/useLoadContent';
import { StyledKeyword, StyledLink, StyledText } from '../../common/CommonStyles/styled';
import { toUniques } from '../../common/config/routes';
import { SetButton, SetItemButton, StyledNavigation, StyledSetItemList, StyledSetList } from './styled';
import { useScreenWidth } from '../../common/hooks/useScreenWidth';
import { Navigation } from '../../common/Header/Navigation';
import { useTheme } from 'styled-components';
import { SearchBar } from '../../common/SearchBar';
import { NoResults } from '../../common/NoResults';

const SetItemsList = () => {
    const theme = useTheme();

    const state = useLoadContent('uniqueAndSet');
    const content = state.content;

    const screenWidth = useScreenWidth();
    const isEnoughSpace = screenWidth > 1322;
    const isLargeScreen = screenWidth > 767;

    const categoryRefs = useRef({});
    const itemRefs = useRef({});
    const location = useLocation();
    const [highlightedRow, setHighlightedRow] = useState(null);
    const [highlightedCategory, setHighlightedCategory] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');

    const scrollToSet = (categoryName) => {
        const targetRow = categoryRefs.current[categoryName];

        if (targetRow) {
            targetRow.scrollIntoView({
                behavior: 'smooth',
            });

            setHighlightedCategory(categoryName);

            setTimeout(() => {
                setHighlightedCategory(null);
            }, 1000);
        }
    };


    const scrollToSetItem = (itemName) => {
        const targetRow = itemRefs.current[itemName];

        if (targetRow) {
            targetRow.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });

            setHighlightedRow(itemName);

            setTimeout(() => {
                setHighlightedRow(null);
            }, 1000);
        }
    };

    if (!content || !content.content || !content.content.setItems) {
        return <Loading />;
    }

    const filteredSetItems = Object.values(content.content.setItems).filter(setItem => {
        const nameMatch = setItem.name.toLowerCase().includes(searchQuery.toLowerCase());
        const typeMatch = setItem.type.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = setItem.category.toLowerCase().includes(searchQuery.toLowerCase());
        const propsMatch = setItem.props.some(prop => prop.toLowerCase().includes(searchQuery.toLowerCase()));

        return nameMatch || typeMatch || categoryMatch || propsMatch;
    });

    const groupedItems = filteredSetItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    return (
        <Container>
            {!isLargeScreen && <Navigation />}

            <StyledText>
                <StyledKeyword $color={theme.color.set}>Set Items</StyledKeyword> are special items introduced in Diablo II.
                They are like <StyledLink to={toUniques()}>Unique Items</StyledLink>, in the way that every time you find the same item, it has the same attributes.
                However, in general, Set Items are a tad weaker than Unique Items, or so called "Uniques".
                This is because Set Items are each part of specific sets, and moreover, if you equip the entire set, you will gain an extra set of Bonus Affixes, hence the name "Set Items".
                Set Items are denoted by their name appearing in bright green.
                Here are all the Sets:
            </StyledText>

            <StyledNavigation>
                {Object.entries(groupedItems).map(([category, items], index) => (
                    <StyledSetList key={index}>
                        <li>
                            <SetButton onClick={() => scrollToSet(category)}>
                                {category}
                            </SetButton>

                            <StyledSetItemList>
                                {isEnoughSpace && items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <SetItemButton onClick={() => scrollToSetItem(item.name)}>
                                            {item.name}
                                        </SetItemButton>
                                    </li>
                                ))}
                            </StyledSetItemList>
                        </li>
                    </StyledSetList>
                ))}
            </StyledNavigation>

            <SearchBar
                placeholder={"Search sets..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {filteredSetItems.length === 0 ? (
                <NoResults
                    text={"Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path."}
                />
            ) : (
                Object.entries(groupedItems).map(([category, items], index) => {
                    const bonuses = content.content.setBonuses[category] || {};

                    return (
                        <div key={index}>
                            <TableWrapper>
                                <StyledTable>
                                    <thead>
                                        <TableRow ref={el => categoryRefs.current[category] = el}>
                                            <TableHeader colSpan={isLargeScreen ? 3 : 2} $highlight={highlightedCategory === category}>
                                                +&nbsp;{category}&nbsp;+
                                            </TableHeader>
                                        </TableRow>
                                        <TableRow $index={0}>
                                            <ColumnHeader>Item</ColumnHeader>
                                            <ColumnHeader>Properties</ColumnHeader>
                                            {isLargeScreen && <ColumnHeader>Set Bonuses</ColumnHeader>}
                                        </TableRow>
                                    </thead>
                                    <tbody>
                                        {items.map((setItem, itemIndex) => {
                                            const imageKey = setItem.image
                                                .replace(/^\/images\//, '')
                                                .replace(/\.(png|jpg|gif|jpeg)$/, '');
                                            const imageSrc = images[imageKey] || '/default_image.png';

                                            return (
                                                <React.Fragment key={setItem.name}>
                                                    <TableRow
                                                        $index={itemIndex + 1}
                                                        ref={el => itemRefs.current[setItem.name] = el}
                                                    >
                                                        <RowHeader
                                                            $color={theme.color.set}
                                                            $highlight={highlightedRow === setItem.name}
                                                        >
                                                            <StyledBigImage src={imageSrc} alt={setItem.name} />
                                                            <div style={{ marginTop: '-15px' }}>
                                                                <ImageTitle>{formatText(setItem.name, location.pathname, searchQuery)}</ImageTitle>
                                                                <ImageSubtitle>{formatText(setItem.type, location.pathname, searchQuery)}</ImageSubtitle>
                                                            </div>
                                                        </RowHeader>
                                                        <TableCell $highlight={highlightedRow === setItem.name}>
                                                            {setItem.props.map((prop, propIndex, propsArray) => {
                                                                const reqLevelIndex = propsArray.findIndex(p => p.startsWith('Required Level:'));
                                                                const isRequires = prop.startsWith('Required');
                                                                const isSetItems = prop.toLowerCase().includes('set items');

                                                                return (
                                                                    <div
                                                                        key={propIndex}
                                                                        style={{
                                                                            color: isSetItems
                                                                                ? theme.color.set
                                                                                : propIndex <= reqLevelIndex
                                                                                    ? isRequires
                                                                                        ? theme.color.required
                                                                                        : theme.color.white
                                                                                    : theme.color.magic,
                                                                        }}
                                                                    >
                                                                        {formatText(prop, location.pathname, searchQuery)}
                                                                    </div>
                                                                );
                                                            })}
                                                        </TableCell>
                                                        {isLargeScreen && itemIndex === 0 && (
                                                            <TableCell rowSpan={items.length}>
                                                                <div>
                                                                    <BonusListTitle>Partial Set Bonus:</BonusListTitle>
                                                                    <BonusList>
                                                                        {bonuses["Partial Set Bonus"]?.map((bonus, i) => (
                                                                            <BonusListItem key={i}>{formatText(bonus, location.pathname, searchQuery)}</BonusListItem>
                                                                        ))}
                                                                    </BonusList>
                                                                </div>
                                                                <div>
                                                                    <BonusListTitle>Full Set Bonus:</BonusListTitle>
                                                                    <BonusList>
                                                                        {bonuses["Full Set Bonus"]?.map((bonus, i) => (
                                                                            <BonusListItem key={i}>{formatText(bonus, location.pathname, searchQuery)}</BonusListItem>
                                                                        ))}
                                                                    </BonusList>
                                                                </div>
                                                            </TableCell>
                                                        )}
                                                    </TableRow>
                                                    {!isLargeScreen && itemIndex === items.length - 1 && (
                                                        <React.Fragment>
                                                            <TableRow $index={0}>
                                                                <ColumnHeader colSpan={2}>Set Bonuses</ColumnHeader>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell colSpan={2}>
                                                                    <div>
                                                                        <BonusListTitle>Partial Set Bonus:</BonusListTitle>
                                                                        <BonusList>
                                                                            {bonuses["Partial Set Bonus"]?.map((bonus, i) => (
                                                                                <BonusListItem key={i}>{formatText(bonus, location.pathname, searchQuery)}</BonusListItem>
                                                                            ))}
                                                                        </BonusList>
                                                                    </div>
                                                                    <div>
                                                                        <BonusListTitle>Full Set Bonus:</BonusListTitle>
                                                                        <BonusList>
                                                                            {bonuses["Full Set Bonus"]?.map((bonus, i) => (
                                                                                <BonusListItem key={i}>{formatText(bonus, location.pathname, searchQuery)}</BonusListItem>
                                                                            ))}
                                                                        </BonusList>
                                                                    </div>
                                                                </TableCell>
                                                            </TableRow>
                                                        </React.Fragment>
                                                    )}
                                                </React.Fragment>
                                            );
                                        })}
                                    </tbody>
                                </StyledTable>
                            </TableWrapper>
                        </div>
                    );
                })
            )}
        </Container>
    );
};

export default SetItemsList;