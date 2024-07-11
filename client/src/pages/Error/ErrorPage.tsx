import {
  ErrorContainer,
  ErrorHead,
  ErrorSVGDiv,
  ErrorText,
} from './ErrorPage.styles';

import { Container } from '../../styles/GlobalStyledElements';
import ErrorSVG from './ErrorSVG';

const ErrorPage = () => {
  return (
    <Container>
      <ErrorContainer>
        <ErrorText>
          <ErrorHead>Error 404: Page Not Found</ErrorHead>
          <p>
            It looks like you entered a wrong URL Please Navigate using our
            Navbar
          </p>
        </ErrorText>
        <ErrorSVGDiv>{ErrorSVG}</ErrorSVGDiv>
      </ErrorContainer>
    </Container>
  );
};

export default ErrorPage;

