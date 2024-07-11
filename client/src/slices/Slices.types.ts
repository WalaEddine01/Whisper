export interface Message {
  content: string;
  createdAt: string;
  id: string;
  sender: User;
}

export interface ChatRoom {
  id: string;
  type: 'one-to-one' | 'group';
  name?: null | string;
  users: User[];
  messages: Message[];
  policy?: 'public' | 'private';
  mode?: 'discover';
  user?: User;
}

export interface User {
  id: string;
  imgPath: string;
  name: string;
  username: string;
  chatRooms: ChatRoom[];
}

export interface UserSliceTypes {
  user: User | null;
  userId: string | null;
  users: User[] | null;
  setUser: (user: User | null) => void;
  setUserId: (userId: string | null) => void;
  setUsers: (users: User[] | null) => void;
}

export interface FlexibilitySliceTypes {
  isSmall: boolean | null;
  setIsSmall: (isSmall: boolean) => void;
}

export interface ChatSliceTypes {
  selectedChat: null | ChatRoom;
  selectedChatType: null | 'direct' | 'group';
  selectedChatMode: null | 'yours' | 'discover';
  selectedTabType: 'direct' | 'group';
  selectedModeType: 'yours' | 'discover' | null;
  selectedDetails: null | ChatRoom;
  managementMode: boolean | 'direct' | 'group' | null;
  managementAction: null | false | 'addGroup' | 'addToGroup';
  isLoadingToken: boolean;
  setManagementAction: (
    action: 'addGroup' | 'addToGroup' | null | false,
  ) => void;
  setManagementMode: (mode: boolean | 'direct' | 'group' | null) => void;
  setSelectedChatMode: (mode: 'yours' | 'discover' | null) => void;
  setSelectedModeType: (mode: 'yours' | 'discover' | null) => void;
  setSelectedDetails: (details: ChatRoom | null) => void;
  setSelectedChatType: (type: 'direct' | 'group' | null) => void;
  setSelectedTabType: (type: 'direct' | 'group') => void;
  setSelectedChat: (chat: ChatRoom | null) => void;
  setIsLoadingToken: (value: boolean) => void;
  updateSelectedChat: (roomId: string) => void;
}

