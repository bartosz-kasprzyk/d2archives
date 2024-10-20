import styled from "styled-components";

export const ButtonContainer = styled.a`
    position: fixed;
    bottom: ${({ $bottom }) => $bottom || 'auto'};
    right: -200px;
    background-color: ${({ $color }) => $color || 'inherit'};
    z-index: 9999;
    height: 62px;
    width: 260px;
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.color.white};
    font-family: "Cookie", cursive;
    font-size: 30px;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    filter: brightness(0.6);
    transition: transform 1s ease, filter 1s ease;
    cursor: pointer;

    &:hover {
        transform: translateX(${({ $translateX }) => $translateX || '0px'});
        filter: brightness(1.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        bottom: ${({ $bottomPhone }) => $bottomPhone || 'auto'};
        right: -110px;
        height: 42px;
        width: 150px;
        font-size: 15px;
        transform: translateX(${({ $translateXPhone }) => $translateXPhone || '0px'});
        text-decoration: underline;

        &:hover {
            filter: brightness(1.2);
            transform: translateX(${({ $translateXPhone }) => $translateXPhone || '0px'});
        }
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