const createUsersSlice = (set, get) => ({
  users: [
    {
      id: 1,
      name: 'John',
      username: 'John',
      email: 'John@gmail.com',
    },
    {
      id: 2,
      name: 'Jane',
      username: 'Jane',
      email: 'Jane@gmail.com',
    },
    {
      id: 3,
      name: 'Jack',
      username: 'Jack',
      email: 'Jack@gmail.com',
    },
    {
      id: 4,
      name: 'Jill',
      username: 'Jill',
      email: 'Jill@gmail.com',
    },
    {
      id: 5,
      name: 'Joe',
      username: 'Joe',
      email: 'Joe@gmail.com',
    },
    {
      id: 6,
      name: 'Jill',
      username: 'Jill',
      email: 'Jill@gmail.com',
    },
    {
      id: 7,
      name: 'Mohamed',
      username: 'Mohamed',
      email: 'Mohamed@gmail.com',
    },
    {
      id: 8,
      name: 'Wael',
      username: 'Wael',
      email: 'Wael@gmail.com',
    },
    {
      id: 'j84985',
      name: 'Amr',
      username: 'Amr',
      email: 'Amr@gmail.com',
      directChats: [
        {
          id: 1,
          user: {
            name: 'Ahmed',
            username: 'ahmed',
            email: 'ahmed@example.com',
            id: 10,
          },
          messages: [
            {
              userId: 1,
              id: 1,
              text: 'Hello',
              time: '12:00',
              type: 'text',
            },
            {
              userId: 'j84985',
              id: 2,
              text: 'Hello, How are you?',
              time: '12:01',
              type: 'text',
            },
            {
              userId: 'j84985',
              id: 3,
              text: 'And your family?',
              time: '12:02',
              type: 'text',
            },
            {
              userId: 1,
              id: 4,
              text: 'We are good',
              time: '12:03',
              type: 'text',
            },
            {
              userId: 'j84985',
              id: 5,
              text: 'We are good too',
              time: '12:04',
              type: 'text',
            },
          ],
        },
      ],
      groupChats: [
        {
          name: 'eFootball',
          id: 2,
          policy: 'public',
          users: [
            {
              id: 1,
              name: 'Ahmed',
            },
            {
              id: 'j84985',
              name: 'Amr',
            },
          ],
          messages: [
            {
              userId: 5,
              id: 1,
              text: 'Hey!',
              time: '08:00',
              type: 'text',
            },
            {
              userId: 'j84985',
              id: 2,
              text: "Hi Michael, how's it going?",
              time: '08:01',
              type: 'text',
            },
            {
              userId: 5,
              id: 3,
              text: "I'm doing well, thanks!",
              time: '08:02',
              type: 'text',
            },
            {
              userId: 'j84985',
              id: 4,
              text: 'Glad to hear that!',
              time: '08:03',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: 'Ahmed',
      username: 'Ahmed',
      email: 'Ahmed@gmail.com',
    },
  ],

  publicGroups: [
    {
      name: 'FIFA',
      id: 1,
      users: [
        {
          id: 10,
          name: 'Ahmed',
          username: 'Ahmed',
          email: 'Ahmed@gmail.com',
        },
        {
          id: 'j84985',
          name: 'Amr',
          username: 'Amr',
          email: 'Amr@gmail.com',
        },
      ],
      messages: [
        {
          userId: 10,
          id: 1,
          text: 'Hey!',
          time: '08:00',
          type: 'text',
        },
        {
          userId: 'j84985',
          id: 2,
          text: "Hi Michael, how's it going?",
          time: '08:01',
          type: 'text',
        },
        {
          userId: 10,
          id: 3,
          text: "I'm doing well, thanks!",
          time: '08:02',
          type: 'text',
        },
        {
          userId: 'j84985',
          id: 4,
          text: 'Glad to hear that!',
          time: '08:03',
          type: 'text',
        },
      ],
    },
  ],

  addToDirectChats: (userId, chat) =>
    set((state) => {
      const users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            directChats: [...user.directChats, chat],
          };
        }
        return user;
      });

      console.log();

      return { users };
    }),

  // addToDirectChats: (userId, chat) =>
  //   set((state) => ({
  //     users: state.users.map((user) =>
  //       user.id === userId
  //         ? { ...user, directChats: [...user.directChats, chat] }
  //         : user,
  //     ),
  //   })),

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
});

export default createUsersSlice;

