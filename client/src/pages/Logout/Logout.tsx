import { useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import axiosInstance from '../../AxiosInstance';
import useAppStore from '../../Store';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const setUser = useAppStore((state) => state.setUser);
  const setUserId = useAppStore((state) => state.setUserId);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loggingout() {
      await logOut();
      setUser(null);
      setUserId(null); // Clear user state
      setIsLoading(false);
      navigate('/login'); // Redirect to home
    }
    loggingout();
  }, [setUser, navigate]); // Dependencies for the useEffect hook

  async function logOut() {
    try {
      const response = await axiosInstance.get('/logout');
      return response.data;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  if (isLoading) {
    return <CircularProgress />;
  }
  return null;
};

export default Logout;

