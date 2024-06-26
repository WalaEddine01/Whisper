import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

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
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setSelectedChatMessages = useAppStore(
    (state) => state.setSelectedChatMessages,
  );
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const setSelectedChatType = useAppStore((state) => state.setSelectedChatType);

  function handleChatClick() {
    setSelectedChat(chat);
    setSelectedChatMessages(chat.messages);
    setSelectedDetails(null);
    setSelectedChatType(type);
  }

  return (
    <ChatRow onClick={() => handleChatClick(chat)} even={even}>
      <Image />
      <div>{chat.name}</div>
      <div>{chat.lastMessage}</div>
    </ChatRow>
  );
};

export default ChatItem;

