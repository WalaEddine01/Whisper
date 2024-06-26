import React from 'react';
import TypingLoader from '../../components/Loaders/TypingLoader';
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
  const isSmall = useAppStore((state) => state.isSmall);

  return (
    <MessageDiv isSmall={isSmall}>
      <Input type="text" placeholder="Write your message..." />
      <Typing>
        <TypingLoader />
        <TypingP>Amr is typing...</TypingP>
      </Typing>
    </MessageDiv>
  );
};

export default MessageInput;

