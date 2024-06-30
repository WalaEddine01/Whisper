import { Error, FormElement, Input, InputDiv, Submit } from './Form';

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

  async function signUp(data) {
    console.log(data);
    setIsLoading(true);
    try {
      // Make POST request using Axios
      const response = await axiosInstance.post('/signup', data, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
      });

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
      {/* <InputDiv>
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
        {errors.name && <Error>* {errors.name.message}</Error>}
      </InputDiv> */}
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
        {!isLoading && <Submit type="submit" value="SignUp" name="SignUp" />}
        {isLoading && (
          <Skeleton variant="rectangular" height={64} width={160} />
        )}
      </InputDiv>
    </FormElement>
  );
};

export default SignupForm;

