import { MessagesContainerProps } from './Messages.types';
import styled from 'styled-components';

export const MessagesContainer = styled.div<MessagesContainerProps>`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  /* padding: ${(props) => (props.isSmall ? '0' : '0 16px')}; */
  margin-top: ${(props) => (props.isSmall ? '0px' : '0')};
`;

