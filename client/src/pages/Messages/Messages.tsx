import Chats from './Chats/Chats';
import { Container } from '../../styles/GlobalStyledElements';
import Details from './Details/Details';
import { MessagesContainer } from './Messages.styles';
import Panel from './Panel/Panel';
import useApplicationStore from '../../Hooks/useApplicationStore';

const Messages = () => {
  const { isSmall, selectedChat, selectedDetails, managementMode } =
    useApplicationStore();

  return (
    <Container messages={true}>
      <MessagesContainer isSmall={isSmall}>
        {(isSmall && selectedChat) || (isSmall && managementMode) ? (
          ''
        ) : (
          <Chats />
        )}
        {(isSmall && !selectedChat && !managementMode) ||
        (isSmall && selectedDetails) ? (
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

