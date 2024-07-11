import { LoginDataProps, SignupDataProps } from '../components/Form/Form.types';
import { setErrorFunc, setIsLoadingFunc } from './requests.types';

import { AxiosError } from 'axios';
import axiosInstance from '../AxiosInstance';
import toast from 'react-hot-toast';

export async function signUp(
  data: SignupDataProps,
  imageSrc: string,
  setIsLoading: setIsLoadingFunc,
  setError: setErrorFunc,
) {
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
    // setError()
    const axiosError = error as AxiosError; // Cast error to AxiosError

    const errors = JSON.parse(axiosError.request.responseText);
    console.log(errors);

    for (const key in errors) {
      if (errors[key]) {
        setError(key as 'email' | 'password' | 'root.${string}' | 'root', {
          message: errors[key],
          type: 'error',
        });
      }
    }

    toast.error('Signup Failed');
    throw error; // Optional: rethrow or handle differently
  } finally {
    setIsLoading(false);
  }
}

export async function sendImage(imageSrc: string, selectedFile: File | null) {
  if (imageSrc) {
    try {
      const formData = new FormData();
      formData.append('photo', selectedFile || '');

      const response = await axiosInstance.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);
      // Handle success, e.g., show a success message or update state
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error, e.g., show an error message to the user
    }
  }
}

export async function logIn(
  data: LoginDataProps,
  setIsLoading: setIsLoadingFunc,
  setError: setErrorFunc,
) {
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
    const axiosError = error as AxiosError; // Cast error to AxiosError
    setIsLoading(false);
    console.error('Error making POST request:', error);

    const errors = JSON.parse(axiosError.request.responseText);

    for (const key in errors) {
      if (errors[key]) {
        setError(key as 'email' | 'password' | 'root.${string}' | 'root', {
          message: errors[key],
          type: 'error',
        });
      }
    }

    toast.error('Login Failed');
    throw error;
  }
}

export async function logOut() {
  try {
    const response = await axiosInstance.get('/logout');
    return response.data;
  } catch (error) {
    console.error('Error making POST request:', error);
    throw error;
  }
}

