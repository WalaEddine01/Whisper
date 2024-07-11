import { DetailsDivProps } from './Details.types';
import styled from 'styled-components';

export const DetailsDiv = styled.div<DetailsDivProps>`
  background-color: #454243;
  height: ${(props) =>
    props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
  margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
  flex-basis: 20%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Head = styled.div`
  height: 64px;
  background-color: #222222;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--mainTextColor);
  padding: 16px;
`;

export const Image = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: green;
  overflow: hidden;
`;

export const HeadRow = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #666666;
  color: var(--mainTextColor);
  height: 160px;
  justify-content: center;
`;

export const UserName = styled.p`
  font-size: 14px;
  margin-top: -8px;
  color: var(--mainTextColor);
  opacity: 0.7;
`;

export const Button = styled.button`
  background-color: #333333;
  color: var(--mainTextColor);
  padding: 16px;
  border-radius: 8px;
  display: block;
`;

export const Actions = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  height: calc(100% - 224px);
  overflow: auto;
`;

