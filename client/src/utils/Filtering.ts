import { User } from '../slices/Slices.types';

export function getFiltered(
  users: User[] | null,
  user: User | null,
  userId: string | null,
  searchQuery: string,
) {
  const directChats =
    user && user.chatRooms.filter((chatRoom) => chatRoom.type === 'one-to-one');
  const groupChats =
    user && user.chatRooms.filter((chatRoom) => chatRoom.type === 'group');

  const directChatUserIds =
    directChats &&
    directChats.map((chat) => chat.users.map((user) => user.id)).flat();
  const groupChatsUserIds =
    groupChats &&
    groupChats.map((group) => group.users.map((user) => user.id)).flat();

  const discoveringUsers =
    users &&
    users.filter(
      (user) =>
        directChatUserIds &&
        user.id !== userId &&
        !directChatUserIds.includes(user.id),
    );

  const discoveringGroups =
    groupChats &&
    groupChats.filter(
      (group) => groupChatsUserIds && !groupChatsUserIds.includes(group.id),
    );

  const filteredDiscoveredUsers =
    discoveringUsers &&
    discoveringUsers.filter((discoveredUser) => {
      const lowercasedQuery = searchQuery?.toLowerCase() || '';
      // console.log(discoveredUser);
      return (
        discoveredUser.name.toLowerCase().includes(lowercasedQuery) ||
        discoveredUser.username.toLowerCase().includes(lowercasedQuery)
      );
    });

  const filteredDirectChats =
    directChats &&
    directChats
      .filter((chat) =>
        chat.users.some((user) => {
          const lowercasedQuery = searchQuery?.toLowerCase() || '';
          return (
            (user.name.toLowerCase().includes(lowercasedQuery) ||
              user.username.toLowerCase().includes(lowercasedQuery)) &&
            user.id !== userId
          );
        }),
      )
      .flat();

  const filteredDiscoveredGroups =
    discoveringGroups &&
    discoveringGroups.filter((discoveredGroup) => {
      // const lowercasedQuery = searchQuery?.toLowerCase() || '';
      return discoveredGroup;
    });

  const filteredGroupChats =
    groupChats &&
    groupChats.filter((group) => {
      // const lowercasedQuery = searchQuery?.toLowerCase() || '';
      return group;
    });

  return {
    filteredGroupChats,
    filteredDiscoveredGroups,
    filteredDirectChats,
    filteredDiscoveredUsers,
  };
}

