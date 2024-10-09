import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 70%;
  margin: 56px auto;
  animation: ${fadeIn} 0.2s ease-in-out;
`;