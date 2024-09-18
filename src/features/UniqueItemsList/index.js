import React from 'react';
import { Loading } from '../../common/Loading';
import { Container } from '../../common/Container';
import { ColumnHeader, RowHeader, StyledTable, TableCell, TableRow, TableWrapper } from '../../common/Table/styled';
import useLoadUniqueAndSet from '../../common/hooks/useLoadUniqueAndSet';
import { formatText } from '../../common/config/formatText';
import { useLocation } from 'react-router-dom';
import images from '../../utils/loadImages';

const UniqueItemsList = () => {
    const state = useLoadUniqueAndSet();
    const content = state.content;

    const location = useLocation();

    if (!content) return <Loading />;

    return (
        <Container>
            <TableWrapper>
                <StyledTable>
                    <thead>
                        <TableRow $index={0}>
                            <ColumnHeader>Name</ColumnHeader>
                            <ColumnHeader>Image</ColumnHeader>
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
                                    <RowHeader>
                                        {formatText(uniqueItem.name)}
                                        <small>{uniqueItem.type}</small>
                                    </RowHeader>
                                    <TableCell>
                                        <img
                                            src={imageSrc}
                                            alt={uniqueItem.name}
                                        />
                                    </TableCell>
                                    <TableCell>{uniqueItem.category}</TableCell>
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