import { NavMenuProps, NavbarStyledProps, UlStyledProps } from './Navbar.types';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarStyled = styled.nav<NavbarStyledProps>`
  backdrop-filter: ${(props) =>
    props.show ? '' : 'var(--blur-md)'}; /* Blur effect */
  margin-bottom: 0;
  position: ${(props) => (props.show && props.isSmall ? 'relative' : 'fixed')};
  left: 0;
  top: 0;
  height: ${(props) =>
    props.show && props.isSmall ? 'var(--navHeight)' : 'var(--navHeight)'};
  /* background-color: ${(props) =>
    props.show && props.isSmall ? 'orange' : ''}; */
  width: 100%;
  color: white;
  z-index: 9;
  flex-shrink: 0;
`;

export const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  height: 100%;
  width: 100%;
`;

export const UlStyled = styled.ul<UlStyledProps>`
  display: ${(props) => (props.isSmall && !props.isOpen ? 'none' : 'flex')};
  list-style: none;
  gap: var(--space-md);
  background-color: ${(props) =>
    props.isSmall ? 'var(--secondaryColor)' : ''};
  padding: ${(props) => (props.isSmall ? '20px 30px' : '')};
  position: ${(props) => (props.isSmall ? 'absolute' : '')};
  left: ${(props) => (props.isSmall ? '0px' : '')};
  top: ${(props) =>
    props.isSmall
      ? props.show
        ? 'var(--navHeight)'
        : 'var(--navHeight)'
      : ''};
  flex-direction: ${(props) => (props.isSmall ? 'column' : '')};
  width: ${(props) => (props.isSmall ? '100%' : '')};
`;

export const StyledNavLink = styled(NavLink)<NavMenuProps>`
  text-decoration: none;
  color: var(--mainTextColor);
  padding: 8px 16px;

  &.active {
    font-weight: 600;
    border-left: ${(props) =>
      props.isSmall ? 'var(--navBorderSize) solid var(--mainColor)' : ''};
    border-bottom: ${(props) =>
      props.isSmall ? '' : 'var(--navBorderSize) solid var(--secondaryColor)'};
  }
`;

export const MenuButton = styled.button<NavMenuProps>`
  display: ${(props) => (props.isSmall ? 'flex' : 'none')};
`;

export const LogoText = styled.h1`
  font-size: 2em;
  text-align: center;
  color: var() --mainText;
  font-weight: bold;

  @media (max-width: 320px) {
    font-size: 12vw;
  }
`;

