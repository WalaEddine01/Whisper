import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

// Apply the animation to the styled span
export const UserTypingLoadingSpan = styled.span`
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

export const UserTypingLoadingDiv = styled.div`
  display: flex;
  gap: 2px;
  margin-right: 8px;
`;

export const PageLoaderFull = styled.div`
  width: 100%;
  height: calc(100vh - var(--navHeight));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  color: var(--mainTextColor);
  font-size: 24px;
`;

