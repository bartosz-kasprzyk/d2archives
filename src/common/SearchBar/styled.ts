import styled from "styled-components"
import { ReactComponent as Search } from "../../images/UI/Search.svg";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3px;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px solid #885C025A;
  transition: border-bottom 300ms ease;

  &:hover {
    border-bottom: 1px solid #C88C0E5A;
    }
`;

export const SearchIcon = styled(Search)`
  width: 18px;
  height: 18px;
  margin-bottom: -3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 15px;
    height: 15px;
    margin-bottom: -2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    width: 13px;
    height: 13px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background: transparent;
  color: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 150px;
    padding: 5px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    width: 130px;
    padding: 3px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const UnderlineGlow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.color.brown};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    height: 1px;
  }
`;