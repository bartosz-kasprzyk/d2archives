import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledText = styled.p`
    color: #DDDDDD;
    font-size: 17px;
`;

export const StyledLink = styled(Link)`
    color: #ca8120;
    text-decoration: none;
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.5);
        text-decoration: underline;
    }
`;