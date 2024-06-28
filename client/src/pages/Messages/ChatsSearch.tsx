import React, { useState } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  height: 40px;
  outline: none;
  color: var(--mainTextColor);
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.2rem var(--mainText);
  }
`;

const ChatsSearch = ({ searchQuery, setSearchQuery }) => {
  function handleSerachChange(e) {
    console.log(setSearchQuery);
    setSearchQuery(e.target.value);
  }

  return (
    <Input
      placeholder="Search..."
      type="search"
      onChange={(e) => handleSerachChange(e)}
      value={searchQuery}
    />
  );
};

export default ChatsSearch;

