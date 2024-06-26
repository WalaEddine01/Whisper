import ChatsList from './ChatsList';
import ChatsSearch from './ChatsSearch';
import ChatsToggle from './ChatsToggle';
import React from 'react';
import User from './User';
import styled from 'styled-components';

const ChatsDiv = styled.div`
  padding: 32px 32px;
  background-color: antiquewhite;
  min-height: calc(100vh - var(--navHeight) - 64px);
  margin-top: 32px;
  border-radius: 8px;
`;

const Chats = () => {
  return (
    <ChatsDiv>
      <User />
      <ChatsSearch />
      <ChatsToggle />
      <ChatsList />
    </ChatsDiv>
  );
};

export default Chats;

