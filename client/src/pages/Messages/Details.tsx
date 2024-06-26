import DetailsBody from './DetailsBody';
import DetailsHead from './DetailsHead';
import React from 'react';
import styled from 'styled-components';

const DetailsDiv = styled.div`
  padding: 32px 32px;
  background-color: antiquewhite;
  min-height: calc(100vh - var(--navHeight) - 64px);
  margin-top: 32px;
  border-radius: 8px;
`;

const Details = () => {
  return (
    <DetailsDiv>
      <DetailsHead />
      <DetailsBody />
    </DetailsDiv>
  );
};

export default Details;

