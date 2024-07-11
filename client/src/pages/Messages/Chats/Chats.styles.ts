import {
  ButtonActiveProps,
  ChatRowProps,
  ChatsDivProps,
  ChatsItemsProps,
  UserDivProps,
} from './Chats.types';

import styled from 'styled-components';

export const ChatsDiv = styled.div<ChatsDivProps>`
  padding: 0;
  background-color: ${(props) => (props.isSmall ? 'transparent' : '#454243')};
  height: ${(props) =>
    props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
  margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
  flex-basis: 30%;
  flex-grow: 1;
  overflow: hidden;
`;

export const Toggles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: green;
`;

export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  background-color: green;
  border-radius: 50%;
`;

export const UserDiv = styled.div<UserDivProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => (props.isSmall ? 'transparent' : '#222222')};
  color: var(--mainTextColor);
  height: 64px;
  padding: 0 16px;
`;

export const Name = styled.h2`
  font-weight: 600;
`;

// export const NameDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
// `;

export const UserName = styled.span`
  font-size: 13px;
  color: var(--mainTextColorLight);
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  height: 40px;
  outline: none;
  color: var(--mainTextColor);
  background-color: var(--mainColor);
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.2rem var(--mainText);
  }
`;

export const ToggleDiv = styled.div`
  display: flex;
  background-color: red;
  justify-content: space-between;
  flex-basis: 100%;
`;

export const Button = styled.button<ButtonActiveProps>`
  flex-grow: 1;
  background-color: ${(props) =>
    props.active ? 'var(--secondaryColor)' : 'var(--mainColor)'};
  border: ${(props) =>
    props.active ? '1px solid #FFFFFF19' : '1px solid var(--secondaryColor)'};
  color: var(--mainTextColor);
  height: 40px;
  flex-basis: 50%;
`;

export const ManageDiv = styled.button`
  height: 40px;
  background-color: var(--secondaryColor);
  color: var(--mainTextColor);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ChatsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const P = styled.p`
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const ChatsItems = styled.div<ChatsItemsProps>`
  /* height: calc(100% - 184px); */
  height: ${(props) =>
    props.isSmall ? 'calc(100% - 304px)' : 'calc(100% - 224px)'};

  padding: 32px 0;
  color: var(--mainTextColor);
  overflow: auto;
`;

export const Image = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: green;
  flex-shrink: 0;
  overflow: hidden;
`;

export const ChatRow = styled.button<ChatRowProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => (props.even ? '#252525' : '#333333')};
  width: 80%;
  margin-left: 5%;
  border-radius: 16px;
  padding: 16px;
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  align-items: flex-start;
`;

