import styled from 'styled-components';

export const MessageDiv = styled.div`
  outline: none;
  color: var(--mainTextColor);
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 112px;
  background-color: var(--mainColor);
  flex-direction: column;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 16px 16px;
  background-color: var(--mainColor);
  outline: none;
  resize: none;

  &:focus {
    box-shadow: 0px 0px 10px 0px #00000011;
    transition: all 0.3s ease-in-out;
  }
`;

export const TypingP = styled.p`
  color: var(--mainTextColor);
  font-size: 14px;
`;

export const Typing = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  padding: 0px 16px;
  flex-grow: 0;
  height: 16px;
  padding: 16px 16px;
  border-top: 1px solid var(--secondaryColor);
  gap: 4px;
`;

