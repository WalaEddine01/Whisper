import { useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { PageLoaderFull } from './Loaders.styles';

const PageLoader = () => {
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case 'Loading':
            return 'Loading.';
          case 'Loading.':
            return 'Loading..';
          case 'Loading..':
            return 'Loading...';
          case 'Loading...':
            return 'Loading';
          default:
            return 'Loading';
        }
      });
    }, 500); // Interval in milliseconds (e.g., 500ms for half a second)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const size = window.innerWidth <= 300 ? '10vh' : '20vh';

  return (
    <PageLoaderFull>
      <CircularProgress
        style={{
          color: 'var(--secondaryColor)',
          width: size,
          height: size,
        }}
      />
      <p>{loadingText}</p>
    </PageLoaderFull>
  );
};

export default PageLoader;

