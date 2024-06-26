import React, { useState } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  margin-top: 16px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  outline: none;
  color: var(--mainTextColor);
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.2rem var(--mainText);
  }
`;

const ChatsSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  function handleSerachChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <Input
      placeholder="Search..."
      type="search"
      onChange={(e) => handleSerachChange(e)}
      value={searchValue}
    />
  );
};

export default ChatsSearch;

