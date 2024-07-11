import { ChatRoom, ChatSliceTypes } from './Slices.types';

import { StateCreator } from 'zustand';

const createUserChatsSlice: StateCreator<ChatSliceTypes> = (set) => ({
  selectedChat: null,
  selectedChatType: null,
  selectedChatMode: null,
  selectedTabType: 'direct',
  selectedModeType: 'yours',
  selectedDetails: null,
  managementMode: false,
  managementAction: null,
  isLoadingToken: true,
  setManagementAction: (value) => set(() => ({ managementAction: value })),
  setManagementMode: (value) => set(() => ({ managementMode: value })),
  setSelectedChatMode: (mode) => set(() => ({ selectedChatMode: mode })),
  setSelectedModeType: (mode) => set(() => ({ selectedModeType: mode })),
  setSelectedDetails: (chat) => set(() => ({ selectedDetails: chat })),
  setSelectedChatType: (type) => set(() => ({ selectedChatType: type })),
  setSelectedTabType: (type) => set(() => ({ selectedTabType: type })),
  setSelectedChat: (chat) => set(() => ({ selectedChat: chat })),
  setIsLoadingToken: (value) => set(() => ({ isLoadingToken: value })),
  updateSelectedChat: (roomId) =>
    set((state) => ({
      // @ts-expect-error IDK
      selectedChat: state.user.chatRooms.find(
        (room: ChatRoom) => room.id === roomId,
      ),
    })),
});

export default createUserChatsSlice;

