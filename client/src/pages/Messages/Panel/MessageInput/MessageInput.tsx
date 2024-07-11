import {
  ChangeEvent,
  FC,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import { Input, MessageDiv, Typing, TypingP } from './MessageInput.styles';

import { GET_CHAT_ROOM } from '../../../../GraphQl/queries';
import { MessageInputProps } from './MessageInput.types';
import TypingLoader from '../../../../components/Loaders/TypingLoader';
import { socket } from '../../../../utils/socket';
import useApplicationStore from '../../../../Hooks/useApplicationStore';
import useRequest from '../../../../Hooks/useRequest';

const MessageInput: FC<MessageInputProps> = ({ inputValue, setInputValue }) => {
  const {
    selectedChatMode,
    selectedChat,
    userId,
    updateSelectedChat,
    user,
    setUser,
  } = useApplicationStore();

  const { getUser, getSelectedRoom, createMessage } = useRequest();
  const [, setIsTyping] = useState<boolean>(false);
  const typingTimeout = 1000;
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());

  useEffect(() => {
    socket.on('userTyping', (username) => {
      setTypingUsers((prevUsers) => new Set(prevUsers).add(username));
    });

    socket.on('userStoppedTyping', (username) => {
      setTypingUsers((prevUsers) => {
        const newUsers = new Set(prevUsers);
        newUsers.delete(username);
        return newUsers;
      });
    });

    return () => {
      socket.off('userTyping');
      socket.off('userStoppedTyping');
    };
  }, []);

  useEffect(() => {
    if (inputValue) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        socket.emit('stoppedTyping', selectedChat?.id, user?.username);
      }, typingTimeout);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      socket.emit('stoppedTyping', selectedChat?.id, user?.username);
    }
  }, [inputValue, user, selectedChat]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { data: messageData } = await createMessage({
      variables: {
        senderId: userId,
        content: inputValue,
        chatRoomId: selectedChat?.id,
      },
      refetchQueries: [
        {
          query: GET_CHAT_ROOM,
          variables: { id: selectedChat?.id },
        },
      ],
      awaitRefetchQueries: true,
    });

    const { data: userData } = await getUser({
      variables: { id: userId },
    });

    socket.emit('sendMessage', {
      chatRoomId: selectedChat?.id,
      message: messageData.createMessage,
    });

    setUser(userData.user);
    const { data: newD } = await getSelectedRoom({
      variables: { id: selectedChat?.id },
    });
    setInputValue('');
    updateSelectedChat(newD.chatRoom.id);
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    socket.emit('typing', selectedChat?.id, user?.username);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  if (selectedChatMode === 'discover') return null;

  const typingUsersArray = Array.from(typingUsers);

  return (
    <form onSubmit={handleSubmit}>
      <MessageDiv>
        <Input
          placeholder="Write your message..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        {typingUsersArray && typingUsersArray.length > 0 && (
          <Typing>
            <TypingLoader />
            {typingUsersArray.length === 1 && (
              <TypingP>@{typingUsersArray[0]} is typing...</TypingP>
            )}
            {typingUsersArray.length > 1 && (
              <TypingP>
                {typingUsersArray.map((user, index) => (
                  <span key={index}>
                    @{user}
                    {index < typingUsersArray.length - 1 && ', '}
                  </span>
                ))}
                <span> are typing...</span>
              </TypingP>
            )}
          </Typing>
        )}
      </MessageDiv>
    </form>
  );
};

export default MessageInput;

