import { Container, StyledTable, TableCell, ColumnHeader, RowHeader, TableRow } from "./styled";

export const Table = () => (
    <Container>
        <StyledTable>
            <TableRow index={0}>
                <ColumnHeader colSpan="2">x</ColumnHeader>
                <ColumnHeader>y</ColumnHeader>
                <ColumnHeader>z</ColumnHeader>
            </TableRow>

            <TableRow index={1}>
                <RowHeader>x</RowHeader>
                <TableCell>a</TableCell>
                <TableCell>b</TableCell>
                <TableCell>c</TableCell>
            </TableRow>

            <TableRow index={2}>
                <RowHeader>y</RowHeader>
                <TableCell>d</TableCell>
                <TableCell>e</TableCell>
                <TableCell>f</TableCell>
            </TableRow>

            <TableRow index={3}>
                <RowHeader>z</RowHeader>
                <TableCell>g</TableCell>
                <TableCell>h</TableCell>
                <TableCell>i</TableCell>
            </TableRow>
        </StyledTable>
    </Container>
);