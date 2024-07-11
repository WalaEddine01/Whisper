import { LogoutUser } from '../../utils/UserEntry';
import { logOut } from '../../utils/requests';
import { socket } from '../../utils/socket';
import toast from 'react-hot-toast';
import useApplicationStore from '../../Hooks/useApplicationStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const {
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
  } = useApplicationStore();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function loggingout() {
      await logOut();
      if (isMounted) {
        LogoutUser({
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
        });
        toast.success('Logged out successfully');
        socket.disconnect();
        navigate('/login');
      }
    }

    loggingout();

    return () => {
      isMounted = false;
    };
  }, [
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
    navigate,
  ]);

  return null;
};

export default Logout;

