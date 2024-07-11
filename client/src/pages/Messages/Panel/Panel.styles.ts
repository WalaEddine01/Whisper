import {
  DetailsProps,
  ImageProps,
  MessageButtonProps,
  MessageDivProps,
  PanelDivProps,
  TimeProps,
} from './Panel.types';

import styled from 'styled-components';

export const PanelDiv = styled.div<PanelDivProps>`
  background-color: #454243;
  height: ${(props) =>
    props.isSmall ? '100vh' : 'calc(100vh - var(--navHeight) - 64px)'};
  margin-top: ${(props) => (props.isSmall ? '0' : '32px')};
  border-radius: ${(props) => (props.isSmall ? '0' : '8px')};
  flex-basis: 50%;
  flex-grow: 1;
  position: relative;
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

export const UserRow = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const HeadRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  background-color: #222222;
  padding: 16px 16px;
  color: var(--mainTextColor);
  height: 64px;
`;

export const BackAndUser = styled.div`
  display: flex;
  gap: 12px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Type = styled.p`
  color: var(--mainTextColorLight);
  font-size: 12px;
  text-align: left;
`;

export const BodyDiv = styled.div`
  padding: 32px;
  overflow: auto;
  height: calc(100% - 64px - 112px);
`;

export const P = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--mainTextColor);
`;

export const AddButton = styled.button`
  background-color: #333333;
  color: var(--mainTextColor);
  padding: 16px;
  border-radius: 8px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  font-size: 36px;
  font-weight: 500;
`;

export const DiscoverDiv = styled.div`
  height: calc(100% - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  color: var(--mainTextColor);
`;

export const Button = styled.button`
  background-color: #333333;
  color: var(--mainTextColor);
  padding: 16px;
  border-radius: 8px;
`;

export const Actions = styled.div`
  padding: 16px;
  display: flex;
  gap: var(--space-md);
`;

export const ImageUserSuggestion = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  background-color: green;
  flex-shrink: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Submit = styled.input`
  height: 48px;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
  background-color: var(--secondaryColor);
  color: var(--mainTextColor);
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
  background-color: var(--inputColor);
  color: var(--mainTextColor);

  &:focus {
    box-shadow: 0px 0px 10px 0px #00000044;
  }

  &::placeholder {
    color: var(--mainTextColorLight); /* Placeholder text color */
    font-style: italic; /* Placeholder text style */
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
  background-color: var(--inputColor);
  color: var(--mainTextColor);
  &:focus {
    box-shadow: 0px 0px 10px 0px #00000044;
  }

  &::placeholder {
    color: var(--mainTextColorLight); /* Placeholder text color */
    font-style: italic; /* Placeholder text style */
  }
`;

export const SuggestionsList = styled.ul`
  background-color: var(--mainColor);
  max-height: 180px;
  overflow: auto;
`;

export const SuggestionsListButton = styled.button`
  width: 100%;
  border-bottom: 1px solid var(--inputColor);
  color: var(--mainTextColor);
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SelectedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const SelectedListItem = styled.li`
  width: fit-content;
  border-bottom: 1px solid var(--inputColor);
  color: var(--mainTextColor);
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: var(--inputColor);
  position: relative;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: -12px;
  top: -12px;
`;

export const Name = styled.h2`
  font-weight: 600;
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  align-items: flex-start;
`;

export const UserName = styled.span`
  font-size: 13px;
  color: var(--mainTextColorLight);
`;

export const MessageButton = styled.button<MessageButtonProps>`
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  padding: 16px;
  border-radius: 8px;
  color: var(--mainTextColor);
  width: fit-content;
  border-bottom: 1px solid var(--border);
  background-color: ${(props) =>
    props.me ? 'var(--secondaryColor)' : 'var(--mainColor)'};
  order: ${(props) => (props.me ? 1 : 2)};
`;

export const MessageDiv = styled.div<MessageDivProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--mainTextColor);
  align-items: ${(props) => (props.me ? 'flex-end' : 'flex-start')};
  margin-bottom: 16px;
  word-break: break-all;
`;

export const Time = styled.p<TimeProps>`
  color: var(--mainTextColor);
  opacity: 0.7;
  font-size: 14px;
`;

export const MessageImage = styled.div<ImageProps>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--mainColor);
  order: ${(props) => (props.me ? 2 : 1)};
  flex-shrink: 0;
`;

export const MessageRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`;

export const User = styled.p`
  color: var(--mainTextColor);
  opacity: 0.7;
  font-size: 14px;
`;

export const Details = styled.div<DetailsProps>`
  margin-top: 4px;
  display: flex;
  gap: 8px;
  margin-left: ${(props) => (props.group ? (props.me ? '0' : '86px') : '16px')};
  margin-right: ${(props) =>
    props.group ? (props.me ? '16px' : '0') : '16px'};
`;

