import React from 'react';
import styled from 'styled-components';

const Actions = styled.div`
  padding: 32px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  height: calc(100% - 224px);
  overflow: auto;
`;

const DetailsActions = () => {
  const Button = styled.button`
    background-color: #333333;
    color: var(--mainTextColor);
    padding: 16px;
    border-radius: 8px;
    display: block;
  `;

  return (
    <Actions>
      <Button>Block User</Button>
      <Button>Add User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
      <Button>Remove User</Button>
    </Actions>
  );
};

export default DetailsActions;

