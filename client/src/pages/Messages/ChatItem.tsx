import React from 'react';
import { socket } from '../../utils/socket';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useEffect } from 'react';

const Image = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: green;
  flex-shrink: 0;
  overflow: hidden;
`;

const ChatRow = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => (props.even ? '#252525' : '#333333')};
  width: 80%;
  margin-left: 5%;
  border-radius: 16px;
  padding: 16px;
`;

const Name = styled.h2`
  font-weight: 600;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  align-items: flex-start;
`;

const UserName = styled.span`
  font-size: 13px;
  color: var(--mainTextColorLight);
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
  const user = useAppStore((state) => state.user);

  useEffect(() => {
    console.log(state);
  }, [selectedChat]);

  function handleChatClick() {
    // console.log(setSelectedChat);
    // console.log(selectedChat);
    if (chat.mode === 'discover') {
      setSelectedChat(chat);
    } else {
      console.log('Joining chat room ------------', chat.id);
      socket.emit('joinChatRoom', chat.id);
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
    console.log(otherUser);
  }

  // console.log(chat);

  // useEffect(() => {
  //   console.log(selectedChat);
  //   console.log(chat);
  // }, [selectedChat]);

  const otherUser = chat.users.filter((user) => user.id !== userId)[0];

  console.log(otherUser);

  return (
    <ChatRow onClick={() => handleChatClick()} even={even}>
      {chat.type === 'one-to-one' && (
        <Image>
          <img
            src={`http://localhost:5000/${
              user.imgPath.startsWith('/')
                ? user.imgPath.slice(1)
                : user.imgPath.startsWith('.')
                ? user.imgPath.slice(2)
                : user.imgPath
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
      <div>{chat.lastMessage}</div>
    </ChatRow>
  );
};

export default ChatItem;

