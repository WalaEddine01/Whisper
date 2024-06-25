import React, { useEffect } from 'react';

import styled from 'styled-components';
import useAppStore from '../../Store';

const ToggleDiv = styled.div`
  display: flex;
  background-color: red;
  justify-content: space-between;
`;

const Button = styled.button`
  flex-grow: 1;
  background-color: ${(props) => (props.active ? 'white' : 'orange')};
`;

const ChatsToggle = () => {
  const selectedChatsType = useAppStore((state) => state.selectedChatsType);

  const setSelectedChatsType = useAppStore(
    (state) => state.setSelectedChatsType,
  );

  function changeSelectedChats(type) {
    setSelectedChatsType(type);
  }

  return (
    <ToggleDiv>
      <Button
        onClick={() => changeSelectedChats('direct')}
        active={selectedChatsType === 'direct'}>
        Direct
      </Button>
      <Button
        onClick={() => changeSelectedChats('groups')}
        active={selectedChatsType === 'groups'}>
        Groups
      </Button>
    </ToggleDiv>
  );
};

export default ChatsToggle;

