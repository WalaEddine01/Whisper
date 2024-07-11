import { ChatsDiv, Toggles } from './Chats.styles';

import ChatsList from './ChatsList';
import ChatsSearch from './ChatsSearch';
import ChatsToggle from './ChatsToggle';
import Manage from './Manage';
import ModesToggle from './ModesToggle';
import Navbar from '../../../components/Navbar/Navbar';
import User from './User';
import useApplicationStore from '../../../Hooks/useApplicationStore';
import { useState } from 'react';

const Chats = () => {
  const { isSmall } = useApplicationStore();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ChatsDiv isSmall={isSmall}>
      <Navbar show={true} />
      <User />
      <ChatsSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Toggles>
        <ModesToggle />
        <ChatsToggle />
      </Toggles>
      <ChatsList searchQuery={searchQuery} />
      <Manage />
    </ChatsDiv>
  );
};

export default Chats;

