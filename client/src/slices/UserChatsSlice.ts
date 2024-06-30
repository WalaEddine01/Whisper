const createUserChatsSlice = (set, get) => ({
  selectedChat: null,
  setSelectedChat: (chat) => set(() => ({ selectedChat: chat })),

  selectedChatType: null,
  selectedChatMode: null,
  selectedTabType: 'direct',
  selectedModeType: 'yours',
  selectedDetails: null,
  selectedChatMessages: null,
  managementMode: false,
  managementAction: null,
  setManagementAction: (value) => set(() => ({ managementAction: value })),
  setManagementMode: (value) => set(() => ({ managementMode: value })),
  setSelectedChatMode: (mode) => set(() => ({ selectedChatMode: mode })),
  setSelectedModeType: (mode) => set(() => ({ selectedModeType: mode })),
  setSelectedChatMessages: (messages) =>
    set(() => ({ selectedChatMessages: messages })),
  setSelectedDetails: (chat) => set(() => ({ selectedDetails: chat })),
  setSelectedChatType: (type) => set(() => ({ selectedChatType: type })),
  setSelectedTabType: (type) => set(() => ({ selectedTabType: type })),
});

export default createUserChatsSlice;

