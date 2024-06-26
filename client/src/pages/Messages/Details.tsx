import DetailsActions from './DetailsActions';
import DetailsBody from './DetailsBody';
import DetailsHead from './DetailsHead';
import React from 'react';
import styled from 'styled-components';
import useAppStore from '../../Store';

// const ChatsDiv = styled.div`
//   padding: 0;
//   background-color: ${(props) => (props.isSmall ? 'transparent' : '#454243')};
//   height: ${(props) =>
//     props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
//   margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
//   border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
//   flex-grow: 1;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
// `;

const DetailsDiv = styled.div`
  background-color: #454243;
  height: ${(props) =>
    props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
  margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Details = () => {
  const isSmall = useAppStore((state) => state.isSmall);

  return (
    <DetailsDiv isSmall={isSmall}>
      <DetailsHead />
      <DetailsBody />
      <DetailsActions />
    </DetailsDiv>
  );
};

export default Details;

