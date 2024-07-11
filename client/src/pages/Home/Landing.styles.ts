import styled from 'styled-components';

export const LandingDiv = styled.div`
  min-height: calc(100vh - var(--navHeight));
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
`;

export const LandingH2 = styled.h2`
  font-size: 32px;
  color: var(--mainTextColor);
  font-weight: bold;
  word-break: break-word;
`;

export const LandingP = styled.p`
  font-size: 16px;
  color: var(--mainTextColor);
  margin-top: 16px;
  margin-bottom: 48px;
`;

export const LandingButton = styled.button`
  background-color: var(--secondaryColor);
  color: var(--mainTextColor);
  padding: 12px 24px;
  border-radius: 8px;
`;

export const SVG = styled.div`
  flex-basis: 40%;

  @media (max-width: 768px) {
    display: none;
  }

  svg {
    width: 100%;
  }
`;

