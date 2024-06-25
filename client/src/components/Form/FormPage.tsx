import { ContainerMin } from '../../styles/GlobalStyledElements';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const SignDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  min-height: calc(100vh - var(--navHeight));
`;

const Heading = styled.h2`
  font-size: 32px;
  color: var(--mainTextColor);
  font-weight: bold;
`;

const P = styled.p`
  font-size: 16px;
  color: var(--mainTextColor);
  margin-top: 4px;
`;

const DivText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  flex-grow: 1;
`;

const SVG = styled.div`
  flex-basis: 40%;

  @media (max-width: 768px) {
    display: none;
  }

  svg {
    width: 100%;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: var(--mainTextColorLight);
  margin-left: 8px;
`;

const FormPage = ({
  svg,
  head,
  secondaryText,
  redirectText,
  redirectLink,
  type,
}) => {
  return (
    <div>
      <ContainerMin>
        <SignDiv>
          <SVG>{svg}</SVG>
          <DivText>
            <div>
              <Heading>{head}!</Heading>
              <P>
                {secondaryText}
                <NavLinkStyled to={redirectLink}>{redirectText}</NavLinkStyled>
              </P>
            </div>
            {type === 'signup' && <SignupForm />}
            {type === 'login' && <LoginForm />}
          </DivText>
        </SignDiv>
      </ContainerMin>
    </div>
  );
};

export default FormPage;

