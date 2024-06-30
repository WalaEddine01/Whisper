import { Container } from '../../styles/GlobalStyledElements';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAppStore from '../../Store';

const EGY = (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_50460)">
      <g clip-path="url(#clip1_1_50460)">
        <path
          d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 11H22V16H0V11Z"
          fill="#151515"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H22V5H0V0Z"
          fill="#F93939"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 7.46667L9.42857 6.4L8.38095 7.46667L9.42857 9.6L10.4762 8.53333H11.5238L12.5714 9.6L13.619 7.46667L12.5714 6.4L11 7.46667Z"
          fill="#D4AF2C"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_50460">
        <rect width="22" height="16" fill="white" />
      </clipPath>
      <clipPath id="clip1_1_50460">
        <rect width="22" height="16" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ALG = (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_50139)">
      <g clip-path="url(#clip1_1_50139)">
        <rect width="22" height="16" rx="2" fill="white" />
        <path
          d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H11V16H0V0Z"
          fill="#249F58"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.6735 10.9472C12.8124 12.0747 11.4651 12.8 9.95238 12.8C7.34905 12.8 5.2381 10.6507 5.2381 8C5.2381 5.34933 7.34905 3.2 9.95238 3.2C11.4651 3.2 12.8124 3.92533 13.6735 5.0528C13.0083 4.56 12.1712 4.26667 11.2619 4.26667C9.09334 4.26667 7.33334 5.93813 7.33334 8C7.33334 10.0619 9.09334 11.7333 11.2619 11.7333C12.1712 11.7333 13.0083 11.44 13.6735 10.9472Z"
          fill="#F93939"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.619 8L14.6666 7.46667L15.1904 6.4L15.7143 7.46667L16.7619 8L15.7143 8.53333L15.1904 9.6L14.6666 8.53333L13.619 8Z"
          fill="#F93939"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_50139">
        <rect width="22" height="16" fill="white" />
      </clipPath>
      <clipPath id="clip1_1_50139">
        <rect width="22" height="16" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const NIG = (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_50879)">
      <g clip-path="url(#clip1_1_50879)">
        <rect width="22" height="16" rx="2" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H7.33333V16H0V0ZM14.6667 0H22V16H14.6667V0Z"
          fill="#0A6A30"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_50879">
        <rect width="22" height="16" fill="white" />
      </clipPath>
      <clipPath id="clip1_1_50879">
        <rect width="22" height="16" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ETH = (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_50502)">
      <g clip-path="url(#clip1_1_50502)">
        <path
          d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
          fill="#FFDA2C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 10.6667H22V16H0V10.6667Z"
          fill="#F93939"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H22V5.33333H0V0Z"
          fill="#249F58"
        />
        <path
          d="M11 12.8C13.6036 12.8 15.7143 10.651 15.7143 8C15.7143 5.34903 13.6036 3.2 11 3.2C8.39636 3.2 6.28571 5.34903 6.28571 8C6.28571 10.651 8.39636 12.8 11 12.8Z"
          fill="#1A47B8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.998 9.33336L9.45801 10.1579L9.75135 8.41176L8.50677 7.17442L10.228 6.92162L10.998 5.33229L11.767 6.92162L13.4882 7.17442L12.2415 8.41176L12.537 10.1568"
          fill="#FFDA2C"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_50502">
        <rect width="22" height="16" fill="white" />
      </clipPath>
      <clipPath id="clip1_1_50502">
        <rect width="22" height="16" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const data = [
  {
    name: 'Amr Shoukry',
    title: 'Front-End Web Developer',
    image: '/images/1.jpg',
    flag: '/images/f1.jpg',
    description:
      'Software Engineer | ALX Software Engineering Student | Computer Science Student at Mansoura University, Faculty of Computer and Information Sciences',
    linkedIn: 'https://www.linkedin.com/in/amrshoukry/',
    github: 'https://github.com/AmrShoukry',
    email: 'mailto:shoukryworkamr1@gmail.com',
    symbol: EGY,
  },
  {
    name: 'Wala Eddine Boulebbina',
    title: 'Back-End Web Developer',
    image: '/images/2.jpg',
    flag: '/images/f2.jpg',
    description:
      'Future CS Engineer | ALX AICE Alumni | Aspiring ALX SE | Cybersecurity Enthusiast | Enhancing tech skills for impactful contribution',
    linkedIn: 'https://www.linkedin.com/in/wala-eddine-boulebbina/',
    github: 'https://github.com/WalaEddine01',
    email: 'doejohn1@gmail.com',
    symbol: ALG,
  },
  {
    name: 'Chidera Ikpeama',
    title: 'Product Designer',
    image: '/images/3.jpg',
    flag: '/images/f3.jpg',
    description:
      'As a Junior Product Designer specializing in UI/UX, I bring a passion for crafting intuitive and visually appealing digital experiences',
    linkedIn: 'https://www.linkedin.com/in/chidera-ikpeama-460286247/',
    github: 'https://github.com/Chy-baby',
    email: 'smithjane1@gmail.com',
    symbol: NIG,
  },
  {
    name: 'Lihon Gebre',
    title: 'Back-End Web Developer',
    image: '/images/4.jpg',
    flag: '/images/f4.jpg',
    description:
      'Software  Engineer Student @alx_ethiopia and @alx_africa,  backend dev | dev-ops |',
    linkedIn: 'https://www.linkedin.com/in/bobbrown/',
    github: 'https://github.com/gelftheshot',
    email: 'brownbob1@gmail.com',
    symbol: ETH,
  },
];

const AboutContainer = styled.div`
  padding: 32px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PersonContainer = styled.div`
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

