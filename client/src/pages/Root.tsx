import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import useAppStore from '../Store';
import { useEffect } from 'react';

const Root = () => {
  const setIsSmall = useAppStore((state) => state.setIsSmall);
  const location = useLocation();
  const shouldHideNavbar = location.pathname === '/messages';

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmall(true);
      console.log('laa');
    } else {
      setIsSmall(false);
      document.body.style.paddingTop = 'var(--navHeight)';
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;

