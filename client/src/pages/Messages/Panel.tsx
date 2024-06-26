import MessageInput from './MessageInput';
import PanelBody from './PanelBody';
import PanelHead from './PanelHead';
import styled from 'styled-components';
import useAppStore from '../../Store';

const PanelDiv = styled.div`
  background-color: #454243;
  height: ${(props) =>
    props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
  margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
  flex-grow: 3;
  position: relative;
  overflow: auto;
`;

const Panel = () => {
  const selectedChat = useAppStore((state) => state.selectedChat);
  const isSmall = useAppStore((state) => state.isSmall);

  return (
    <PanelDiv isSmall={isSmall}>
      <PanelHead />
      <PanelBody />
      {selectedChat && <MessageInput />}
    </PanelDiv>
  );
};

export default Panel;

