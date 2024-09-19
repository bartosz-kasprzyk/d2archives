import React from 'react';
import { Loading } from '../../common/Loading';
import { Container } from '../../common/Container';
import { ColumnHeader, RowHeader, StyledBigImage, StyledTable, TableCell, TableRow, TableWrapper } from '../../common/Table/styled';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import images from '../../utils/loadImages';
import useLoadContent from '../../common/hooks/useLoadContent';

const UniqueItemsList = () => {
    const state = useLoadContent('uniqueAndSet');
    const content = state.content;

    const location = useLocation();

    if (!content) return <Loading />;

    return (
        <Container>
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
                        {Object.values(content.content.uniqueItems).map((uniqueItem, index) => {
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
                                            <big>{formatText(uniqueItem.name)}</big>
                                            <small>{uniqueItem.type}</small>
                                        </div>
                                    </RowHeader>

                                    <TableCell>{uniqueItem.category.split(' ').slice(0, 2).join(' ')}</TableCell>
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
                                                    {formatText(prop, location.pathname)}
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
        </Container >
    );
};

export default UniqueItemsList;