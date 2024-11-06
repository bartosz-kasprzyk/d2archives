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

export const TableCell = styled.th<{ $highlight?: boolean }>`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${({ theme }) => theme.color.white.soft};
    transition: background-color 1s ease;

    ${({ $highlight, theme }) => $highlight && `
        background-color: ${theme.color.highlight};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding: 5px;
    }
`;

export const TableCellBlue = styled(TableCell)`
    color: ${({ theme }) => theme.color.magic};
`;

export const ColumnHeader = styled.th`
    border: 3px solid #000;
    padding: 10px;
    text-align: center;
    color: ${({ theme }) => theme.color.brown};
    background: ${({ theme }) => theme.color.black.light};
    font-size: ${({ theme }) => theme.fontSize.xl2};

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const TableHeader = styled(ColumnHeader) <{ $highlight?: boolean }>`
    color: ${({ theme }) => theme.color.set};
    background: ${({ theme }) => theme.color.black.deep};
    font-size: ${({ theme }) => theme.fontSize.xl5};
    margin: 20px 5px -10px;
    transition: filter 1s ease, transform 1s ease, background-color 1s ease;

    ${({ $highlight, theme }) => $highlight && `
        background-color: ${theme.color.highlight};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.xl4};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;

export const RowHeader = styled.th<{
    $color?: string,
    $highlight?: boolean
}>`
    border: 3px solid ${({ theme }) => theme.color.black.dark};
    padding: 10px;
    text-align: center;
    color: ${({ $color }) => $color || 'inherit'};
    transition: background-color 1s ease;
    overflow: hidden;

    ${({ $highlight, theme }) => $highlight && `
        background-color: ${theme.color.highlight};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        padding: 5px;
    }
`;

export const TableRow = styled.tr<{
    $index?: number,
    $highlight?: boolean
}>`
    font-family: 'AvQest', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.xl};
    position: relative;
    z-index: 0;
    background: ${({ $index, theme }) =>
        typeof $index === 'number' ? (
            $index % 2 === 0
                ? theme.color.black.medium
                : theme.color.black.light
        ) : theme.color.black.deep
    };
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    transition: background-color 1s ease;

    ${({ $highlight, theme }) => $highlight && `
        background-color: ${theme.color.highlight};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xxs};
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
    width: 35px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 25px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 18px;
    }
`;

export const StyledMediumImage = styled.img`
    width: 50px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        width: 23px;
    }
`;

export const StyledBigImage = styled.img`
    transform: scale(0.8);
    max-width: 100%;
    max-height: 100%;
    margin: -25px auto 0;
    padding: 10px;
    display: block;
    object-fit: contain;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
        transform: scale(0.7);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        transform: scale(0.65);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        transform: scale(0.6);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        transform: scale(0.55);
        max-height: 100px;
    }
`;

export const ImageTitle = styled.span`
    display: block;
    text-align: center;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

export const ImageSubtitle = styled.span`
    display: block;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xxs};
    }
`;

export const BottomLine = styled.div`
    color: ${({ theme }) => theme.color.grey.dark};
    border-top: 2px solid ${({ theme }) => theme.color.grey.light};
    margin: 5px 30px 0;
    padding-top: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin: 5px 10px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        border-top: 1px solid ${({ theme }) => theme.color.grey.light};
        margin: 5px 5px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        margin: 5px 0 0;
    }
`;

export const ValueBox = styled.span`
    color: ${({ theme }) => theme.color.value};
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
    color: ${({ theme }) => theme.color.grey.dark};;
    font-style: italic;
`;

export const CategoryText = styled.span`
    color: ${({ theme }) => theme.color.unique};
    margin-right: 5px;
`;

export const LadderOnlyItem = styled.span`
    color: ${({ theme }) => theme.color.darkGreen};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0 5px;
`;

export const RuneText = styled.span`
    color: ${({ theme }) => theme.color.rune};
`;

export const BonusListTitle = styled.h2`
    color: ${({ theme }) => theme.color.white.soft};

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding-top: 5px;
    }
`

export const BonusList = styled.ul`
    list-style-type: none;
    padding: 0;
    padding-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        padding-bottom: 15px;
    }
`

export const BonusListItem = styled.li`
    color: ${({ theme }) => theme.color.unique};
`

export const HighlightSearch = styled.span`
    color: ${({ theme }) => theme.color.black.dark};
    background-color: ${({ theme }) => theme.color.search};
    padding: 0 2px;
    border-radius: 3px;
`;