import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  text-align: center;
  color: var() --mainText;
  font-weight: bold;
`;

const Logo = () => {
  return (
    <H1>
      <NavLink to={'/'}>Whisper</NavLink>
    </H1>
  );
};

export default Logo;

