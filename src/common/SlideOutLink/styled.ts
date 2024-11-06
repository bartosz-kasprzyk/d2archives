import styled from "styled-components";

export const ButtonContainer = styled.a<{
    $bottom: string,
    $color?: string,
    $translateX?: string,
    $bottomPhone: string,
}>`
    position: fixed;
    bottom: ${({ $bottom }) => $bottom};
    right: -200px;
    background-color: ${({ $color }) => $color || 'inherit'};
    z-index: 9999;
    height: 62px;
    width: 260px;
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.color.white.soft};
    font-family: "Cookie", cursive;
    font-size: 30px;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    filter: brightness(0.6);
    transition: transform 1s ease, filter 1s ease;
    cursor: pointer;

    &:hover {
        transform: translateX(${({ $translateX }) => $translateX});
        filter: brightness(1.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        bottom: ${({ $bottomPhone }) => $bottomPhone};
        right: -110px;
        height: 42px;
        width: 150px;
        font-size: 15px;
        text-decoration: underline;
    }
`;

export const StyledIcon = styled.img`
    width: 45px;
    margin: -2px 7px 0 -11px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        width: 25px;
        margin: -2px 7px 0 -11px;
    }
`;