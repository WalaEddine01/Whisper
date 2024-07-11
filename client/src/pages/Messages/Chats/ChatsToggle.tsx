import { Button, ToggleDiv } from './Chats.styles';

import { selectedTabTypeValues } from './Chats.types';
import useApplicationStore from '../../../Hooks/useApplicationStore';

const ChatsToggle = () => {
  const { selectedTabType, setManagementMode, setSelectedTabType } =
    useApplicationStore();

  function changeSelectedTab(type: selectedTabTypeValues) {
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
        onClick={() => changeSelectedTab('group')}
        active={selectedTabType === 'group'}>
        Groups
      </Button>
    </ToggleDiv>
  );
};

export default ChatsToggle;

