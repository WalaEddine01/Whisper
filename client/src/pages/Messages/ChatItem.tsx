import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useEffect } from 'react';

const Image = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: green;
  flex-shrink: 0;
`;

const ChatRow = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => (props.even ? '#252525' : '#333333')};
  width: 80%;
  margin-left: 5%;
  border-radius: 16px;
  padding: 16px;
`;

const ChatItem = ({ chat, even, type }) => {
  const state = useAppStore((state) => state);
  // console.log(chat);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setSelectedChatMessages = useAppStore(
    (state) => state.setSelectedChatMessages,
  );
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const setSelectedChatType = useAppStore((state) => state.setSelectedChatType);
  const setSelectedChatMode = useAppStore((state) => state.setSelectedChatMode);
  const setManagementMode = useAppStore((state) => state.setManagementMode);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const setManagementAction = useAppStore((state) => state.setManagementAction);
  const userId = useAppStore((state) => state.userId);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);
  const updateSelectedChat = useAppStore((state) => state.updateSelectedChat);

  useEffect(() => {
    console.log(state);
  }, [selectedChat]);

  function handleChatClick() {
    // console.log(setSelectedChat);
    // console.log(selectedChat);
    if (chat.mode === 'discover') {
      setSelectedChat(chat);
    } else {
      updateSelectedChat(chat.id);
    }
    // setSelectedChatMessages(chat.messages);
    // setSelectedDetails(null);
    setSelectedChatType(type);
    setSelectedChatMode(chat.mode || 'yours');
    // setManagementMode(null);
    // setManagementAction(null);

    // console.log(type);
    // console.log(chat);
  }

  // console.log(chat);

  // useEffect(() => {
  //   console.log(selectedChat);
  //   console.log(chat);
  // }, [selectedChat]);

  return (
    <ChatRow onClick={() => handleChatClick()} even={even}>
      <Image />
      {chat.type === 'one-to-one' && (
        <div>{chat.users.filter((user) => user.id !== userId)[0].username}</div>
      )}
      <div>{chat.lastMessage}</div>
    </ChatRow>
  );
};

export default ChatItem;

