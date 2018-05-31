import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box } from 'grid-styled';

const upAndDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  25% {
    opacity: 1;
    transform: translateY(-10px);
  }
  75% {
    opacity: 1;
    transform: translateY(-10px);
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
`;

const Spinner = styled.svg.attrs({
  className: 'spinner',
})`
  display: block;
  margin: 0 auto;
  fill: #000;
  & > circle {
    animation-name: ${upAndDown};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.05, 0.2, 0.35, 1);
    animation-iteration-count: infinite;

    &:nth-child(2) {
      animation-delay: 0.18s;
    }
    &:nth-child(3) {
      animation-delay: 0.36s;
    }
  }
`;

const LoadingSpinner = () => (
  <Box py={[2, 4]}>
    <Spinner width="60" height="20" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="15" r="4" />
      <circle cx="30" cy="15" r="4" />
      <circle cx="53" cy="15" r="4" />
    </Spinner>
  </Box>
);

export default LoadingSpinner;
