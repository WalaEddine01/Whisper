import {
  LandingButton,
  LandingDiv,
  LandingH2,
  LandingP,
  SVG,
} from './Landing.styles';

import { ContainerMin } from '../../styles/GlobalStyledElements';
import LandingSVG from './LandingSVG';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate('/messages');
  }

  return (
    <div>
      <ContainerMin>
        <LandingDiv>
          <div>
            <LandingH2>Secure Conversations, Seamless Connections</LandingH2>
            <LandingP>Experience real time messaging with whisper. </LandingP>
            <LandingButton onClick={handleGetStarted}>
              Get Started
            </LandingButton>
          </div>
          <SVG>{LandingSVG}</SVG>
        </LandingDiv>
      </ContainerMin>
    </div>
  );
};

export default Landing;

