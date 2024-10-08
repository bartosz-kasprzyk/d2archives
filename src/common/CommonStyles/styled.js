import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledText = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 17px;

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: 13px;
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.rune};
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
    }
`;

export const StyledKeyword = styled.span`
    color: ${({ $color }) => $color || 'inherit'};
    font-weight: 700;
`;