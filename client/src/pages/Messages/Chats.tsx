import ChatsList from './ChatsList';
import ChatsSearch from './ChatsSearch';
import ChatsToggle from './ChatsToggle';
import Navbar from '../../components/Navbar/Navbar';
import User from './User';
import styled from 'styled-components';
import useAppStore from '../../Store';

const ChatsDiv = styled.div`
  padding: 0;
  background-color: ${(props) => (props.isSmall ? 'transparent' : '#454243')};
  height: ${(props) =>
    props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
  margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
  flex-grow: 1;
  overflow: hidden;
`;

const Chats = () => {
  const isSmall = useAppStore((state) => state.isSmall);

  return (
    <ChatsDiv isSmall={isSmall}>
      <Navbar show={true} />
      <User />
      <ChatsSearch />
      <ChatsToggle />
      <ChatsList />
    </ChatsDiv>
  );
};

export default Chats;

