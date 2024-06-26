import Chats from './Chats';
import { Container } from '../../styles/GlobalStyledElements';
import Details from './Details';
import Panel from './Panel';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useEffect } from 'react';

const MessagesContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  padding: ${(props) => (props.isSmall ? '0' : '0 16px')};
  margin-top: ${(props) => (props.isSmall ? '-80px' : '0')};
`;

const Messages = () => {
  const selectedDetails = useAppStore((state) => state.selectedDetails);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const isSmall = useAppStore((state) => state.isSmall);

  return (
    <Container>
      <MessagesContainer isSmall={isSmall}>
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

