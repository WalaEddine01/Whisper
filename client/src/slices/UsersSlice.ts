const createUsersSlice = (set, get) => ({
  users: [],
  chatRooms: [],
  messages: [],

  setUsers: (users) => set((state) => ({ users: users })),

  addChat: (userIds, chat) =>
    set((state) => {
      const users = state.users.map((user) => {
        if (userIds.includes(user.id)) {
          return {
            ...user,
            chatRooms: [...user.chatRooms, chat],
          };
        }
        return user;
      });

      if (userIds.includes(state.user.id)) {
        state.user = {
          ...state.user,
          chatRooms: [...state.user.chatRooms, chat],
        };
      }

      return { users };
    }),

  addMessage: (roomId, message) =>
    set((state) => {
      console.log(roomId);

      const updatedRooms = state.user.chatRooms.map((room) => {
        console.log(room);
        if (room.id === roomId) {
          return {
            ...room,
            messages: [...room.messages, message],
          };
        }
        return room;
      });

      return { user: { ...state.user, chatRooms: updatedRooms } };
    }),

  updateSelectedChat: (roomId) =>
    set((state) => ({
      selectedChat: state.user.chatRooms.find((room) => room.id === roomId),
    })),

  addToGroupChats: (userId, chat) =>
    set((state) => {
      const users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            groupChats: [...user.groupChats, chat],
          };
        }
        return user;
      });
      return { users };
    }),

  addMessageToDirectChat: (userId, chatId, message) =>
    set((state) => {
      const users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            chatRooms: user.chatRooms.map((chat) => {
              if (chat.id === chatId) {
                return {
                  ...chat,
                  messages: [...chat.messages, message],
                };
              }
              return chat;
            }),
          };
        }
        // if (user.id === userId2) {
        //   return {
        //     ...user,
        //     chatRooms: user.chatRooms.map((chat) => {
        //       if (chat.id === chatId) {
        //         return {
        //           ...chat,
        //           messages: [...chat.messages, message],
        //         };
        //       }
        //       return chat;
        //     }),
        //   };
        // }
        return user;
      });
      return { users };
    }),

  addMessageToGroupChat: (userId, chatId, message) =>
    set((state) => {
      const users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            groupChats: user.groupChats.map((chat) => {
              if (chat.id === chatId) {
                return {
                  ...chat,
                  messages: [...chat.messages, message],
                };
              }
              return chat;
            }),
          };
        }
        return user;
      });
      const selectedChat = state.selectedChat;

      if (selectedChat.id === chatId) {
        state.selectedChatMessages = [...state.selectedChatMessages, message];
      }

      return { users };
    }),

  addUserToGroupChat: (userId, chatId, user) => {
    const users = state.users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          groupChats: user.groupChats.map((chat) => {
            if (chat.id === chatId) {
              return {
                ...chat,
                users: [...chat.users, user],
              };
            }
            return chat;
          }),
        };
      }
      return user;
    });

    return { users };
  },

  createNewGroup: (userId, group) => {
    set((state) => {
      const users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            groupChats: [...user.groupChats, group],
          };
        }
        return user;
      });

      return { users };
    });
  },
});

export default createUsersSlice;

