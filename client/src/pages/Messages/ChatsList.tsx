import ChatItem from './ChatItem';
import React from 'react';
import { arrayToHashMap } from '../../utils/utils';
import styled from 'styled-components';
import useAppStore from '../../Store';
import { useEffect } from 'react';

const ChatsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const P = styled.p`
  margin-bottom: 16px;
  margin-left: 16px;
`;

const ChatsItems = styled.div`
  /* height: calc(100% - 184px); */
  height: calc(100% - 224px);

  padding: 32px 0;
  color: var(--mainTextColor);
  overflow: auto;
`;

const ChatsList = ({ searchQuery }) => {
  const selectedTabType = useAppStore((state) => state.selectedTabType);
  const selectedModeType = useAppStore((state) => state.selectedModeType);

  const users = useAppStore((state) => state.users);
  const store = useAppStore((state) => state);
  const userId = useAppStore((state) => state.userId);
  const user = useAppStore((state) => state.user);

  console.log(user);

  const directChats = user.chatRooms.filter(
    (chatRoom) => chatRoom.type === 'one-to-one',
  );

  // console.log(directChats);

  const groupChats = user.chatRooms.filter(
    (chatRoom) => chatRoom.type === 'group',
  );
  const directChatUserIds = directChats
    .map((chat) => chat.users.map((user) => user.id))
    .flat();

  // console.log(directChatUserIds);
  const groupChatsUserIds = groupChats
    .map((group) => group.users.map((user) => user.id))
    .flat();

  const discoveringUsers = users.filter(
    (user) => user.id !== userId && !directChatUserIds.includes(user.id),
  );
  // const directUsers = directChats
  //   .map((chat) => chat.users.filter((user) => user.id !== userId))
  //   .flat();

  // console.log(directUsers);
  // console.log(discoveringUsers);

  // const discoveringGroups = publicGroups.filter(
  //   (group) => !groupChatsUserIds.includes(group.id),
  // );

  const filteredDiscoveredUsers = discoveringUsers.filter((discoveredUser) => {
    const lowercasedQuery = searchQuery?.toLowerCase() || '';
    // console.log(discoveredUser);
    return (
      // discoveredUser.name.toLowerCase().includes(lowercasedQuery) ||
      discoveredUser.username.toLowerCase().includes(lowercasedQuery)
    );
  });

  const filteredDirectChats = directChats
    .filter((chat) =>
      chat.users.some((user) => {
        const lowercasedQuery = searchQuery?.toLowerCase() || '';
        return (
          user.username.toLowerCase().includes(lowercasedQuery) &&
          user.id !== userId
        );
      }),
    )
    .flat();

  // console.log(filteredDirectUsers);

  // const filteredDiscoveredGroups = discoveringGroups.filter(
  //   (discoveredGroup) => {
  //     const lowercasedQuery = searchQuery?.toLowerCase() || '';
  //     return discoveredGroup.name.toLowerCase().includes(lowercasedQuery);
  //   },
  // );

  // const filteredGroupChats = groupChats.filter((group) => {
  //   const lowercasedQuery = searchQuery?.toLowerCase() || '';
  //   return group.name.toLowerCase().includes(lowercasedQuery);
  // });

  // useEffect(() => {
  //   console.log(filteredDiscoveredUsers);
  //   console.log(filteredDirectUsers);
  // }, [filteredDirectUsers, filteredDiscoveredUsers]);

  // console.log(filteredDirectChats);

  if (selectedTabType === 'direct' && selectedModeType === 'discover') {
    return (
      <ChatsItems>
        <ChatsListStyled>
          {filteredDiscoveredUsers.map((discoveringUser, index) => {
            return (
              <ChatItem
                key={discoveringUser.id}
                chat={{
                  messages: [],
                  type: 'one-to-one',
                  users: [discoveringUser, user],
                  mode: 'discover',
                }}
                even={index % 2}
                type={'direct'}
              />
            );
          })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  if (selectedTabType === 'direct' && selectedModeType === 'yours') {
    return (
      <ChatsItems>
        <ChatsListStyled>
          {filteredDirectChats.map((chat, index) => {
            // console.log(chat);
            return (
              <ChatItem
                key={chat.id}
                chat={chat}
                even={index % 2}
                type={'direct'}
              />
            );
          })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  // if (selectedTabType === 'groups' && selectedModeType === 'discover') {
  //   return (
  //     <ChatsItems>
  //       <ChatsListStyled>
  //         {filteredDiscoveredGroups.map((chat, index) => {
  //           return (
  //             <ChatItem
  //               key={user.id}
  //               chat={{ ...chat, mode: 'discover' }}
  //               even={index % 2}
  //               type={'group'}
  //             />
  //           );
  //         })}
  //       </ChatsListStyled>
  //     </ChatsItems>
  //   );
  // }

  // if (selectedTabType === 'groups' && selectedModeType === 'discover') {
  //   return (
  //     <ChatsItems>
  //       <ChatsListStyled></ChatsListStyled>
  //     </ChatsItems>
  //   );
  // }

  // if (selectedTabType === 'groups' && selectedModeType === 'yours') {
  //   return (
  //     <ChatsItems>
  //       <ChatsListStyled>
  //         {filteredGroupChats.map((chat, index) => {
  //           return (
  //             <ChatItem
  //               key={chat.id}
  //               chat={chat}
  //               even={index % 2}
  //               type={'group'}
  //             />
  //           );
  //         })}
  //       </ChatsListStyled>
  //     </ChatsItems>
  //   );
  // }

  return null;

  // if (selectedTabType === 'groups' && selectedModeType === 'discover') {
  //   return (
  //     <ChatsItems>
  //       <ChatsListStyled>
  //         {groups.map((group, index) => {
  //           if (group.policy === 'public') {
  //             return (
  //               <ChatItem
  //                 key={group.id}
  //                 chat={{
  //                   name: group.name,
  //                   policy: 'public',
  //                   mode: 'discover',
  //                 }}
  //                 even={index % 2}
  //                 type={'group'}
  //               />
  //             );
  //           } else {
  //             return null;
  //           }
  //         })}
  //       </ChatsListStyled>
  //     </ChatsItems>
  //   );
  // }

  // return (
  //   <ChatsItems>
  //     <ChatsListStyled>
  //       {groupChats.map((chat, index) => {
  //         return (
  //           <ChatItem
  //             key={chat.id}
  //             chat={chat}
  //             even={index % 2}
  //             type={'group'}
  //           />
  //         );
  //       })}
  //     </ChatsListStyled>
  //   </ChatsItems>
  // );
};

export default ChatsList;

