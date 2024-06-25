import PanelHead from './PanelHead';
import styled from 'styled-components';

const PanelDiv = styled.div`
  padding: 32px 32px;
  background-color: antiquewhite;
  min-height: calc(100vh - var(--navHeight) - 64px);
  margin-top: 32px;
  border-radius: 8px;
`;

const Panel = () => {
  return (
    <PanelDiv>
      <PanelHead />
    </PanelDiv>
  );
};

export default Panel;

