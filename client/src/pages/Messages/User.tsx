import React from 'react';
import { arrayToHashMap } from '../../utils/utils';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  background-color: green;
  border-radius: 50%;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => (props.isSmall ? 'tansparent' : '#222222')};
  color: var(--mainTextColor);
  height: 64px;
  padding: 0 16px;
`;

const Name = styled.h2`
  font-weight: 600;
`;

const User = () => {
  const userId = useAppStore((state) => state.userId);
  const isSmall = useAppStore((state) => state.isSmall);
  const users = useAppStore((state) => state.users);
  const user = arrayToHashMap(users, 'id')[userId];
  return (
    <UserDiv isSmall={isSmall}>
      <Image>
        <img src="" alt="" />
      </Image>
      <Name>{user.name}</Name>
    </UserDiv>
  );
};

export default User;

