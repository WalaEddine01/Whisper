import { ChatRoom, User } from '../../../slices/Slices.types';
import { ChatsItems, ChatsListStyled } from './Chats.styles';

import ChatItem from './ChatItem';
import { ChatListProps } from './Chats.types';
import { FC } from 'react';
import { getFiltered } from '../../../utils/Filtering';
import { socket } from '../../../utils/socket';
import useApplicationStore from '../../../Hooks/useApplicationStore';
import useRequest from '../../../Hooks/useRequest';

const ChatsList: FC<ChatListProps> = ({ searchQuery }) => {
  const {
    selectedTabType,
    selectedModeType,
    users,
    userId,
    user,
    isSmall,
    setUser,
    setUsers,
  } = useApplicationStore();

  const { getUser, getUsers } = useRequest();

  socket.on('RoomCreated', async () => {
    const { data: userNewData } = await getUser({
      variables: { id: userId },
    });

    setUser(userNewData.user);
  });

  socket.on('newUser', async () => {
    const { data: usersData } = await getUsers({
      variables: { id: userId },
    });

    setUsers(usersData.users);
  });

  const {
    filteredGroupChats,
    filteredDiscoveredGroups,
    filteredDirectChats,
    filteredDiscoveredUsers,
  } = getFiltered(users, user, userId, searchQuery);

  if (selectedTabType === 'direct' && selectedModeType === 'discover') {
    return (
      <ChatsItems isSmall={isSmall}>
        <ChatsListStyled>
          {filteredDiscoveredUsers &&
            filteredDiscoveredUsers.map(
              (discoveringUser: User, index: number) => {
                if (user) {
                  return (
                    <ChatItem
                      key={discoveringUser.id}
                      chat={{
                        id: Math.random().toString(),
                        messages: [],
                        type: 'one-to-one',
                        users: [discoveringUser, user],
                        mode: 'discover',
                      }}
                      even={index % 2 === 0}
                      type={'direct'}
                    />
                  );
                }
              },
            )}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  if (selectedTabType === 'direct' && selectedModeType === 'yours') {
    return (
      <ChatsItems isSmall={isSmall}>
        <ChatsListStyled>
          {filteredDirectChats &&
            filteredDirectChats.map((chat: ChatRoom, index: number) => {
              return (
                <ChatItem
                  key={chat.id}
                  chat={chat}
                  even={index % 2 === 0}
                  type={'direct'}
                />
              );
            })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  if (selectedTabType === 'group' && selectedModeType === 'yours') {
    return (
      <ChatsItems isSmall={isSmall}>
        <ChatsListStyled>
          {filteredGroupChats &&
            filteredGroupChats.map((chat: ChatRoom, index: number) => {
              return (
                <ChatItem
                  key={chat.id}
                  chat={chat}
                  even={index % 2 === 0}
                  type={'group'}
                />
              );
            })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  if (selectedTabType === 'group' && selectedModeType === 'discover') {
    return (
      <ChatsItems isSmall={isSmall}>
        <ChatsListStyled>
          {filteredDiscoveredGroups &&
            filteredDiscoveredGroups.map((group: ChatRoom, index: number) => {
              if (group.policy === 'public') {
                return (
                  <ChatItem
                    key={group.id}
                    chat={group}
                    even={index % 2 === 0}
                    type={'group'}
                  />
                );
              } else {
                return null;
              }
            })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  return null;
};

export default ChatsList;

