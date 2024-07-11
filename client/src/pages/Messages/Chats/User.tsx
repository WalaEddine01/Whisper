import { Name, NameDiv, UserDiv, UserImage, UserName } from './Chats.styles';

import useApplicationStore from '../../../Hooks/useApplicationStore';

const User = () => {
  const { isSmall, user } = useApplicationStore();

  return (
    <UserDiv isSmall={isSmall}>
      <UserImage>
        <img
          src={`http://localhost:5000/${
            user
              ? user.imgPath.startsWith('/')
                ? user.imgPath.slice(1)
                : user.imgPath.startsWith('.')
                ? user.imgPath.slice(2)
                : user.imgPath
              : ''
          }`}
          alt=""
        />
      </UserImage>
      <NameDiv>
        <Name>{user && user.name}</Name>
        <UserName>@{user && user.username}</UserName>
      </NameDiv>
    </UserDiv>
  );
};

export default User;

