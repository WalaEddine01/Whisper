import { Error, FormElement, Input, InputDiv, Submit } from './Form.styles';
import { FormProps, LoginDataProps } from './Form.types';

import { FC } from 'react';
import { SignUser } from '../../utils/UserEntry';
import { Skeleton } from '@mui/material';
import { logIn } from '../../utils/requests';
import toast from 'react-hot-toast';
import useApplicationStore from '../../Hooks/useApplicationStore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../Hooks/useRequest';

const LoginForm: FC<FormProps> = ({ isLoading, setIsLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginDataProps>();

  const {
    setUserId,
    setUser,
    setUsers,
    setManagementAction,
    setManagementMode,
    setSelectedChatMode,
    setSelectedModeType,
    setSelectedDetails,
    setSelectedChatType,
    setSelectedTabType,
    setSelectedChat,
  } = useApplicationStore();

  const { getUser, getUsers } = useRequest();
  const navigate = useNavigate();

  async function onSubmit(data: LoginDataProps) {
    await logIn(data, setIsLoading, setError);
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
    navigate('/messages');
    toast.success('logged in successfully');
  }

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        {!isLoading && (
          <Input
            type="text"
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
          <Submit type="submit" value="Login" disabled={isLoading} />
        )}
        {isLoading && (
          <Skeleton variant="rectangular" height={64} width={160} />
        )}
      </InputDiv>
    </FormElement>
  );
};

export default LoginForm;

