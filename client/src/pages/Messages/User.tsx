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

const User = () => {
  const isSmall = useAppStore((state) => state.isSmall);
  const user = useAppStore((state) => state.user);

  return (
    <UserDiv isSmall={isSmall}>
      <Image>
        <img src="" alt="" />
      </Image>
      <Name>{user.username}</Name>
    </UserDiv>
  );
};

export default User;

