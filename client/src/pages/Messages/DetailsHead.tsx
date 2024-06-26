import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: green;
`;

const HeadRow = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const DetailsHead = () => {
  const selectedDetails = useAppStore((state) => state.selectedDetails);

  console.log(selectedDetails);

  if (selectedDetails) {
    return (
      <HeadRow>
        <Image />
        <p>{selectedDetails.name}</p>
        <p>{selectedDetails.username}</p>
      </HeadRow>
    );
  }

  return <div></div>;
};

export default DetailsHead;

