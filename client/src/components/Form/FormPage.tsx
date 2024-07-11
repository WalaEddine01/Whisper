import { FC, useState } from 'react';
import {
  FormDivText,
  FormHeading,
  FormSecondaryText,
  NavLinkStyled,
  SVG,
  SignDiv,
} from './Form.styles';

import { ContainerMin } from '../../styles/GlobalStyledElements';
import { FormPageProps } from './Form.types';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Skeleton } from '@mui/material';

const FormPage: FC<FormPageProps> = ({
  svg,
  head,
  secondaryText,
  redirectText,
  redirectLink,
  type,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      <ContainerMin>
        <SignDiv>
          <SVG>{svg}</SVG>
          <FormDivText>
            <div>
              {isLoading && <Skeleton variant="rectangular" height={112} />}
              {!isLoading && <FormHeading>{head}!</FormHeading>}
              {!isLoading && (
                <FormSecondaryText>
                  {secondaryText}
                  <NavLinkStyled to={redirectLink}>
                    {redirectText}
                  </NavLinkStyled>
                </FormSecondaryText>
              )}
            </div>
            {type === 'signup' && (
              <SignupForm isLoading={isLoading} setIsLoading={setIsLoading} />
            )}
            {type === 'login' && (
              <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
            )}
          </FormDivText>
        </SignDiv>
      </ContainerMin>
    </div>
  );
};

export default FormPage;

