import { Container } from '../../styles/GlobalStyledElements';
import Links from './Links';
import Logo from './Logo';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const NavbarStyled = styled.nav`
  backdrop-filter: ${(props) =>
    props.show ? '' : 'var(--blur-md)'}; /* Blur effect */
  margin-bottom: 0;
  position: ${(props) => (props.show && props.isSmall ? '' : 'fixed')};
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

const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  height: 100%;
  width: 100%;
`;

const Navbar = ({ show }) => {
  const isSmall = useAppStore((state) => state.isSmall);
  const location = useLocation();
  const shouldHideNavbar = location.pathname === '/messages';

  if (isSmall && shouldHideNavbar && !show) {
    return null;
  }

  if (!isSmall && show) {
    return null;
  }

  return (
    <>
      <NavbarStyled show={show} isSmall={isSmall}>
        <Container nav={true}>
          <NavFlex>
            <Logo />
            <Links show={show} />
          </NavFlex>
        </Container>
      </NavbarStyled>
    </>
  );
};

export default Navbar;

