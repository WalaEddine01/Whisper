import { useCallback, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import PageLoader from '../../components/Loaders/PageLoader';
import { SignUser } from '../../utils/UserEntry';
import useApplicationStore from '../../Hooks/useApplicationStore';
import useRequest from '../../Hooks/useRequest';

const Root = () => {
  const {
    setUserId,
    setUser,
    setIsSmall,
    setUsers,
    setManagementAction,
    setManagementMode,
    setSelectedChatMode,
    setSelectedModeType,
    setSelectedDetails,
    setSelectedChatType,
    setSelectedTabType,
    setSelectedChat,
    setIsLoadingToken,
    isLoadingToken,
  } = useApplicationStore();
  const { getUser, getUsers } = useRequest();

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
      document.body.style.paddingTop = '80px';
    }
  }, [setIsSmall]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingToken(true);
      try {
        await SignUser(getUser, getUsers, {
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
        });
      } catch (error) {
        console.error('Invalid token:', error);
      } finally {
        setIsLoadingToken(false);
      }
    };

    fetchData();
  }, [
    getUser,
    getUsers,
    setUserId,
    setUsers,
    setManagementAction,
    setIsLoadingToken,
    setManagementMode,
    setSelectedChat,
    setSelectedChatMode,
    setSelectedChatType,
    setSelectedDetails,
    setSelectedModeType,
    setSelectedTabType,
    setUser,
  ]);

  return (
    <>
      {isLoadingToken && <PageLoader />}
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

