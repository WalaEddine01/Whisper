import {
  AboutContainer,
  AboutDescription,
  AboutFlag,
  AboutHeadDiv,
  AboutIconsDiv,
  AboutImageDiv,
  AboutImg,
  AboutName,
  AboutPersonContainer,
  AboutTextContainer,
  AboutTextDiv,
  AboutTitle,
} from './About.styles';

import { Container } from '../../styles/GlobalStyledElements';
import { Link } from 'react-router-dom';
import { data } from './About.data';
import useAppStore from '../../Store';

const About = () => {
  const isSmall = useAppStore((state) => state.isSmall);
  return (
    <Container>
      <AboutContainer>
        {data.map((person, index) => {
          return (
            <AboutPersonContainer even={index % 2 === 0}>
              <AboutImageDiv>
                <AboutImg src={person.image} alt="" />
              </AboutImageDiv>
              {isSmall && (
                <AboutFlag isSmall={isSmall} src={person.flag} alt="" />
              )}

              <AboutTextContainer>
                <AboutHeadDiv>
                  {!isSmall && <AboutFlag src={person.flag} alt="" />}
                  <AboutTextDiv>
                    <AboutName>
                      {person.name} {person.symbol}
                    </AboutName>
                    <AboutTitle>{person.title}</AboutTitle>
                  </AboutTextDiv>
                  <AboutIconsDiv>
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
                  </AboutIconsDiv>
                </AboutHeadDiv>
                <AboutDescription>{person.description}</AboutDescription>
              </AboutTextContainer>
            </AboutPersonContainer>
          );
        })}
      </AboutContainer>
    </Container>
  );
};

export default About;

