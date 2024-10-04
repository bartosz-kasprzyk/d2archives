import styled from "styled-components";
import TopLeft from "../../images/ValueBox/box_top_left.webp"
import TopRight from "../../images/ValueBox/box_top_right.webp"
import BottomLeft from "../../images/ValueBox/box_bottom_left.webp"
import BottomRight from "../../images/ValueBox/box_bottom_right.webp"
import Top from "../../images/ValueBox/box_top.webp"
import Bottom from "../../images/ValueBox/box_bottom.webp"
import Left from "../../images/ValueBox/box_left.webp"
import Right from "../../images/ValueBox/box_right.webp"
import Backdrop from "../../images/ValueBox/box_background.webp"

export const TableWrapper = styled.div`
    display: flex;
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
    color: #DDDDDD;
    transition: background-color 1s ease;

    ${props => props.$highlight && `
        background-color: #D1AD665A;
    `}
`;

export const TableCellBlue = styled(TableCell)`
    color: #4f53c5;
`;

export const ColumnHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: #885C02;
    background: #0000003A;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 15px;
    }
`;

export const TableHeader = styled(ColumnHeader)`
    color: #1B9718;
    background: #0000009A;
    font-size: 40px;
    margin: 20px 5px -10px;
    transition: filter 1s ease, transform 1s ease;

    ${props => props.$highlight && `
        filter: brightness(3);
        transform: scale(1.1);
    `}
`;

export const RowHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${({ $color }) => $color || 'inherit'};
    transition: background-color 1s ease;

    ${props => props.$highlight && `
        background-color: #D1AD665A;
    `}
`;

export const TableRow = styled.tr`
    font-family: 'AvQest', sans-serif;
    font-size: 17px;
    position: relative;
    z-index: 0;
    background: ${({ $index }) => ($index % 2 === 0 ? '#1413138A' : '#201F1F5A')};
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    transition: background-color 1s ease;

    ${props => props.$highlight && `
        background-color: #D1AD665A;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
    }
`;

export const SmallImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

export const SmallImageCounter = styled.span`
    margin-right: 5px;
`;

export const StyledSmallImage = styled.img`
    width: 30px;
`;

export const StyledBigImage = styled.img`
    transform: scale(0.8);

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        transform: scale(0.6);
    }
`;

export const ImageTitle = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    margin: 0;
`;

export const ImageSubtitle = styled.span`
    display: block;
    text-align: center;
    font-size: 15px;
    margin: 0;
`;

export const BottomLine = styled.div`
    color: #979797;
    border-top: 1px solid #97979770;
    margin: 0;
    margin-top: 2px;
    padding-top: 5px;
`;

export const ValueBox = styled.span`
    color: #8470ff;
    padding: 3px 8px 1px;
    filter: opacity(0.8);
    background: 
        url(${TopLeft}) top left no-repeat,
        url(${TopRight}) top right no-repeat,
        url(${BottomLeft}) bottom left no-repeat,
        url(${BottomRight}) bottom right no-repeat,
        url(${Top}) top repeat-x,
        url(${Bottom}) bottom repeat-x,
        url(${Left}) left repeat-y,
        url(${Right}) right repeat-y,
        url(${Backdrop}) center center repeat;
`;

export const InfoText = styled.span`
    color: grey;
    font-style: italic;
`;

export const CategoryText = styled.span`
    color: #86735a;
`;

export const LadderOnlyItem = styled.span`
    color: green;
    font-weight: bold;
    margin: 0 5px;
`;

export const RuneText = styled.span`
    color: #ca8120;
`;

export const BonusListTitle = styled.h2`
    color: #DDDDDD;
`

export const BonusList = styled.ul`
    list-style-type: none;
    padding: 0;
    padding-bottom: 60px;
`

export const BonusListItem = styled.li`
    color: #86735A;
`

export const HighlightSearch = styled.span`
    color: #000;
    background-color: #F8F412;
    padding: 0 2px;
    border-radius: 3px;
`;