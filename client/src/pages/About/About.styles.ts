import { AboutFlagProps, AboutPersonContainerProps } from './About.types';

import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 32px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AboutPersonContainer = styled.div<AboutPersonContainerProps>`
  align-self: ${(props) => (props.even ? 'flex-start' : 'flex-end')};
  background-color: var(--secondaryColor);
  width: fit-content;
  border-radius: 8000px;
  display: flex;
  padding: 16px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  max-width: 767px;
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
    border-radius: 16px;
    padding: 0;
    padding-top: 32px;
  }
`;

export const AboutImageDiv = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  @media (max-width: 767px) {
    transform: translateY(40px);
    z-index: 5;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border: 8px solid var(--secondaryColor);
  border-radius: 50%;
  position: relative;
  z-index: 3;

  @media (max-width: 767px) {
    border: 8px solid #33333388;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const AboutHeadDiv = styled.div`
  width: calc(100% + 232px);
  padding: 64px 64px 16px 232px;
  gap: 12px;
  /* opacity: 0.4; */

  background-color: var(--mainColor);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transform: translateX(-216px) translateY(-32px);
  z-index: 2;
  overflow: hidden;

  @media (max-width: 767px) {
    width: calc(100% + 32px);
    padding: 32px 48px;
    transform: translateX(-16px) translateY(0px);
    flex-wrap: wrap;
    background-color: #33333388;
  }
`;

export const AboutTextDiv = styled.div``;

export const AboutName = styled.p`
  font-weight: 800;
  font-size: 24px;
  color: var(--mainTextColor);
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AboutTitle = styled.p`
  color: var(--mainTextColorLight);
`;

export const AboutIconsDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const AboutDescription = styled.div`
  transform: translateY(-8px);
  padding: 0 40px 0 16px;
  color: var(--mainTextColor);
  background-color: var(--secondaryColor);
  z-index: 5;

  @media (max-width: 767px) {
    padding: 32px;
    transform: translateY(0);
  }
`;

export const AboutFlag = styled.img<AboutFlagProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.isSmall ? 1 : -1)};
  opacity: 0.2;
  object-fit: cover;
  object-position: center center;
  height: 150%;
  width: 100%;
`;

