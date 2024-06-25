import useAppStore from '../../Store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const setUser = useAppStore((state) => state.setUser);

  useEffect(() => {
    setUser(null); // Clear user state
    navigate('/'); // Redirect to home
  }, [setUser, navigate]); // Dependencies for the useEffect hook

  return null;
};

export default Logout;

