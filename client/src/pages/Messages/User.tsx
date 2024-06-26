import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  background-color: green;
  border-radius: 50%;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const User = () => {
  const user = useAppStore((state) => state.user);
  return (
    <UserDiv>
      <Image>
        <img src="" alt="" />
      </Image>
      <h2>{user.name}</h2>
    </UserDiv>
  );
};

export default User;

