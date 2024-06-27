import Message from './Message';
import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useEffect } from 'react';

const BodyDiv = styled.div`
  padding: 32px;
  overflow: auto;
  height: calc(100% - 64px - 112px);
`;

const P = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--mainTextColor);
`;

const AddButton = styled.button`
  background-color: #333333;
  color: var(--mainTextColor);
  padding: 16px;
  border-radius: 8px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  font-size: 36px;
  font-weight: 500;
`;

const DiscoverDiv = styled.div`
  height: calc(100% - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  color: var(--mainTextColor);
`;

const PanelBody = () => {
  const selectedChat = useAppStore((state) => state.selectedChat);
  const selectedChatMessages = useAppStore(
    (state) => state.selectedChatMessages,
  );
  const selectedChatType = useAppStore((state) => state.selectedChatType);
  const selectedChatMode = useAppStore((state) => state.selectedChatMode);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);
  const setSelectedModeType = useAppStore((state) => state.setSelectedModeType);
  const addToDirectChats = useAppStore((state) => state.addToDirectChats);
  const addToGroupChats = useAppStore((state) => state.addToGroupChats);
  const setSelectedChatMode = useAppStore((state) => state.setSelectedChatMode);
  const userId = useAppStore((state) => state.userId);
  const state = useAppStore((state) => state);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleAddDirect() {
    addToDirectChats(userId, {
      id: Math.random().toString(),
      user: selectedChat.user,
      messages: [],
    });

    setSelectedChatMode('yours');
    setSelectedModeType('yours');
    setSelectedTabType('direct');
  }

  function handleAddGroup() {
    addToGroupChats(userId, selectedChat);
    setSelectedChatMode('yours');
    setSelectedModeType('yours');
    setSelectedTabType('groups');
  }

  useEffect(() => {
    console.log(selectedChatMode);
  }, [selectedChatMode]);

  if (selectedChatMode === 'discover' && selectedChat) {
    return (
      <DiscoverDiv>
        {selectedChatType === 'direct' && (
          <AddButton onClick={handleAddDirect}>+</AddButton>
        )}
        {selectedChatType === 'group' && (
          <AddButton onClick={handleAddGroup}>+</AddButton>
        )}
        <p>Add To Your List</p>
      </DiscoverDiv>
    );
  }

  if (selectedChat) {
    return (
      <BodyDiv>
        <ul>
          {selectedChatMessages?.map((message) => {
            return (
              <Message
                message={message}
                key={message.id}
                selectedChatType={selectedChatType}
              />
            );
          })}
        </ul>
      </BodyDiv>
    );
  }

  return <P>Select A Chat to start</P>;
};

export default PanelBody;

