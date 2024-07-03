import styled from 'styled-components';
import useAppStore from '../../Store';

const Image = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  background-color: green;
  border-radius: 50%;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => (props.isSmall ? 'tansparent' : '#222222')};
  color: var(--mainTextColor);
  height: 64px;
  padding: 0 16px;
`;

const Name = styled.h2`
  font-weight: 600;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const UserName = styled.span`
  font-size: 13px;
  color: var(--mainTextColorLight);
`;

const User = () => {
  const isSmall = useAppStore((state) => state.isSmall);
  const user = useAppStore((state) => state.user);

  return (
    <UserDiv isSmall={isSmall}>
      <Image>
        <img
          src={`http://localhost:5000/${
            user.imgPath.startsWith('/')
              ? user.imgPath.slice(1)
              : user.imgPath.startsWith('.')
              ? user.imgPath.slice(2)
              : user.imgPath
          }`}
          alt=""
        />
      </Image>
      <NameDiv>
        <Name>{user.name}</Name>
        <UserName>@{user.username}</UserName>
      </NameDiv>
    </UserDiv>
  );
};

export default User;

