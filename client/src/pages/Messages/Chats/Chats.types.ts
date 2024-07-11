import { ChatRoom } from '../../../slices/Slices.types';

export interface ChatsDivProps {
  isSmall: boolean | null;
}

export interface UserDivProps {
  isSmall: boolean | null;
}

export interface ChatsItemsProps {
  isSmall: boolean | null;
}

export interface ChatsSearchProps {
  searchQuery: searchQueryType;
  setSearchQuery: (value: string) => void;
}

export interface ChatRowProps {
  even: boolean;
}

export interface ButtonActiveProps {
  active: boolean;
}

export interface ChatListProps {
  searchQuery: searchQueryType;
}

export interface ChatItemProps {
  chat: ChatRoom;
  even: boolean;
  type: 'direct' | 'group';
}

export type selectedTabTypeValues = 'direct' | 'group';
export type selectedModeTypeValues = 'yours' | 'discover';
export type searchQueryType = string;

