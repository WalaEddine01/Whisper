import { ChatRoom, User } from '../slices/Slices.types';

export type GetUsersFunc = () => Promise<any>; // Adjust any[] to the actual users array type if known
export type SetUserFunc = (user: User | null) => void; // Adjust any to the actual user type if known
export type SetUserIdFunc = (userId: string | null) => void;
type SetUsersFunc = (users: User[] | null) => void; // Adjust any[] to the actual users array type if known
type SetManagementActionFunc = (
  value: 'addGroup' | 'addToGroup' | false | null,
) => void;
type SetManagementModeFunc = (value: boolean) => void;
type SetSelectedChatModeFunc = (mode: 'yours' | 'discover' | null) => void;
type SetSelectedModeTypeFunc = (mode: 'yours' | 'discover' | null) => void;
type SetSelectedDetailsFunc = (chat: ChatRoom | null) => void; // Adjust any to the actual chat type if known
type SetSelectedChatTypeFunc = (type: 'direct' | 'group' | null) => void;
type SetSelectedTabTypeFunc = (type: 'direct' | 'group') => void;
type SetSelectedChatFunc = (chat: ChatRoom | null) => void; // Adjust any to the actual chat type if known

// Assuming your GraphQL query type and variables type
interface QueryVariables {
  id: string;
}

export interface GetUserFunction {
  (options: { variables: QueryVariables }): Promise<any>; // Adjust `any` to the actual return type if known
}

export interface SignUserParams {
  setUser: SetUserFunc;
  setUserId: SetUserIdFunc;
  setUsers: SetUsersFunc;
  setManagementAction: SetManagementActionFunc;
  setManagementMode: SetManagementModeFunc;
  setSelectedChatMode: SetSelectedChatModeFunc;
  setSelectedModeType: SetSelectedModeTypeFunc;
  setSelectedDetails: SetSelectedDetailsFunc;
  setSelectedChatType: SetSelectedChatTypeFunc;
  setSelectedTabType: SetSelectedTabTypeFunc;
  setSelectedChat: SetSelectedChatFunc;
}

export interface LogoutUserProps {
  setUser: SetUserFunc;
  setUserId: SetUserIdFunc;
  setUsers: SetUsersFunc;
  setManagementAction: SetManagementActionFunc;
  setManagementMode: SetManagementModeFunc;
  setSelectedChatMode: SetSelectedChatModeFunc;
  setSelectedModeType: SetSelectedModeTypeFunc;
  setSelectedDetails: SetSelectedDetailsFunc;
  setSelectedChatType: SetSelectedChatTypeFunc;
  setSelectedTabType: SetSelectedTabTypeFunc;
  setSelectedChat: SetSelectedChatFunc;
}

export interface JwtPayload {
  id: string;
}

