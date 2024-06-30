import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto; /* Center align the container */
  padding: ${(props) =>
    props.messages ? '0 0' : '0 1rem'}; /* Padding on the sides */
  max-width: 100%; /* Full width on smaller screens */
  height: 100%;
  display: flex;
  margin-top: ${(props) =>
    props.messages ? 'calc(0px - var(--navHeight))' : ''};

  /* @media (min-width: 640px) {
    max-width: 640px;
    height: 100%;
  } */

  @media (min-width: 768px) {
    max-width: 768px; /* Tailwind's md:max-w-md */
    padding: 0 1rem;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    max-width: 1024px; /* Tailwind's lg:max-w-lg */
  }

  @media (min-width: 1280px) {
    max-width: 1280px; /* Tailwind's xl:max-w-xl */
  }
`;

export const ContainerMin = styled.div`
  margin: 0 auto; /* Center align the container */
  padding: 0 1rem; /* Padding on the sides */
  max-width: 100%; /* Full width on smaller screens */
  min-height: calc(100vh - var(--navHeight));

  /* @media (min-width: 640px) {
    max-width: 640px;
  } */

  @media (min-width: 768px) {
    max-width: 768px; /* Tailwind's md:max-w-md */
  }

  @media (min-width: 1024px) {
    max-width: 1024px; /* Tailwind's lg:max-w-lg */
  }

  @media (min-width: 1280px) {
    max-width: 1280px; /* Tailwind's xl:max-w-xl */
  }
`;

