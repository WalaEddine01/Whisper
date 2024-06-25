import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: green;
`;

const ChatRow = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChatItem = ({ chat }) => {
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setSelectedChatMessages = useAppStore(
    (state) => state.setSelectedChatMessages,
  );

  function handleChatClick() {
    setSelectedChat(chat);
    setSelectedChatMessages(chat.messages);
  }

  return (
    <ChatRow onClick={() => handleChatClick(chat)}>
      <Image />
      <div>{chat.name}</div>
      <div>{chat.lastMessage}</div>
    </ChatRow>
  );
};

export default ChatItem;

