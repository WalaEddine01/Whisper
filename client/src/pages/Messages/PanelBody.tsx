import React, { useState } from 'react';

import Message from './Message';
import { arrayToHashMap } from '../../utils/utils';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useEffect } from 'react';

const BodyDiv = styled.div`
  padding: 32px;
  overflow: auto;
  height: calc(100% - 64px - 112px);
`;

const P = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--mainTextColor);
`;

const AddButton = styled.button`
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

const DiscoverDiv = styled.div`
  height: calc(100% - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  color: var(--mainTextColor);
`;

const Button = styled.button`
  background-color: #333333;
  color: var(--mainTextColor);
  padding: 16px;
  border-radius: 8px;
`;

const Actions = styled.div`
  padding: 16px;
  display: flex;
  gap: var(--space-md);
`;

const Image = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  background-color: green;
  flex-shrink: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Submit = styled.input`
  height: 48px;
  border-radius: 4px;
  padding: 12px 24px;
  outline: none;
  background-color: var(--secondaryColor);
  color: var(--mainTextColor);
`;

const Input = styled.input`
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

const Select = styled.select`
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

const SuggestionsList = styled.ul`
  background-color: var(--mainColor);
  max-height: 160px;
  overflow: auto;
`;

const SuggestionsListButton = styled.button`
  width: 100%;
  border-bottom: 1px solid var(--inputColor);
  color: var(--mainTextColor);
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const SelectedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SelectedListItem = styled.li`
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

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: -12px;
  top: -12px;
`;

const NameDiv = styled.div`
  display: flex;
  gap: 0px;
  align-items: center;
  flex-direction: column;
`;

const UserName = styled.p`
  font-size: 12px;
  color: var(--mainTextColorLight);
