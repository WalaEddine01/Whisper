import { HeadRow, Image, UserName } from './Details.styles';

import useApplicationStore from '../../../Hooks/useApplicationStore';

const DetailsBody = () => {
  const { selectedDetails, selectedChatType, userId } = useApplicationStore();

  const otherUser =
    selectedDetails &&
    selectedDetails.users.filter((user) => user.id !== userId)[0];

  return (
    <HeadRow>
      <Image>
        <img
          src={`http://localhost:5000/${
            otherUser
              ? otherUser.imgPath.startsWith('/')
                ? otherUser.imgPath.slice(1)
                : otherUser.imgPath.startsWith('.')
                ? otherUser.imgPath.slice(2)
                : otherUser.imgPath
              : ''
          }`}
        />
      </Image>
      <p>
        {(selectedDetails && selectedDetails.user?.name) ||
          (selectedDetails && selectedDetails.name)}
      </p>
      {selectedChatType === 'direct' ? (
        <UserName>@{otherUser && otherUser.username}</UserName>
      ) : (
        <UserName>{selectedDetails && selectedDetails.policy}</UserName>
      )}
    </HeadRow>
  );
};

export default DetailsBody;

