import useAppStore from '../Store';

const useApplicationStore = () => {
  const setUser = useAppStore((state) => state.setUser);
  const setUserId = useAppStore((state) => state.setUserId);
  const setUsers = useAppStore((state) => state.setUsers);
  const setManagementAction = useAppStore((state) => state.setManagementAction);
  const setManagementMode = useAppStore((state) => state.setManagementMode);
  const setSelectedChatMode = useAppStore((state) => state.setSelectedChatMode);
  const setSelectedModeType = useAppStore((state) => state.setSelectedModeType);
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const setSelectedChatType = useAppStore((state) => state.setSelectedChatType);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);
  const setIsSmall = useAppStore((state) => state.setIsSmall);
  const setIsLoadingToken = useAppStore((state) => state.setIsLoadingToken);
  const updateSelectedChat = useAppStore((state) => state.updateSelectedChat);

  const userId = useAppStore((state) => state.userId);
  const user = useAppStore((state) => state.user);
  const isSmall = useAppStore((state) => state.isSmall);
  const selectedChat = useAppStore((state) => state.selectedChat);
  const selectedChatType = useAppStore((state) => state.selectedChatType);
  const selectedChatMode = useAppStore((state) => state.selectedChatMode);
  const selectedDetails = useAppStore((state) => state.selectedDetails);
  const managementMode = useAppStore((state) => state.managementMode);
  const managementAction = useAppStore((state) => state.managementAction);
  const selectedTabType = useAppStore((state) => state.selectedTabType);
  const selectedModeType = useAppStore((state) => state.selectedModeType);
  const users = useAppStore((state) => state.users);
  const isLoadingToken = useAppStore((state) => state.isLoadingToken);

  return {
    setUser,
    setUserId,
    setUsers,
    setManagementAction,
    setManagementMode,
    setSelectedChatMode,
    setSelectedModeType,
    setSelectedDetails,
    setSelectedChatType,
    setSelectedTabType,
    setSelectedChat,
    setIsSmall,
    setIsLoadingToken,
    updateSelectedChat,

    userId,
    user,
    isSmall,
    selectedChat,
    selectedChatType,
    selectedChatMode,
    selectedDetails,
    managementMode,
    managementAction,
    selectedTabType,
    selectedModeType,
    users,
    isLoadingToken,
  };
};

export default useApplicationStore;

