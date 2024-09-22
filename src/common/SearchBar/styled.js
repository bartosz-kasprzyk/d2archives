import styled from "styled-components"

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3px;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 8px 0;
  border-bottom: 1px solid #885C025A;
  background: transparent;
  color: inherit;
`;

export const UnderlineGlow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #885C02;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;

  ${SearchInput}:focus + & {
    animation: glow 0.5s forwards;
  }

  @keyframes glow {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;