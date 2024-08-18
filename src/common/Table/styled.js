import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: center;
`;

export const StyledTable = styled.table`
    border-collapse: collapse;
    margin-bottom: 100px;
`;

export const TableCell = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #dddddd;
`;

export const ColumnHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #df9c0c;
    background: #0c0c0c;
`;

export const RowHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #df9c0c;
`;

export const TableRow = styled.tr`
    background-color: ${({ $index }) => ($index % 2 === 0 ? '#141313' : '#201f1f')};
    
    &:hover {
        background-color: #3b2d1c;
    }
`;

export const StyledRune = styled.img`
    width: 30px;
`;