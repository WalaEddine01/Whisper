const createUserChatsSlice = (set, get) => ({
  directChats: [
    {
      name: 'Ahmed',
      username: 'ahmed',
      email: 'ahmed',
      id: 1,
      messages: [
        {
          userId: 1,
          id: 1,
          text: 'Hello',
          time: '12:00',
          type: 'text',
        },
        {
          userId: 9,
          id: 2,
          text: 'Hello, How are you?',
          time: '12:01',
          type: 'text',
        },
        {
          userId: 9,
          id: 3,
          text: 'And your family',
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
      ],
    },
  ],
  groupChats: [],
  selectedChatsType: 'direct',
  selectedChat: null,
  selectedDetails: null,
  selectedChatMessages: null,
  setSelectedChatMessages: (messages) =>
    set(() => ({ selectedChatMessages: messages })),
  setSelectedDetails: (chat) => set(() => ({ selectedDetails: chat })),
  setSelectedChat: (chat) => set(() => ({ selectedChat: chat })),
  setSelectedChatsType: (type) => set(() => ({ selectedChatsType: type })),
  addToDirectChats: (chat) =>
    set((state) => ({ directChats: [...state.get().directChats, chat] })),
  addToGroupChats: (chat) =>
    set((state) => ({ groupChats: [...state.get().groupChats, chat] })),
});

export default createUserChatsSlice;

