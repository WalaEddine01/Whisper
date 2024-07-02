import React, { useEffect } from 'react';

import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: green;
  overflow: hidden;
`;

const HeadRow = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #666666;
  color: var(--mainTextColor);
  height: 160px;
  justify-content: center;
`;

const UserName = styled.p`
  font-size: 14px;
  margin-top: -8px;
  color: var(--mainTextColor);
  opacity: 0.7;
`;

const DetailsBody = () => {
  const selectedDetails = useAppStore((state) => state.selectedDetails);
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const selectedChatType = useAppStore((state) => state.selectedChatType);
  const userId = useAppStore((state) => state.userId);

  const otherUser = selectedDetails.users.filter(
    (user) => user.id !== userId,
  )[0];

  return (
    <HeadRow>
      <Image>
        <img
          src={`http://localhost:5000/${
            otherUser.imgPath.startsWith('/')
              ? otherUser.imgPath.slice(1)
              : otherUser.imgPath.startsWith('.')
              ? otherUser.imgPath.slice(2)
              : otherUser.imgPath
          }`}
        />
      </Image>
      <p>{selectedDetails.user?.name || selectedDetails.name}</p>
      {selectedChatType === 'direct' ? (
        <UserName>@{otherUser.username}</UserName>
      ) : (
        <UserName>{selectedDetails.policy}</UserName>
      )}
    </HeadRow>
  );
};

export default DetailsBody;

