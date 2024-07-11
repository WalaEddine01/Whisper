import { ChangeEvent, FC, useState } from 'react';
import {
  Error,
  FormElement,
  Image,
  Input,
  InputDiv,
  Submit,
} from './Form.styles';
import { FormProps, SignupDataProps } from './Form.types';
import { sendImage, signUp } from '../../utils/requests';

import { SignUser } from '../../utils/UserEntry';
import { Skeleton } from '@mui/material';
import { socket } from '../../utils/socket';
import toast from 'react-hot-toast';
import useApplicationStore from '../../Hooks/useApplicationStore';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../Hooks/useRequest';

const SignupForm: FC<FormProps> = ({ isLoading, setIsLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignupDataProps>();

  const { getUser, getUsers } = useRequest();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
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
  } = useApplicationStore();
  const navigate = useNavigate();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setImageSrc(result);
        } else {
          console.error('File reading error: result is not a string');
        }
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(data: SignupDataProps) {
    await signUp(data, imageSrc, setIsLoading, setError);
    await sendImage(imageSrc, selectedFile);

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

    socket.emit('newUser');
    navigate('/messages');
    toast.success('Account Created Successfully!');
  }

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        {!isLoading && (
          <Input
            type="text"
            placeholder="Name"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required ',
              },
            })}
          />
        )}
        {isLoading && <Skeleton variant="rectangular" height={64} />}
        {errors.name && <Error>* {errors.name.message}</Error>}
      </InputDiv>
      <InputDiv>
        {!isLoading && (
          <Input
            type="text"
            placeholder="Username"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required ',
              },
            })}
          />
        )}
        {errors.username && <Error>* {errors.username.message}</Error>}
        {isLoading && <Skeleton variant="rectangular" height={64} />}
      </InputDiv>
      <InputDiv>
        {!isLoading && (
          <Input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required ',
              },
            })}
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
              required: {
                value: true,
                message: 'Password is required ',
              },
            })}
          />
        )}
        {errors.password && <Error>* {errors.password.message}</Error>}
        {isLoading && <Skeleton variant="rectangular" height={64} />}
      </InputDiv>
      <InputDiv>
        <input
          type="file"
          style={{ display: 'none' }}
          id="fileInput"
          onChange={handleFileChange}
        />
        <label htmlFor="fileInput">
          <Image>
            {isLoading ? (
              <Skeleton variant="circular" width={64} height={64} />
            ) : (
              <>
                {imageSrc && <img src={imageSrc} alt="Profile Image" />}
                {!imageSrc && <p>+</p>}
              </>
            )}
          </Image>
        </label>
      </InputDiv>
      <InputDiv>
        {!isLoading && <Submit type="submit" value="SignUp" name="SignUp" />}
        {isLoading && (
          <Skeleton variant="rectangular" height={64} width={160} />
        )}
      </InputDiv>
    </FormElement>
  );
};

export default SignupForm;

