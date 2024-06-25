import { Container } from '../../styles/GlobalStyledElements';
import Links from './Links';
import Logo from './Logo';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  backdrop-filter: var(--blur-md); /* Blur effect */
  margin-bottom: 0;
  position: fixed;
  left: 0;
  top: 0;
  height: var(--navHeight);
  width: 100%;
  color: white;
`;

const NavFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  height: 100%;
`;

const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <Container>
          <NavFlex>
            <Logo />
            <Links />
          </NavFlex>
        </Container>
      </NavbarStyled>
    </>
  );
};

export default Navbar;

