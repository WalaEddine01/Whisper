import ChatItem from './ChatItem';
import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const ChatsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const P = styled.p`
  margin-bottom: 16px;
  margin-left: 16px;
`;

const ChatsItems = styled.div`
  height: calc(100% - 144px);
  padding: 32px 0;
  color: var(--mainTextColor);
  overflow: auto;
`;

const ChatsList = () => {
  const selectedTabType = useAppStore((state) => state.selectedTabType);
  const directedChats = useAppStore((state) => state.directChats);
  const groupChats = useAppStore((state) => state.groupChats);

  if (selectedTabType === 'direct') {
    return (
      <ChatsItems>
        <ChatsListStyled>
          {directedChats.map((chat, index) => {
            return (
              <ChatItem
                key={chat.id}
                chat={chat}
                even={index % 2}
                type={'direct'}
              />
            );
          })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }
  return (
    <ChatsItems>
      <ChatsListStyled>
        {groupChats.map((chat, index) => {
          return (
            <ChatItem
              key={chat.id}
              chat={chat}
              even={index % 2}
              type={'group'}
            />
          );
        })}
      </ChatsListStyled>
    </ChatsItems>
  );
};

export default ChatsList;

