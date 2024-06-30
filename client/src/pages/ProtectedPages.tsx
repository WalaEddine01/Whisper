import React, { useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import useAppStore from '../Store';
import { useNavigate } from 'react-router-dom';

const ProtectedPages = ({ requiredIn, children }) => {
  const userId = useAppStore((state) => state.userId);
  const user = useAppStore((state) => state.user);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && userId && !requiredIn) {
      navigate('/messages');
    } else if ((!user || !userId) && requiredIn) {
      navigate('/login');
    }
    setIsLoading(false);
  }, [userId, requiredIn, navigate, user]);

  if (isLoading) {
    return <CircularProgress />;
  }
  return children;
};

export default ProtectedPages;

