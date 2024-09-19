import React from 'react';
import { Loading } from '../../common/Loading';
import { Container } from '../../common/Container';
import { BonusList, BonusListItem, BonusListTitle, ColumnHeader, ImageSubtitle, ImageTitle, RowHeader, StyledBigImage, StyledTable, TableCell, TableHeader, TableRow, TableWrapper } from '../../common/Table/styled';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import images from '../../utils/loadImages';
import useLoadContent from '../../common/hooks/useLoadContent';

const SetItemsList = () => {
    const state = useLoadContent('uniqueAndSet');
    const content = state.content;
    const location = useLocation();

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
            {Object.entries(groupedItems).map(([category, items], index) => {
                const bonuses = content.content.setBonuses[category] || {};

                return (
                    <div key={index}>

                        <TableWrapper>
                            <StyledTable>
                                <thead>
                                    <TableRow>
                                        <TableHeader colSpan={3} className="table-title-cell">
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
                                            >
                                                <RowHeader $color={"#1B9718"}>
                                                    <StyledBigImage
                                                        src={imageSrc}
                                                        alt={setItem.name}
                                                    />
                                                    <ImageTitle>{formatText(setItem.name)}</ImageTitle>
                                                    <ImageSubtitle>{setItem.type}</ImageSubtitle>
                                                </RowHeader>
                                                <TableCell>
                                                    {setItem.props.map((prop, propIndex, propsArray) => {
                                                        const reqLevelIndex = propsArray.findIndex(p => p.startsWith('Required Level:'));
                                                        const isRequires = prop.startsWith('Required');
                                                        const isSetItems = prop.toLowerCase().includes('set items');

                                                        return (
                                                            <div
                                                                key={propIndex}
                                                                style={{
                                                                    color: isSetItems ? '#1B9718' : (propIndex <= reqLevelIndex
                                                                        ? isRequires
                                                                            ? '#9d4a3c'
                                                                            : '#DDDDDD'
                                                                        : '#4f53c5'
                                                                    )
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
            })}
        </Container>
    );
};

export default SetItemsList;