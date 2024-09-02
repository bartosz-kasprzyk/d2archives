import styled from "styled-components"
import TopLeft from "../../images/ui/tt_tl_tiny_i_m_bb.webp"
import TopRight from "../../images/ui/tt_tr_tiny_i_m_bb.webp"
import BottomLeft from "../../images/ui/tt_bl_tiny_i_m_bb.webp"
import BottomRight from "../../images/ui/tt_br_tiny_i_m_bb.webp"
import TopLine from "../../images/ui/tt_border_t_tiny_i.webp"
import BottomLine from "../../images/ui/tt_border_b_tiny_i.webp"
import LeftLine from "../../images/ui/tt_border_l_tiny_i.webp"
import RightLine from "../../images/ui/tt_border_r_tiny_i.webp"
import Backdrop from "../../images/ui/bgtile_b.webp"

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

export const RunewordButton = styled.button`
    color: #df9c0c;
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
    padding: 2px;
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