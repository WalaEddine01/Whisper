import { ChangeEvent, FC } from 'react';

import { ChatsSearchProps } from './Chats.types';
import { Input } from './Chats.styles';

const ChatsSearch: FC<ChatsSearchProps> = ({ searchQuery, setSearchQuery }) => {
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  return (
    <Input
      placeholder="Search..."
      type="search"
      onChange={(e) => handleSearchChange(e)}
      value={searchQuery}
    />
  );
};

export default ChatsSearch;

