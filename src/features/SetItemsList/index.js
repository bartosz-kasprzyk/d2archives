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

const SetItemsList = () => {
    const state = useLoadContent('uniqueAndSet');
    const content = state.content;
    const location = useLocation();

    const categoryRefs = useRef({});
    const itemRefs = useRef({});
    const [highlightedRow, setHighlightedRow] = useState(null);
    const [highlightedCategory, setHighlightedCategory] = useState(null);


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

    const groupedItems = Object.values(content.content.setItems).reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    return (
        <Container>
            <StyledText>
                <StyledKeyword $color={"#1B9718"}>Set Items</StyledKeyword> are special items introduced in Diablo II.
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
                                {items.map((item, itemIndex) => (
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

            {
                Object.entries(groupedItems).map(([category, items], index) => {
                    const bonuses = content.content.setBonuses[category] || {};

                    return (
                        <div key={index}>
                            <TableWrapper>
                                <StyledTable>
                                    <thead>
                                        <TableRow ref={el => categoryRefs.current[category] = el}>
                                            <TableHeader colSpan={3} $highlight={highlightedCategory === category}>
                                                + {category} +
                                            </TableHeader>
                                        </TableRow>
                                        <TableRow $index={0}>
                                            <ColumnHeader>Item</ColumnHeader>
                                            <ColumnHeader>Properties</ColumnHeader>
                                            <ColumnHeader>Set Bonuses</ColumnHeader>
                                        </TableRow>
                                    </thead>
                                    <tbody>
                                        {items.map((setItem, itemIndex) => {
                                            const imageKey = setItem.image
                                                .replace(/^\/images\//, '')
                                                .replace(/\.(png|jpg|gif|jpeg)$/, '');
                                            const imageSrc = images[imageKey] || '/default_image.png';

                                            return (
                                                <TableRow
                                                    key={setItem.name}
                                                    $index={itemIndex + 1}
                                                    ref={el => (itemRefs.current[setItem.name] = el)}
                                                >
                                                    <RowHeader
                                                        $color={"#1B9718"}
                                                        $highlight={highlightedRow === setItem.name}
                                                    >
                                                        <StyledBigImage src={imageSrc} alt={setItem.name} />
                                                        <ImageTitle>{setItem.name}</ImageTitle>
                                                        <ImageSubtitle>{setItem.type}</ImageSubtitle>
                                                    </RowHeader>
                                                    <TableCell
                                                        $highlight={highlightedRow === setItem.name}
                                                    >
                                                        {setItem.props.map((prop, propIndex, propsArray) => {
                                                            const reqLevelIndex = propsArray.findIndex(p => p.startsWith('Required Level:'));
                                                            const isRequires = prop.startsWith('Required');
                                                            const isSetItems = prop.toLowerCase().includes('set items');

                                                            return (
                                                                <div
                                                                    key={propIndex}
                                                                    style={{
                                                                        color: isSetItems
                                                                            ? '#1B9718'
                                                                            : propIndex <= reqLevelIndex
                                                                                ? isRequires
                                                                                    ? '#9d4a3c'
                                                                                    : '#DDDDDD'
                                                                                : '#4f53c5',
                                                                    }}
                                                                >
                                                                    {formatText(prop, location.pathname)}
                                                                </div>
                                                            );
                                                        })}
                                                    </TableCell>
                                                    {itemIndex === 0 ? (
                                                        <TableCell rowSpan={items.length}>
                                                            <div>
                                                                <BonusListTitle>Partial Set Bonus:</BonusListTitle>
                                                                <BonusList>
                                                                    {bonuses["Partial Set Bonus"]?.map((bonus, i) => (
                                                                        <BonusListItem key={i}>{bonus}</BonusListItem>
                                                                    ))}
                                                                </BonusList>
                                                            </div>
                                                            <div>
                                                                <BonusListTitle>Full Set Bonus:</BonusListTitle>
                                                                <BonusList>
                                                                    {bonuses["Full Set Bonus"]?.map((bonus, i) => (
                                                                        <BonusListItem key={i}>{bonus}</BonusListItem>
                                                                    ))}
                                                                </BonusList>
                                                            </div>
                                                        </TableCell>
                                                    ) : null}
                                                </TableRow>
                                            );
                                        })}
                                    </tbody>
                                </StyledTable>
                            </TableWrapper>
                        </div>
                    );
                })
            }
        </Container >
    );
};

export default SetItemsList;