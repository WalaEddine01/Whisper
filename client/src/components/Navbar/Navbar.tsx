import { NavFlex, NavbarStyled } from './Navbar.styles';

import { Container } from '../../styles/GlobalStyledElements';
import Links from './Links';
import Logo from './Logo';
import useApplicationStore from '../../Hooks/useApplicationStore';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const Navbar = ({ show = false }) => {
  const { isSmall } = useApplicationStore();
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
        <Container>
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

