import { GET_CHAT_ROOM, GET_CURRENT_USER } from '../../GraphQl/queries';
import { NetworkStatus, useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { CREATE_MESSAGE } from '../../GraphQl/mutations';
import React from 'react';
import TypingLoader from '../../components/Loaders/TypingLoader';
import { arrayToHashMap } from '../../utils/utils';
import { client } from '../../graphqlClient';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useLazyQuery } from '@apollo/client';

import { socket } from '../../utils/socket';

const MessageDiv = styled.div`
  /* border-radius: 4px; */
  outline: none;
  color: var(--mainTextColor);
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 112px;
  /* border-radius: ${(props) => (props.isSmall ? '0' : '8px')}; */
  background-color: var(--mainColor);
  flex-direction: column;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 16px 16px;
  background-color: var(--mainColor);
  outline: none;
  resize: none;

  &:focus {
    box-shadow: 0px 0px 10px 0px #00000011;
    transition: all 0.3s ease-in-out;
  }
`;

const TypingP = styled.p`
  /* padding: 4px; */
  color: var(--mainTextColor);
  font-size: 14px;
`;

const Typing = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  padding: 0px 16px;
  flex-grow: 0;
  height: 16px;
  padding: 16px 16px;
  border-top: 1px solid var(--secondaryColor);
`;

const MessageInput = () => {
  const state = useAppStore((state) => state);
  const selectedChatMode = useAppStore((state) => state.selectedChatMode);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const isSmall = useAppStore((state) => state.isSmall);
  const userId = useAppStore((state) => state.userId);
  const updateSelectedChat = useAppStore((state) => state.updateSelectedChat);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setUser = useAppStore((state) => state.setUser);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeout = 1000;

  const [mutateFunction] = useMutation(CREATE_MESSAGE);
  const [getSelectedRoom] = useLazyQuery(GET_CHAT_ROOM);
  const [getUser] = useLazyQuery(GET_CURRENT_USER);

  // useEffect(() => {
  //   if (selectedRoom) {
  //     console.log(selectedRoom.chatRoom);
  //     updateSelectedChat(selectedRoom.chatRoom);
  //     console.log(state);
  //   }
  // }, [selectedRoom, updateSelectedChat]);

  useEffect(() => {
    if (inputValue) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), typingTimeout);
      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { data: messageData } = await mutateFunction({
      variables: {
        senderId: userId,
        content: inputValue,
        chatRoomId: selectedChat.id,
      },
      refetchQueries: [
        {
          query: GET_CHAT_ROOM,
          variables: { id: selectedChat.id },
        },
      ],
      awaitRefetchQueries: true,
    });
    const { data: userData } = await getUser({
      variables: { id: userId },
    });
    console.log(userData.user);

    socket.emit('sendMessage', {
      chatRoomId: selectedChat.id,
      message: messageData.createMessage,
    });

    setUser(userData.user);
    const { data } = await getSelectedRoom({
      variables: { id: selectedChat.id },
    });
    console.log(data.chatRoom);
    setInputValue('');
    updateSelectedChat(data.chatRoom.id);
  }

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  if (selectedChatMode === 'discover') return null;
  
  const userdata2 = selectedChat.users.filter((user) => user.id !== userId)[0].username;
  return (
    <form onSubmit={handleSubmit}>
      <MessageDiv isSmall={isSmall}>
        <Input
          placeholder="Write your message..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        {isTyping && (
          <Typing>
            <TypingLoader />
            <TypingP> { userdata2 } is typing...</TypingP>
          </Typing>
        )}
      </MessageDiv>
    </form>
  );
};

export default MessageInput;

