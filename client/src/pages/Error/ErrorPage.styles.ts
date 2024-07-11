import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - var(--navHeight));
  /* gap: 64px; */
  padding: 32px 0;
`;
export const ErrorText = styled.div`
  color: var(--mainTextColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 0.5;
`;

export const ErrorHead = styled.h1`
  font-size: 64px;
  color: var(--mainTextColor);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  word-break: break-all;
`;

export const ErrorSVGDiv = styled.div`
  flex-grow: 1;
`;
