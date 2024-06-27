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
  height: calc(100% - 184px);
  padding: 32px 0;
  color: var(--mainTextColor);
  overflow: auto;
`;

const ChatsList = () => {
  const selectedTabType = useAppStore((state) => state.selectedTabType);
  const selectedModeType = useAppStore((state) => state.selectedModeType);
  // const directedChats = useAppStore((state) => state.directChats);
  // const groupChats = useAppStore((state) => state.groupChats);

  const users = useAppStore((state) => state.users);
  const publicGroups = useAppStore((state) => state.publicGroups);
  const store = useAppStore((state) => state);
  const userId = useAppStore((state) => state.userId);
  const user = arrayToHashMap(users, 'id')[userId];
  const directChatUserIds = user.directChats.map((chat) => chat.user.id);
  const groupChatsUserIds = user.groupChats.map((group) => group.id);

  const discoveringUsers = users.filter(
    (user) => user.id !== userId && !directChatUserIds.includes(user.id),
  );
  const discoveringGroups = publicGroups.filter(
    (group) => !groupChatsUserIds.includes(group.id),
  );

  useEffect(() => {
    console.log(store);
  }, [selectedTabType, selectedModeType]);

  if (selectedTabType === 'direct' && selectedModeType === 'discover') {
    return (
      <ChatsItems>
        <ChatsListStyled>
          {discoveringUsers.map((user, index) => {
            return (
              <ChatItem
                key={user.id}
                chat={{ user, mode: 'discover' }}
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
          {user.directChats.map((chat, index) => {
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

  if (selectedTabType === 'groups' && selectedModeType === 'discover') {
    return (
      <ChatsItems>
        <ChatsListStyled>
          {discoveringGroups.map((chat, index) => {
            return (
              <ChatItem
                key={user.id}
                chat={{ ...chat, mode: 'discover' }}
                even={index % 2}
                type={'group'}
              />
            );
          })}
        </ChatsListStyled>
      </ChatsItems>
    );
  }

  if (selectedTabType === 'groups' && selectedModeType === 'yours') {
    return (
      <ChatsItems>
        <ChatsListStyled>
          {user.groupChats.map((chat, index) => {
            return (
              <ChatItem
                key={user.id}
                chat={{ ...chat }}
                even={index % 2}
                type={'group'}
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

