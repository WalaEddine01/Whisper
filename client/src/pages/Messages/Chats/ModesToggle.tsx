import { Button, ToggleDiv } from './Chats.styles';

import { selectedModeTypeValues } from './Chats.types';
import useApplicationStore from '../../../Hooks/useApplicationStore';

const ModesToggle = () => {
  const { setSelectedModeType, selectedModeType } = useApplicationStore();

  function changeSelectedMode(type: selectedModeTypeValues) {
    if (type === selectedModeType) return;
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

