import { useEffect, useState } from 'react';

import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const MessageButton = styled.button`
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  padding: 16px;
  border-radius: 8px;
  color: var(--mainTextColor);
  width: fit-content;
  border-bottom: 1px solid var(--border);
  /* margin-left: ${(props) => (props.me ? 'auto' : '')}; */
  background-color: ${(props) =>
    props.me ? 'var(--secondaryColor)' : 'var(--mainColor)'};
  order: ${(props) => (props.me ? 1 : 2)};
`;

const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--mainTextColor);
  align-items: ${(props) => (props.me ? 'flex-end' : 'flex-start')};
  margin-bottom: 16px;
`;

const Time = styled.p`
  color: var(--mainTextColor);
`;

const Image = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--mainColor);
  order: ${(props) => (props.me ? 2 : 1)};
  flex-shrink: 0;
`;

const MessageRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`;

const User = styled.p`
  color: var(--mainTextColor);
`;

const Details = styled.div`
  margin-top: 4px;
  display: flex;
  gap: 16px;
  margin-left: ${(props) => (props.group ? (props.me ? '0' : '86px') : '16px')};
  margin-right: ${(props) =>
    props.group ? (props.me ? '16px' : '0') : '16px'};
`;

const Message = ({ message, selectedChatType }) => {
  console.log(selectedChatType);
  const userId = useAppStore((state) => state.userId);
  const [isDetailed, setIsDetailed] = useState(false);

  function toggleDetails() {
    setIsDetailed((oldDetailed) => !oldDetailed);
  }

  console.log(message);

  return (
    <li>
      <MessageDiv me={message.userId === userId}>
        <MessageRow>
          {selectedChatType === 'group' && (userId !== message.userId) && (
            <Image me={message.userId === userId} />
          )}
          <MessageButton
            me={message.userId === userId}
            onClick={toggleDetails}>
            {message.text}
          </MessageButton>
        </MessageRow>
        {isDetailed && (
          <Details
            me={message.userId === userId}
            group={selectedChatType === 'group'}>
            <Time me={message.userId === userId}>{message.time}</Time>
            {selectedChatType === 'group' && (userId !== message.userId) && (
                <>
                  <span>-</span>
                  <User>{message.userId}</User>
                </>,
              )}
          </Details>
        )}
      </MessageDiv>
    </li>
  );
};

export default Message;

