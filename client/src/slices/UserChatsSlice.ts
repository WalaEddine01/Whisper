const createUserChatsSlice = (set, get) => ({
  selectedChatType: null,
  selectedChatMode: null,
  selectedTabType: 'direct',
  selectedModeType: 'yours',
  selectedChat: null,
  selectedDetails: null,
  selectedChatMessages: null,
  setSelectedChatMode: (mode) => set(() => ({ selectedChatMode: mode })),
  setSelectedModeType: (mode) => set(() => ({ selectedModeType: mode })),
  setSelectedChatMessages: (messages) =>
    set(() => ({ selectedChatMessages: messages })),
  setSelectedDetails: (chat) => set(() => ({ selectedDetails: chat })),
  setSelectedChat: (chat) => set(() => ({ selectedChat: chat })),
  setSelectedChatType: (type) => set(() => ({ selectedChatType: type })),
  setSelectedTabType: (type) => set(() => ({ selectedTabType: type })),
});

export default createUserChatsSlice;

