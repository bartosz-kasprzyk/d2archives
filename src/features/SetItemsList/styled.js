import styled from "styled-components";

export const StyledNavigation = styled.nav`
    column-count: 5;
    column-gap: 0;
    margin-bottom: 20px;
`;

export const StyledSetList = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;
    break-inside: avoid;
`;

export const StyledSetItemList = styled.ul`
    list-style-type: none;
    padding-left: 20px;

    li {
        position: relative;

    &::before {
        content: '◈';
        color: #135F11;
        font-size: 0.75em;
        position: absolute;
        left: -15px;
        top: 3px;
    }
  }
`;

export const SetButton = styled.button`
    background: none;
    border: none;
    color: #ca8120;
    text-align: left;
    cursor: pointer;
    transition: filter 0.1s ease, transform 0.1s ease;
    color: #1B9718;
    font-family: 'AvQest', sans-serif;
    font-size: 20px;
    padding: 0;
    margin: 0;
    margin-top: 15px;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(1.5);
        transform: scale(1.01);
    }

    &:active {
        filter: brightness(5);
        transform: scale(0.98);
    }
`;

export const SetItemButton = styled(SetButton)`
    font-size: 13px;
    margin-top: 0;
    opacity: 0.9;
`;
