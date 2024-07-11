import BackButton from '../../../components/Buttons/BackButton';
import { Head } from './Details.styles';
import useApplicationStore from '../../../Hooks/useApplicationStore';

const DetailsHead = () => {
  const { setSelectedDetails } = useApplicationStore();

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

