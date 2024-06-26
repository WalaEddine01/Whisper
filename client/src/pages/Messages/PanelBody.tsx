import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Message = styled.li`
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  padding: 16px;
  border-radius: 8px;
  color: var(--mainTextColor);
  width: fit-content;
  border-bottom: 1px solid var(--border);
  margin-left: ${(props) => (props.me ? 'auto' : '')};
  margin-bottom: 16px;
  background-color: ${(props) =>
    props.me ? 'var(--secondaryColor)' : 'var(--mainColor)'};
`;

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

const PanelBody = () => {
  const selectedChat = useAppStore((state) => state.selectedChat);
  const selectedChatMessages = useAppStore(
    (state) => state.selectedChatMessages,
  );

  const user = useAppStore((state) => state.user);

  if (selectedChat) {
    return (
      <BodyDiv>
        <ul>
          {selectedChatMessages?.map((message) => {
            return (
              <Message me={message.userId === user.id}>{message.text}</Message>
            );
          })}
        </ul>
      </BodyDiv>
    );
  }

  return <P>Select A Chat to start</P>;
};

export default PanelBody;

