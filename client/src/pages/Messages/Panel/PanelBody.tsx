import {
  Actions,
  AddButton,
  BodyDiv,
  Button,
  CloseButton,
  DiscoverDiv,
  Form,
  ImageUserSuggestion,
  Input,
  Name,
  NameDiv,
  P,
  Select,
  SelectedList,
  SelectedListItem,
  Submit,
  SuggestionsList,
  SuggestionsListButton,
  UserName,
} from './Panel.styles';
import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from 'react';

import { GET_CURRENT_USER } from '../../../GraphQl/queries';
import Message from './Message';
import { PanelBodyProps } from './Panel.types';
import { User } from '../../../slices/Slices.types';
import { socket } from '../../../utils/socket';
import useApplicationStore from '../../../Hooks/useApplicationStore';
import useRequest from '../../../Hooks/useRequest';

const PanelBody: FC<PanelBodyProps> = ({ inputValue }) => {
  const {
    selectedChat,
    setManagementMode,
    selectedChatType,
    selectedChatMode,
    setSelectedTabType,
    setSelectedModeType,
    // setSelectedChat,
    setSelectedChatMode,
    userId,
    managementMode,
    setManagementAction,
    managementAction,
    // users,
    updateSelectedChat,
    setUser,
    user,
  } = useApplicationStore();

  const { createRoom, getUser } = useRequest();

  const [userSearchQuery, setUserSearchQuery] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  function handleChangeUserSearchQuery(event: ChangeEvent<HTMLInputElement>) {
    setUserSearchQuery(event.target.value);
  }

  async function handleAddDirect() {
    const response = await createRoom({
      variables: {
        name: 'Direct Chat',
        type: 'one-to-one',
        userIds: selectedChat && selectedChat.users.map((user) => user.id),
      },
      refetchQueries: [
        {
          query: GET_CURRENT_USER,
          variables: { id: userId },
        },
      ],
      awaitRefetchQueries: true,
    });

    setSelectedChatMode('yours');
    setSelectedModeType('yours');
    setSelectedTabType('direct');

    const { data: userNewData } = await getUser({
      variables: { id: userId },
    });

    setUser(userNewData.user);
    updateSelectedChat(response.data.createChatRoom.id);

    socket.emit('joinChatRoom', response.data.createChatRoom.id);
  }

  async function handleAddGroup(
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const nameInput = target.elements.namedItem('name') as HTMLInputElement;

    const response = await createRoom({
      variables: {
        name: nameInput.value || '',
        type: 'group',
        userIds: [userId, ...selectedUsers.map((user) => user.id)],
      },
      refetchQueries: [
        {
          query: GET_CURRENT_USER,
          variables: { id: userId },
        },
      ],
      awaitRefetchQueries: true,
    });

    setSelectedChatMode('yours');
    setSelectedModeType('yours');
    setSelectedTabType('group');

    const { data: userNewData } = await getUser({
      variables: { id: userId },
    });

    setUser(userNewData.user);
    setManagementMode(false);
    setManagementAction(false);
    updateSelectedChat(response.data.createChatRoom.id);

    socket.emit('joinChatRoom', response.data.createChatRoom.id);
  }

  function handleAddGroupButtonClick() {
    setManagementAction('addGroup');
  }

  // function handleAddUsersButtonClick() {
  //   setManagementAction('addToGroup');
  // }

  // function handleCreateGroupSubmit(e) {
  //   e.preventDefault();
  //   const newGroup = {
  //     id: Math.random().toString(),
  //     name: e.target.name.value,
  //     policy: e.target.policy.value,
  //     users: [{ id: userId, name: arrayToHashMap(users, 'id')[userId].name }],
  //     messages: [],
  //   };
  //   console.log(newGroup);
  // }

  // function handleAddUserSubmit(e) {
  //   e.preventDefault();
  //   // const user = arrayToHashMap(users, 'id')[e.target.user.value];
  //   // const newChat = {
  //   //   id: Math.random().toString(),
  //   //   user,
  //   //   messages: [],
  //   // };
  //   // addToDirectChats(userId, newChat);
  // }

  // function handleChangeGroupSelection(e) {
  //   setSelectedGroupToAdd(e.target.group.value);
  // }

  function handleAddToSelected(e: MouseEvent<HTMLButtonElement>, user: User) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedUsers([...selectedUsers, user]);
  }

  function handleRemoveFromSelected(
    e: MouseEvent<HTMLButtonElement>,
    id: string,
  ) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedUsers(selectedUsers.filter((user) => user.id !== id));
  }

  if (managementAction) {
    const directChats =
      user &&
      user.chatRooms.filter((chatRoom) => chatRoom.type === 'one-to-one');

    const filteredChats =
      directChats &&
      directChats.filter((chat) =>
        chat.users.every(
          (user) =>
            !selectedUsers.some((selectedUser) => user.id === selectedUser.id),
        ),
      );
    // console.log(filteredChats);

    const directChatUsers =
      filteredChats &&
      filteredChats
        .map((chat) => chat.users.filter((user) => user.id !== userId))
        .flat();

    // console.log(directChatUsers);

    const filteredUsers =
      directChatUsers &&
      directChatUsers.filter((directChatUser) => {
        const lowercasedQuery = userSearchQuery?.toLowerCase() || '';

        return (
          directChatUser.username.toLowerCase().includes(lowercasedQuery) ||
          directChatUser.name.toLowerCase().includes(lowercasedQuery)
        );
      });

    if (managementAction === 'addGroup') {
      return (
        <Form action="" onSubmit={(e) => handleAddGroup(e)}>
          <Input type="text" name="name" placeholder="Name" />
          <Select name="policy" id="">
            <option value="private">private</option>
            <option value="public" disabled>
              public
            </option>
          </Select>
          <div>
            <Input
              type="text"
              name="user"
              onChange={handleChangeUserSearchQuery}
              value={userSearchQuery}
              placeholder={'User Name'}
              disabled={
                !directChatUsers ||
                (directChatUsers && directChatUsers.length === 0)
              }
            />
            <SuggestionsList>
              {filteredUsers &&
                filteredUsers.map((user) => {
                  return (
                    <li>
                      <SuggestionsListButton
                        onClick={(e) => handleAddToSelected(e, user)}>
                        <ImageUserSuggestion>
                          <img
                            src={`http://localhost:5000/${
                              user.imgPath.startsWith('/')
                                ? user.imgPath.slice(1)
                                : user.imgPath.startsWith('.')
                                ? user.imgPath.slice(2)
                                : user.imgPath
                            }`}
                          />
                        </ImageUserSuggestion>
                        <NameDiv>
                          <Name>{user.name}</Name>
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
                    onClick={(e) => handleRemoveFromSelected(e, user.id)}>
                    &times;
                  </CloseButton>
                  <ImageUserSuggestion>
                    <img
                      src={`http://localhost:5000/${
                        user.imgPath.startsWith('/')
                          ? user.imgPath.slice(1)
                          : user.imgPath.startsWith('.')
                          ? user.imgPath.slice(2)
                          : user.imgPath
                      }`}
                    />
                  </ImageUserSuggestion>
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
    // if (managementAction === 'addToGroup') {
    //   const filteredUsers = outGroupUsers.filter((outGroupUser) => {
    //     const lowercasedQuery = userSearchQuery?.toLowerCase() || '';
    //     console.log(outGroupUser);
    //     console.log(selectedUsers);
    //     return (
    //       (outGroupUser.name.toLowerCase().includes(lowercasedQuery) ||
    //         outGroupUser.username.toLowerCase().includes(lowercasedQuery)) &&
    //       !selectedUsers.some(
    //         (selectedUser) => selectedUser.id === outGroupUser.id,
    //       )
    //     );
    //   });

    //   return (
    //     <Form action="" onSubmit={(e) => handleAddUserSubmit(e)}>
    //       <Select
    //         name="group"
    //         id=""
    //         onChange={(e) => handleChangeGroupSelection(e)}>
    //         {userGroupChats.map((group) => {
    //           return <option value={group.id}>{group.name}</option>;
    //         })}
    //       </Select>
    //       <div>
    //         <Input
    //           type="text"
    //           name="user"
    //           onChange={handleChangeUserSearchQuery}
    //           value={userSearchQuery}
    //           placeholder={'User Name'}
    //         />
    //         <SuggestionsList>
    //           {filteredUsers.map((user) => {
    //             return (
    //               <li>
    //                 <SuggestionsListButton
    //                   onClick={() => handleAddToSelected(user)}>
    //                   <Image>
    //                     <img src="" alt="" />
    //                   </Image>
    //                   <NameDiv>
    //                     <p>{user.name}</p>
    //                     <UserName>@{user.username}</UserName>
    //                   </NameDiv>
    //                 </SuggestionsListButton>
    //               </li>
    //             );
    //           })}
    //         </SuggestionsList>
    //       </div>
    //       <SelectedList>
    //         {selectedUsers.map((user) => {
    //           return (
    //             <SelectedListItem>
    //               <CloseButton
    //                 onClick={() => handleRemoveFromSelected(user.id)}>
    //                 &times;
    //               </CloseButton>
    //               <Image>
    //                 <img src="" alt="" />
    //               </Image>
    //               <NameDiv>
    //                 <p>{user.name}</p>
    //                 <UserName>@{user.username}</UserName>
    //               </NameDiv>
    //             </SelectedListItem>
    //           );
    //         })}
    //       </SelectedList>
    //       <Submit type="submit" />
    //     </Form>
    //   );
    // }
  }

  if (managementMode === 'direct') {
    return <Actions></Actions>;
  }

  if (managementMode === 'group') {
    return (
      <Actions>
        <Button onClick={handleAddGroupButtonClick}>Add A New Group</Button>
        {/* <Button onClick={handleAddUsersButtonClick}>
          Add Users To A Group
        </Button> */}
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

  socket.on('receiveMessage', async () => {
    const { data: userNewData } = await getUser({
      variables: { id: userId },
    });

    setUser(userNewData.user);
    if (selectedChat) {
      updateSelectedChat(selectedChat.id);
    }
    if (inputValue === '') {
      ('');
    }
  });

  if (selectedChat) {
    return (
      <BodyDiv>
        <ul>
          {selectedChat.messages?.map((message) => {
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

