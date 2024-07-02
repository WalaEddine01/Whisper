import { GET_CURRENT_USER, GET_USERS } from '../GraphQl/queries';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import Navbar from '../components/Navbar/Navbar';
import { initializeSocket } from '../utils/socket';
import { jwtDecode } from 'jwt-decode';
import useAppStore from '../Store';
import { useLazyQuery } from '@apollo/client';

const Root = () => {
  const state = useAppStore((state) => state);
  const user = useAppStore((state) => state.user);
  const setUserId = useAppStore((state) => state.setUserId);
  const setUser = useAppStore((state) => state.setUser);
  const setIsSmall = useAppStore((state) => state.setIsSmall);
  const location = useLocation();
  const [getUser] = useLazyQuery(GET_CURRENT_USER, {
    fetchPolicy: 'no-cache',
  });
  const [getUsers] = useLazyQuery(GET_USERS, {
    fetchPolicy: 'no-cache',
  });
  const shouldHideNavbar = location.pathname === '/messages';

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
      document.body.style.paddingTop = 'var(--navHeight)';
    }
  };

  const [isLoadingToken, setIsLoadingToken] = useState(true);
  const setUsers = useAppStore((state) => state.setUsers);
  const setManagementAction = useAppStore((state) => state.setManagementAction);
  const setManagementMode = useAppStore((state) => state.setManagementMode);
  const setSelectedChatMode = useAppStore((state) => state.setSelectedChatMode);
  const setSelectedModeType = useAppStore((state) => state.setSelectedModeType);
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const setSelectedChatType = useAppStore((state) => state.setSelectedChatType);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsLoadingToken(true);
    const token = Cookies.get('jwt');

    const fetchData = async () => {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
        initializeSocket(decodedToken.id);

        const { data } = await getUser({
          variables: { id: decodedToken.id },
        });

        const { data: usersData } = await getUsers();

        setUser(data.user);
        setUsers(usersData.users);
        setManagementAction(false);
        setManagementMode(false);
        setSelectedChatMode(null);
        setSelectedModeType('yours');
        setSelectedDetails(null);
        setSelectedChatType(null);
        setSelectedTabType('direct');
        setSelectedChat(null);
        setIsLoadingToken(false);
      } catch (error) {
        console.error('Invalid token:', error);
        setIsLoadingToken(false);
      }
    };

    fetchData();
  }, []); // Run effect when token changes

  return (
    <>
      {isLoadingToken && 'Loading.....'}
      {!isLoadingToken && (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Root;

