import { Error, FormElement, Input, InputDiv, Submit } from './Form';
import { GET_CURRENT_USER, GET_USERS } from '../../GraphQl/queries';
import { useLocation, useNavigate } from 'react-router-dom';

import { Skeleton } from '@mui/material';
import axiosInstance from '../../AxiosInstance';
import { client } from '../../graphqlClient';
import toast from 'react-hot-toast';
import useAppStore from '../../Store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';

const LoginForm = ({ isLoading, setIsLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const setUserId = useAppStore((state) => state.setUserId);
  const userId = useAppStore((state) => state.userId);
  const setUser = useAppStore((state) => state.setUser);
  const setUsers = useAppStore((state) => state.setUsers);
  const location = useLocation();
  const shouldRedirect = location.pathname === '/login';
  const user = useAppStore((state) => state.user);

  const setManagementAction = useAppStore((state) => state.setManagementAction);
  const setManagementMode = useAppStore((state) => state.setManagementMode);
  const setSelectedChatMode = useAppStore((state) => state.setSelectedChatMode);
  const setSelectedModeType = useAppStore((state) => state.setSelectedModeType);
  const setSelectedDetails = useAppStore((state) => state.setSelectedDetails);
  const setSelectedChatType = useAppStore((state) => state.setSelectedChatType);
  const setSelectedTabType = useAppStore((state) => state.setSelectedTabType);
  const setSelectedChat = useAppStore((state) => state.setSelectedChat);

  const {
    loading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(GET_USERS);
  const {
    loading: userLoading,
    error: userError,
    data: userData,
    refetch,
  } = useQuery(GET_CURRENT_USER, {
    variables: { id: userId },
  });

  useEffect(() => {
    if (user) {
      toast.success('Logged In Successfully!');
      navigate('/messages');
    }
  }, [user]);

  useEffect(() => {
    if (userData && shouldRedirect) {
      setUser(userData.user);
    }
  }, [userData]);

  async function onSubmit(data) {
    try {
      const res = await logIn(data);
      console.log(res);
      setUserId(res.user);
      setUsers(usersData.users);
      setManagementAction(false);
      setManagementMode(false);
      setSelectedChatMode(null);
      setSelectedModeType('yours');
      setSelectedDetails(null);
      setSelectedChatType(null);
      setSelectedTabType('direct');
      setSelectedChat(null);
      refetch();
    } catch (error) {
      toast.error('Login failed!');
      console.error(error);
    }
  }

  async function logIn(data) {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  // if (usersLoading || userLoading) return <p>Loading...</p>;
  // if (usersError || userError) return <p>Error loading data</p>;

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        {!isLoading && (
          <Input
            type="text"
            name="email"
            placeholder="Email"
            {...register('email', {
              required: { value: true, message: 'Email is required' },
            })}
            disabled={isLoading}
          />
        )}
        {errors.email && <Error>* {errors.email.message}</Error>}
        {isLoading && <Skeleton variant="rectangular" height={64} />}
      </InputDiv>
      <InputDiv>
        {!isLoading && (
          <Input
            type="password"
            name="password"
            placeholder="Password"
            {...register('password', {
              required: { value: true, message: 'Password is required' },
            })}
            disabled={isLoading}
          />
        )}
        {errors.password && <Error>* {errors.password.message}</Error>}
        {isLoading && <Skeleton variant="rectangular" height={64} />}
      </InputDiv>
      <InputDiv>
        {!isLoading && (
          <Submit
            type="submit"
            value="Login"
            name="Login"
            disabled={isLoading}
          />
        )}
        {isLoading && (
          <Skeleton variant="rectangular" height={64} width={160} />
        )}
      </InputDiv>
    </FormElement>
  );
};

export default LoginForm;

