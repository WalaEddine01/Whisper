import MessageInput from './MessageInput/MessageInput';
import PanelBody from './PanelBody';
import { PanelDiv } from './Panel.styles';
import PanelHead from './PanelHead';
import useApplicationStore from '../../../Hooks/useApplicationStore';
import { useState } from 'react';

const Panel = () => {
  const { isSmall, selectedChat } = useApplicationStore();
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <PanelDiv isSmall={isSmall}>
      <PanelHead />
      <PanelBody inputValue={inputValue} />
      {selectedChat && (
        <MessageInput inputValue={inputValue} setInputValue={setInputValue} />
      )}
    </PanelDiv>
  );
};

export default Panel;

