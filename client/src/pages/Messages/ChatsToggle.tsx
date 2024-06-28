import React, { useEffect } from 'react';

import styled from 'styled-components';
import useAppStore from '../../Store';

const ToggleDiv = styled.div`
  display: flex;
  background-color: red;
  justify-content: space-between;
  flex-basis: 100%;
`;

const Button = styled.button`
  flex-grow: 1;
  background-color: ${(props) =>
    props.active ? 'var(--secondaryColor)' : 'var(--mainColor)'};
  border: ${(props) =>
    props.active ? 'none' : '1px solid var(--secondaryColor)'};
  color: var(--mainTextColor);
  height: 40px;
  flex-basis: 50%;
`;

const ChatsToggle = () => {
  const selectedTabType = useAppStore((state) => state.selectedTabType);
  const setManagementMode = useAppStore((state) => state.setManagementMode);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);

  function changeSelectedTab(type) {
    if (type === selectedTabType) return;
    setSelectedTabType(type);
    setManagementMode(null);
  }

  return (
    <ToggleDiv>
      <Button
        onClick={() => changeSelectedTab('direct')}
        active={selectedTabType === 'direct'}>
        Direct
      </Button>
      <Button
        onClick={() => changeSelectedTab('groups')}
        active={selectedTabType === 'groups'}>
        Groups
      </Button>
    </ToggleDiv>
  );
};

export default ChatsToggle;

