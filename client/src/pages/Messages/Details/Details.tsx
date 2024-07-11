import DetailsActions from './DetailsActions';
import DetailsBody from './DetailsBody';
import { DetailsDiv } from './Details.styles';
import DetailsHead from './DetailsHead';
import useApplicationStore from '../../../Hooks/useApplicationStore';

const Details = () => {
  const { isSmall } = useApplicationStore();

  return (
    <DetailsDiv isSmall={isSmall}>
      <DetailsHead />
      <DetailsBody />
      <DetailsActions />
    </DetailsDiv>
  );
};

export default Details;

