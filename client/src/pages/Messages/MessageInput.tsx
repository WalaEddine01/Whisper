import { useEffect, useState } from 'react';

import React from 'react';
import TypingLoader from '../../components/Loaders/TypingLoader';
import { arrayToHashMap } from '../../utils/utils';
import styled from 'styled-components';
import useAppStore from '../../Store';

const MessageDiv = styled.div`
  border-radius: 4px;
  outline: none;
  color: var(--mainTextColor);
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 112px;
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
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
  const selectedChatMode = useAppStore((state) => state.selectedChatMode);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const isSmall = useAppStore((state) => state.isSmall);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeout = 1000; // Timeout in ms to consider the user stopped typing
  const userId = useAppStore((state) => state.userId);
  const users = useAppStore((state) => state.users);
  const user = arrayToHashMap(users, 'id')[userId];
  const directChat = arrayToHashMap(user.directChats, 'id')[selectedChat.id];
  const setSelectedChatMessages = useAppStore(
    (state) => state.setSelectedChatMessages,
  );
  const addMessageToDirectChat = useAppStore(
    (state) => state.addMessageToDirectChat,
  );
  const addMessageToGroupChat = useAppStore(
    (state) => state.addMessageToGroupChat,
  );
  const selectedChatType = useAppStore((state) => state.selectedChatType);

  function handleSubmit(e) {
    e.preventDefault();
    const message = {
      userId: userId,
      id: Math.random().toString(),
      text: inputValue,
      time: Date.now(),
      type: 'text',
    };
    if (selectedChatType === 'direct') {
      addMessageToDirectChat(userId, selectedChat.id, message);
    } else if (selectedChatType === 'group') {
      addMessageToGroupChat(userId, selectedChat.id, message);
    }
  }

  useEffect(() => {
    if (inputValue) {
      setIsTyping(true);

      const timer = setTimeout(() => {
        setIsTyping(false);
      }, typingTimeout);

      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevents the default action (e.g., newline in textarea)
      console.log('aho');
      setInputValue('');
      setIsTyping(false);
      handleSubmit(event);
    }
  };

  if (selectedChatMode === 'discover') return null;

  return (
    <form action="" onSubmit={handleSubmit}>
      <MessageDiv isSmall={isSmall}>
        <Input
          type="text"
          placeholder="Write your message..."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
        {isTyping && (
          <Typing>
            <TypingLoader />
            <TypingP>Amr is typing...</TypingP>
          </Typing>
        )}
      </MessageDiv>
    </form>
  );
};

export default MessageInput;

