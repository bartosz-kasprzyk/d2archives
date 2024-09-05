import styled from "styled-components"
import TopLeft from "../../images/ValueBox/box_top_left.webp"
import TopRight from "../../images/ValueBox/box_top_right.webp"
import BottomLeft from "../../images/ValueBox/box_bottom_left.webp"
import BottomRight from "../../images/ValueBox/box_bottom_right.webp"
import TopLine from "../../images/ValueBox/box_top.webp"
import BottomLine from "../../images/ValueBox/box_bottom.webp"
import LeftLine from "../../images/ValueBox/box_left.webp"
import RightLine from "../../images/ValueBox/box_right.webp"
import Backdrop from "../../images/ValueBox/box_background.webp"

export const StyledText = styled.p`
    color: ${({ theme }) => theme.color.white};
`

export const StyledNavigation = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(19, 20px);
    grid-auto-flow: column;
    grid-column-gap: 50px;
    padding: 0;
    margin-bottom: 40px;
    font-family: 'AvQest', sans-serif;
`

export const StyledList = styled.ul`
    list-style-type: none;
    padding-left: 20px;

    li {
        position: relative;

    &::before {
        content: '◈';
        color: #5D4A32;
        font-size: 0.75em;
        position: absolute;
        left: -15px;
        top: 1.1px;
    }
  }
`

export const RunewordButton = styled.button`
    color: #86735a;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    
    &:focus {
        outline: none;
    }
`

export const ValueBox = styled.span`
    color: #8470ff;
    padding: 3px 8px 1px;
    background: 
        url(${TopLeft}) top left no-repeat,
        url(${TopRight}) top right no-repeat,
        url(${BottomLeft}) bottom left no-repeat,
        url(${BottomRight}) bottom right no-repeat,
        url(${TopLine}) top repeat-x,
        url(${BottomLine}) bottom repeat-x,
        url(${LeftLine}) left repeat-y,
        url(${RightLine}) right repeat-y,
        url(${Backdrop}) center center repeat;
`;