import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface UlStyledProps {
  isSmall: boolean; // Define isSmall as an optional boolean prop
  isOpen: boolean; // Define isOpen as an optional boolean prop
}

interface NavMenuProps {
  isSmall: boolean; // Define isSmall as an optional boolean prop
}

const UlStyled = styled.ul<UlStyledProps>`
  display: ${(props) => (props.isSmall && !props.isOpen ? 'none' : 'flex')};
  list-style: none;
  gap: var(--space-md);
  background-color: ${(props) =>
    props.isSmall ? 'var(--secondaryColor)' : ''};
  padding: ${(props) => (props.isSmall ? '20px 30px' : '')};
  position: ${(props) => (props.isSmall ? 'absolute' : '')};
  left: ${(props) => (props.isSmall ? '0px' : '')};
  top: ${(props) => (props.isSmall ? 'var(--navHeight)' : '')};
  flex-direction: ${(props) => (props.isSmall ? 'column' : '')};
  width: ${(props) => (props.isSmall ? '100%' : '')};
`;

const StyledNavLink = styled(NavLink)<NavMenuProps>`
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

const MenuButton = styled.button<NavMenuProps>`
  display: ${(props) => (props.isSmall ? 'flex' : 'none')};
`;

const Links = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <MenuButton isSmall={isSmall} onClick={handleClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
            fill="#171717"
          />
          <path
            d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
            fill="#171717"
          />
          <path
            d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
            fill="#171717"
          />
        </svg>
      </MenuButton>
      <UlStyled isSmall={isSmall} isOpen={isOpen}>
        <li>
          <StyledNavLink isSmall={isSmall} to={'/'}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink isSmall={isSmall} to={'/about'}>
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink isSmall={isSmall} to={'/signup'}>
            SignUp
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink isSmall={isSmall} to={'/login'}>
            Login
          </StyledNavLink>
        </li>
      </UlStyled>
    </>
  );
};

export default Links;