const ImageDiv = styled.div`
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

const Img = styled.img`
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const HeadDiv = styled.div`
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

const TextDiv = styled.div``;

const Name = styled.p`
  font-weight: 800;
  font-size: 24px;
  color: var(--mainTextColor);
  word-break: break-all;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.p`
  color: var(--mainTextColorLight);
`;

const IconsDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Description = styled.div`
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

const Flag = styled.img`
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

const About = () => {
  const isSmall = useAppStore((state) => state.isSmall);
  return (
    <Container>
      <AboutContainer>
        {data.map((person, index) => {
          return (
            <PersonContainer even={index % 2 === 0}>
              <ImageDiv>
                <Img src={person.image} alt="" />
              </ImageDiv>
              {isSmall && <Flag isSmall={isSmall} src={person.flag} alt="" />}

              <TextContainer>
                <HeadDiv>
                  {!isSmall && <Flag src={person.flag} alt="" />}
                  <TextDiv>
                    <Name>
                      {person.name} {person.symbol}
                    </Name>
                    <Title>{person.title}</Title>
                  </TextDiv>
                  <IconsDiv>
                    <Link to={person.linkedIn} target="_blank">
                      <svg
                        width="39"
                        height="37"
                        viewBox="0 0 39 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.24865 36.8957V12.1622H1.03493V36.8957H9.24951H9.24865ZM5.14351 8.78584C8.0072 8.78584 9.79005 6.8866 9.79005 4.51309C9.73644 2.08549 8.0072 0.239258 5.19797 0.239258C2.3868 0.239258 0.550781 2.08549 0.550781 4.51287C0.550781 6.88639 2.33298 8.78563 5.08969 8.78563H5.14286L5.14351 8.78584ZM13.7951 36.8957H22.0082V23.0849C22.0082 22.3466 22.0618 21.6065 22.2787 21.0792C22.8722 19.6016 24.2237 18.0722 26.4932 18.0722C29.4646 18.0722 30.6539 20.3401 30.6539 23.6654V36.8957H38.8668V22.7143C38.8668 15.1175 34.8152 11.5823 29.4114 11.5823C24.981 11.5823 23.0352 14.0608 21.9541 15.7489H22.0088V12.1631H13.7955C13.9027 14.4833 13.7949 36.8965 13.7949 36.8965L13.7951 36.8957Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <Link to={person.github} target="_blank">
                      <svg
                        width="53"
                        height="51"
                        viewBox="0 0 53 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M26.6097 0.0478516C12.3913 0.0478516 0.875 11.5183 0.875 25.6802C0.875 37.0225 8.24156 46.6026 18.4711 49.9989C19.7578 50.2232 20.2404 49.4542 20.2404 48.7813C20.2404 48.1726 20.2082 46.154 20.2082 44.0073C13.7424 45.1928 12.0696 42.4373 11.5549 40.9955C11.2654 40.2586 10.0108 37.9837 8.91709 37.375C8.01638 36.8943 6.72964 35.7089 8.88492 35.6768C10.9115 35.6448 12.3591 37.5352 12.8416 38.3041C15.1578 42.181 18.8571 41.0916 20.3369 40.4188C20.562 38.7527 21.2376 37.6313 21.9775 36.9905C16.2515 36.3497 10.2682 34.1389 10.2682 24.3345C10.2682 21.547 11.2654 19.2401 12.906 17.4458C12.6486 16.805 11.7479 14.1777 13.1633 10.6532C13.1633 10.6532 15.3186 9.98039 20.2404 13.2806C22.2991 12.7038 24.4866 12.4155 26.674 12.4155C28.8615 12.4155 31.0489 12.7038 33.1077 13.2806C38.0295 9.94835 40.1848 10.6532 40.1848 10.6532C41.6002 14.1777 40.6994 16.805 40.4421 17.4458C42.0827 19.2401 43.0799 21.5149 43.0799 24.3345C43.0799 34.1709 37.0644 36.3497 31.3385 36.9905C32.2713 37.7915 33.0755 39.3294 33.0755 41.7325C33.0755 45.1608 33.0434 47.9163 33.0434 48.7813C33.0434 49.4542 33.5259 50.2552 34.8126 49.9989C44.9778 46.6026 52.3444 36.9905 52.3444 25.6802C52.3444 11.5183 40.8281 0.0478516 26.6097 0.0478516Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <Link to={person.email} target="_blank">
                      <svg
                        width="54"
                        height="41"
                        viewBox="0 0 54 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.9499 40.1846H12.4326V19.5837L0.314453 10.4951V36.5492C0.314453 38.5608 1.94435 40.1846 3.9499 40.1846Z"
                          fill="white"
                        />
                        <path
                          d="M41.5156 40.1846H49.9983C52.01 40.1846 53.6338 38.5547 53.6338 36.5492V10.4951L41.5156 19.5837"
                          fill="white"
                        />
                        <path
                          d="M41.5156 3.83033V19.5839L53.6338 10.4953V5.64806C53.6338 1.15222 48.5017 -1.41077 44.9087 1.28552"
                          fill="white"
                        />
                        <path
                          d="M12.4336 19.5837V3.83008L26.9754 14.7364L41.5172 3.83008V19.5837L26.9754 30.49"
                          fill="white"
                        />
                        <path
                          d="M0.314453 5.64806V10.4953L12.4326 19.5839V3.83033L9.03953 1.28552C5.44044 -1.41077 0.314453 1.15222 0.314453 5.64806Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </IconsDiv>
                </HeadDiv>
                <Description>{person.description}</Description>
              </TextContainer>
            </PersonContainer>
          );
        })}
      </AboutContainer>
    </Container>
  );
};

export default About;

