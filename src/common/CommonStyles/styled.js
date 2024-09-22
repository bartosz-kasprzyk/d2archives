import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledText = styled.p`
    color: #DDDDDD;
    font-size: 17px;
`;

export const StyledLink = styled(Link)`
    color: #ca8120;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
    }
`;

export const StyledKeyword = styled.span`
    color: ${({ $color }) => $color || 'inherit'};
    font-weight: 700;
`;