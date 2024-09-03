import styled from "styled-components";

export const TableWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: center;
`;

export const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 20px 0 100px;
    width: 100%;
`;

export const TableCell = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #dddddd;
`;

export const TableCellBlue = styled(TableCell)`
    color: #4f53c5;
`;

export const TableCellGold = styled(TableCell)`
    color: #ca8120;
`;

export const ColumnHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #885C02;
    background: #0F0F0F;
`;

export const RowHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #86735a;
`;

export const TableRow = styled.tr`
    background-color: ${({ $index }) => ($index % 2 === 0 ? '#141313' : '#201f1f')};
    transition: background-color 1s ease;
    font-family: 'AvQest', sans-serif;
    font-size: 17px;
    position: relative;
    z-index: 0;

    ${props => props.$highlight && `
        background-color: #93632A;
    `}

    ${props => props.$new && `
        border: 2px solid green;
        box-shadow: 0 0 10px green;
        overflow: hidden;
        z-index: 1;
    `}
    
    &:hover {
        background-color: #3b2d1c;
    }
`;

export const StyledRune = styled.img`
    width: 30px;
`;

export const BottomLine = styled.div`
    color: #979797;
    border-top: 1px solid #97979770;
    margin: 0;
    margin-top: 2px;
    padding-top: 5px;
`;