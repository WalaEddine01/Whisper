import BackButton from '../../components/Buttons/BackButton';
import styled from 'styled-components';
import useAppStore from '../../Store';

const Head = styled.div`
  height: 64px;
  background-color: #222222;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--mainTextColor);
  padding: 16px;
`;

const DetailsHead = () => {
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);

  function handleBackClick() {
    setSelectedDetails(null);
  }

  return (
    <Head>
      <BackButton color={'var(--mainTextColor)'} onClick={handleBackClick} />
      <p>Details</p>
    </Head>
  );
};

export default DetailsHead;

