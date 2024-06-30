import { Error, FormElement, Image, Input, InputDiv, Submit } from './Form';

import { Skeleton } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../AxiosInstance';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignupForm = ({ isLoading, setIsLoading }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  async function signUp(data) {
    console.log(data);
    setIsLoading(true);
    try {
      // Make POST request using Axios
      const response = await axiosInstance.post(
        '/signup',
        { ...data, imgURL: imageSrc },
        {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
        },
      );

      // Return the response data
      return response.data;
    } catch (error) {
      // Handle errors
      console.error('Error making POST request:', error);
      throw error; // Optional: rethrow or handle differently
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    const res = await signUp(data);
    toast.success('Account Created Successfully!');
    navigate('/login');
    console.log(res);
  }

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        {!isLoading && (
          <Input
            type="text"
            name="name"
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
            name="username"
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
            name="email"
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
            name="password"
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

