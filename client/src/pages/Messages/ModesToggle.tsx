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

const ModesToggle = () => {
  const selectedModeType = useAppStore((state) => state.selectedModeType);
  const setSelectedModeType = useAppStore((state) => state.setSelectedModeType);

  function changeSelectedMode(type) {
    if (type === selectedModeType) return;
    console.log(type);
    setSelectedModeType(type);
  }

  return (
    <ToggleDiv>
      <Button
        onClick={() => changeSelectedMode('yours')}
        active={selectedModeType === 'yours'}>
        Yours
      </Button>
      <Button
        onClick={() => changeSelectedMode('discover')}
        active={selectedModeType === 'discover'}>
        Discover
      </Button>
    </ToggleDiv>
  );
};

export default ModesToggle;

