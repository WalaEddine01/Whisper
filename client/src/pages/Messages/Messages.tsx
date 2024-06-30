import React, { useEffect } from 'react';

import Chats from './Chats';
import { Container } from '../../styles/GlobalStyledElements';
import Details from './Details';
import Panel from './Panel';
import styled from 'styled-components';
import useAppStore from '../../Store';

const MessagesContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.isSmall ? '0' : '0 16px')};
  margin-top: ${(props) => (props.isSmall ? '-80px' : '0')};
`;

const Messages = () => {
  const isSmall = useAppStore((state) => state.isSmall);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const selectedDetails = useAppStore((state) => state.selectedDetails);

  return (
    <Container isSmall={isSmall}>
      <MessagesContainer>
        {isSmall && selectedChat ? '' : <Chats />}
        {(isSmall && !selectedChat) || (isSmall && selectedDetails) ? (
          ''
        ) : (
          <Panel />
        )}
        {selectedDetails && <Details />}
      </MessagesContainer>
    </Container>
  );
};

export default Messages;

