import ChatItem from './ChatItem';
import React from 'react';
import useAppStore from '../../Store';

const ChatsList = () => {
  const selectedChatsType = useAppStore((state) => state.selectedChatsType);

  const directedChats = useAppStore((state) => state.directChats);
  const groupChats = useAppStore((state) => state.groupChats);

  if (selectedChatsType === 'direct') {
    return (
      <ul>
        {directedChats.map((chat) => {
          return <ChatItem key={chat.id} chat={chat} />;
        })}
      </ul>
    );
  }
  return (
    <ul>
      {groupChats.map((chat) => {
        return <ChatItem key={chat.id} chat={chat} />;
      })}
    </ul>
  );
};

export default ChatsList;

