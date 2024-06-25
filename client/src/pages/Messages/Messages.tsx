import Chats from './Chats';
import { ContainerMin } from '../../styles/GlobalStyledElements';
import Details from './Details';
import Panel from './Panel';
import styled from 'styled-components';

const MessagesContainer = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const Messages = () => {
  return (
    <div>
      <ContainerMin>
        <MessagesContainer>
          <Chats />
          <Panel />
          <Details />
        </MessagesContainer>
      </ContainerMin>
    </div>
  );
};

export default Messages;