`;

const PanelBody = () => {
  const selectedChat = useAppStore((state) => state.selectedChat);
  const selectedChatMessages = useAppStore(
    (state) => state.selectedChatMessages,
  );
  const selectedChatType = useAppStore((state) => state.selectedChatType);
  const selectedChatMode = useAppStore((state) => state.selectedChatMode);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);
  const setSelectedModeType = useAppStore((state) => state.setSelectedModeType);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setSelectedChatMessages = useAppStore(
    (state) => state.setSelectedChatMessages,
  );
  const addToDirectChats = useAppStore((state) => state.addToDirectChats);
  const addToGroupChats = useAppStore((state) => state.addToGroupChats);
  const setSelectedChatMode = useAppStore((state) => state.setSelectedChatMode);
  const userId = useAppStore((state) => state.userId);
  const state = useAppStore((state) => state);
  const managementMode = useAppStore((state) => state.managementMode);
  const setManagementAction = useAppStore((state) => state.setManagementAction);
  const managementAction = useAppStore((state) => state.managementAction);
  const createNewGroup = useAppStore((state) => state.createNewGroup);
  const users = useAppStore((state) => state.users);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [selectedGroupToAdd, setSelectedGroupToAdd] = useState(
    arrayToHashMap(users, 'id')[userId].groupChats[0],
  );
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleChangeUserSearchQuery(event) {
    setUserSearchQuery(event.target.value);
  }

  function handleAddDirect() {
    const newChat = {
      id: Math.random().toString(),
      user: selectedChat.user,
      messages: [],
    };

    addToDirectChats(userId, newChat);

    setSelectedChatMode('yours');
    setSelectedModeType('yours');
    setSelectedTabType('direct');
    setSelectedChat(newChat);
    setSelectedChatMessages([]);
  }

  function handleAddGroup() {
    const newGroup = {
      name: selectedChat.name,
      id: selectedChat.id,
      users: selectedChat.users,
      messages: selectedChat.messages,
    };

    addToGroupChats(userId, newGroup);

    setSelectedChatMode('yours');
    setSelectedModeType('yours');
    setSelectedTabType('groups');
    setSelectedChat(newGroup);
    setSelectedChatMessages([]);
  }

  useEffect(() => {
    console.log(selectedChatMode);
  }, [selectedChatMode]);

  function handleAddGroupButtonClick() {
    setManagementAction('addGroup');
  }

  function handleAddUsersButtonClick() {
    setManagementAction('addToGroup');
  }

  function handleCreateGroupSubmit(e) {
    e.preventDefault();
    const newGroup = {
      id: Math.random().toString(),
      name: e.target.name.value,
      policy: e.target.policy.value,
      users: [{ id: userId, name: arrayToHashMap(users, 'id')[userId].name }],
      messages: [],
    };
    console.log(newGroup);
    createNewGroup(userId, newGroup);
  }

  function handleAddUserSubmit(e) {
    e.preventDefault();
    // const user = arrayToHashMap(users, 'id')[e.target.user.value];
    // const newChat = {
    //   id: Math.random().toString(),
    //   user,
    //   messages: [],
    // };
    // addToDirectChats(userId, newChat);
  }

  function handleChangeGroupSelection(e) {
    setSelectedGroupToAdd(e.target.group.value);
  }

  function handleAddToSelected(user) {
    setSelectedUsers([...selectedUsers, user]);
  }

  function handleRemoveFromSelected(id) {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== id));
  }

  if (managementAction) {
    if (managementAction === 'addGroup') {
      return (
        <Form action="" onSubmit={(e) => handleCreateGroupSubmit(e)}>
          <Input type="text" name="name" placeholder="Name" />
          <Select name="policy" id="">
            <option value="public">public</option>
            <option value="private">private</option>
          </Select>
          <Image>
            <img src="" alt="" />
          </Image>
          <Submit type="submit" />
        </Form>
      );
    }
    if (managementAction === 'addToGroup') {
      const userGroupChats = arrayToHashMap(users, 'id')[userId].groupChats;
      const groupsMap = arrayToHashMap(userGroupChats, 'id');

      const groupUserIds = selectedGroupToAdd?.users.map((user) => user.id);
      const outGroupUsers = users.filter(
        (user) => !groupUserIds.includes(user.id),
      );

      const filteredUsers = outGroupUsers.filter((outGroupUser) => {
        const lowercasedQuery = userSearchQuery?.toLowerCase() || '';
        console.log(outGroupUser);
        console.log(selectedUsers);
        return (
          (outGroupUser.name.toLowerCase().includes(lowercasedQuery) ||
            outGroupUser.username.toLowerCase().includes(lowercasedQuery)) &&
          !selectedUsers.some(
            (selectedUser) => selectedUser.id === outGroupUser.id,
          )
        );
      });

      return (
        <Form action="" onSubmit={(e) => handleAddUserSubmit(e)}>
          <Select
            name="group"
            id=""
            onChange={(e) => handleChangeGroupSelection(e)}>
            {userGroupChats.map((group) => {
              return <option value={group.id}>{group.name}</option>;
            })}
          </Select>
          <div>
            <Input
              type="text"
              name="user"
              onChange={handleChangeUserSearchQuery}
              value={userSearchQuery}
              placeholder={'User Name'}
            />
            <SuggestionsList>
              {filteredUsers.map((user) => {
                return (
                  <li>
                    <SuggestionsListButton
                      onClick={() => handleAddToSelected(user)}>
                      <Image>
                        <img src="" alt="" />
                      </Image>
                      <NameDiv>
                        <p>{user.name}</p>
                        <UserName>@{user.username}</UserName>
                      </NameDiv>
                    </SuggestionsListButton>
                  </li>
                );
              })}
            </SuggestionsList>
          </div>
          <SelectedList>
            {selectedUsers.map((user) => {
              return (
                <SelectedListItem>
                  <CloseButton
                    onClick={() => handleRemoveFromSelected(user.id)}>
                    &times;
                  </CloseButton>
                  <Image>
                    <img src="" alt="" />
                  </Image>
                  <NameDiv>
                    <p>{user.name}</p>
                    <UserName>@{user.username}</UserName>
                  </NameDiv>
                </SelectedListItem>
              );
            })}
          </SelectedList>
          <Submit type="submit" />
        </Form>
      );
    }
  }

  if (managementMode === 'direct') {
    return <Actions></Actions>;
  }

  if (managementMode === 'groups') {
    return (
      <Actions>
        <Button onClick={handleAddGroupButtonClick}>Add A New Group</Button>
        <Button onClick={handleAddUsersButtonClick}>
          Add Users To A Group
        </Button>
      </Actions>
    );
  }

  if (selectedChatMode === 'discover' && selectedChat) {
    return (
      <DiscoverDiv>
        {selectedChatType === 'direct' && (
          <AddButton onClick={handleAddDirect}>+</AddButton>
        )}
        {selectedChatType === 'group' && (
          <AddButton onClick={handleAddGroup}>+</AddButton>
        )}
        <p>Add To Your List</p>
      </DiscoverDiv>
    );
  }

  if (selectedChat) {
    return (
      <BodyDiv>
        <ul>
          {selectedChatMessages?.map((message) => {
            return (
              <Message
                message={message}
                key={message.id}
                selectedChatType={selectedChatType}
              />
            );
          })}
        </ul>
      </BodyDiv>
    );
  }

  return <P>Select A Chat to start</P>;
};

export default PanelBody;

