import { ChatRow, Image, Name, NameDiv, UserName } from './Chats.styles';

import { ChatItemProps } from './Chats.types';
import { FC } from 'react';
import { User } from '../../../slices/Slices.types';
import { socket } from '../../../utils/socket';
import useApplicationStore from '../../../Hooks/useApplicationStore';
import useRequest from '../../../Hooks/useRequest';

const ChatItem: FC<ChatItemProps> = ({ chat, even, type }) => {
  const {
    setSelectedChat,
    setSelectedDetails,
    setSelectedChatType,
    setSelectedChatMode,
    setManagementMode,
    setManagementAction,
    userId,
    updateSelectedChat,
    setUser,
  } = useApplicationStore();

  const { getUser } = useRequest();
  async function handleChatClick() {
    if (chat.mode === 'discover') {
      setSelectedChat(chat);
    } else {
      socket.emit('joinChatRoom', chat.id);
      const { data: userNewData } = await getUser({
        variables: { id: userId },
      });
      setUser(userNewData.user);
      updateSelectedChat(chat.id);
    }
    setSelectedDetails(null);
    setSelectedChatType(type);
    setSelectedChatMode(chat.mode || 'yours');
    setManagementMode(null);
    setManagementAction(null);
  }

  const otherUser = chat.users.filter((user: User) => user.id !== userId)[0];

  return (
    <ChatRow onClick={() => handleChatClick()} even={even}>
      {chat.type === 'one-to-one' && (
        <Image>
          <img
            src={`http://localhost:5000/${
              otherUser.imgPath.startsWith('/')
                ? otherUser.imgPath.slice(1)
                : otherUser.imgPath.startsWith('.')
                ? otherUser.imgPath.slice(2)
                : otherUser.imgPath
            }`}
          />
        </Image>
      )}
      {chat.type === 'one-to-one' && (
        <NameDiv>
          <Name>{otherUser.name}</Name>
          <UserName>@{otherUser.username}</UserName>
        </NameDiv>
      )}
      {chat.type === 'group' && (
        <NameDiv>
          <Name>{chat.name}</Name>
        </NameDiv>
      )}
    </ChatRow>
  );
};

export default ChatItem;

