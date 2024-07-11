import { FC, useEffect, useState } from 'react';

import PageLoader from '../../components/Loaders/PageLoader';
import { ProtectedPagesProps } from './ProtectedPages.types';
import useApplicationStore from '../../Hooks/useApplicationStore';
import { useNavigate } from 'react-router-dom';

const ProtectedPages: FC<ProtectedPagesProps> = ({ requiredIn, children }) => {
  const { userId, user, isLoadingToken } = useApplicationStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoadingToken) {
      if (user && userId && !requiredIn) {
        navigate('/messages');
      } else if ((!user || !userId) && requiredIn) {
        navigate('/login');
      }
      setIsLoading(false);
    }
  }, [isLoadingToken]);

  if (isLoading) {
    return <PageLoader />;
  }

  return children;
};

export default ProtectedPages;

