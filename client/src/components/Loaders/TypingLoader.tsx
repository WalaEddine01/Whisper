import styled, { keyframes } from 'styled-components';

import React from 'react';

// Define the animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

// Apply the animation to the styled span
const LoadingSpan = styled.span`
  width: 12px;
  height: 12px;
  background-color: var(--secondaryColor);
  display: inline-block;
  border-radius: 50%;
  animation: ${bounce} 0.5s infinite ease-in-out;
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  gap: 2px;
  margin-right: 8px;
`;

const TypingLoader = () => {
  return (
    <LoadingDiv>
      <LoadingSpan></LoadingSpan>
      <LoadingSpan></LoadingSpan>
      <LoadingSpan></LoadingSpan>
    </LoadingDiv>
  );
};

export default TypingLoader;

