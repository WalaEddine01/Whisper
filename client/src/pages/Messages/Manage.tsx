import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const ManageDiv = styled.button`
  height: 40px;
  background-color: var(--secondaryColor);
  color: var(--mainTextColor);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Manage = () => {
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setSelectedChatMessages = useAppStore(
    (state) => state.setSelectedChatMessages,
  );
  const selectedTabType = useAppStore((state) => state.selectedTabType);
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const setSelectedChatType = useAppStore((state) => state.setSelectedChatType);
  const setManagementMode = useAppStore((state) => state.setManagementMode);

  function handleManageClick() {
    setSelectedChat(null);
    setSelectedDetails(null);
    setSelectedChatType(null);
    console.log(selectedTabType);
    setManagementMode(selectedTabType);
  }

  return <ManageDiv onClick={handleManageClick}>Manage</ManageDiv>;
};

export default Manage;

