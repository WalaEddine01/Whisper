import {
  GetUserFunction,
  GetUsersFunc,
  JwtPayload,
  LogoutUserProps,
  SignUserParams,
} from './UserEntry.types';
import { initializeSocket, socket } from './socket';

import { ChatRoom } from '../slices/Slices.types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export async function SignUser(
  getUser: GetUserFunction,
  getUsers: GetUsersFunc,
  {
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
  }: SignUserParams,
) {
  const token = Cookies.get('jwt') || '';
  const decodedToken = jwtDecode(token) as JwtPayload;

  setUserId(decodedToken.id);
  initializeSocket(decodedToken.id);

  const { data: userData } = await getUser({
    variables: { id: decodedToken.id },
  });

  const { data: usersData } = await getUsers();

  setUser(userData.user);
  setUsers(usersData.users);
  setManagementAction(false);
  setManagementMode(false);
  setSelectedChatMode(null);
  setSelectedModeType('yours');
  setSelectedDetails(null);
  setSelectedChatType(null);
  setSelectedTabType('direct');
  setSelectedChat(null);

  userData.user.chatRooms.map((chatRoom: ChatRoom) => {
    socket.emit('joinChatRoom', chatRoom.id);
  });
}

export function LogoutUser({
  setUser,
  setUserId,
  setUsers,
  setSelectedChat,
  setSelectedChatType,
  setSelectedChatMode,
  setSelectedTabType,
  setSelectedModeType,
  setSelectedDetails,
  setManagementMode,
  setManagementAction,
}: LogoutUserProps) {
  setUser(null);
  setUserId(null);
  setUsers(null);
  setSelectedChat(null);
  setSelectedChatType(null);
  setSelectedChatMode(null);
  setSelectedTabType('direct');
  setSelectedModeType('yours');
  setSelectedDetails(null);
  setManagementMode(false);
  setManagementAction(null);
}

