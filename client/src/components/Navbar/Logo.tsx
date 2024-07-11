import { Link } from 'react-router-dom';
import { LogoText } from './Navbar.styles';

const Logo = () => {
  return (
    <LogoText>
      <Link to={'/'}>Whisper</Link>
    </LogoText>
  );
};

export default Logo;

