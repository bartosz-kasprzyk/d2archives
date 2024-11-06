import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledText = styled.p`
    color: ${({ theme }) => theme.color.white.soft};
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.rune};
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
    }
`;

export const StyledKeyword = styled.span<{ $color?: string }>`
    color: ${({ $color }) => $color || 'inherit'};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;