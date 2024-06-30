const createUserChatsSlice = (set, get) => ({
  selectedChat: null,
  selectedChatType: null,
  selectedChatMode: null,
  selectedTabType: 'direct',
  selectedModeType: 'yours',
  selectedDetails: null,
  managementMode: false,
  managementAction: null,
  setManagementAction: (value) => set(() => ({ managementAction: value })),
  setManagementMode: (value) => set(() => ({ managementMode: value })),
  setSelectedChatMode: (mode) => set(() => ({ selectedChatMode: mode })),
  setSelectedModeType: (mode) => set(() => ({ selectedModeType: mode })),
  setSelectedDetails: (chat) => set(() => ({ selectedDetails: chat })),
  setSelectedChatType: (type) => set(() => ({ selectedChatType: type })),
  setSelectedTabType: (type) => set(() => ({ selectedTabType: type })),
  setSelectedChat: (chat) => set(() => ({ selectedChat: chat })),
  updateSelectedChat: (roomId) =>
    set((state) => ({
      selectedChat: state.user.chatRooms.find((room) => room.id === roomId),
    })),
});

export default createUserChatsSlice;

