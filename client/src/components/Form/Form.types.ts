import { ReactNode } from 'react';

export interface FormPageProps {
  svg: ReactNode;
  head: string;
  secondaryText: string;
  redirectText: string;
  redirectLink: string;
  type: 'login' | 'signup';
}

export interface FormProps {
  isLoading: boolean;
  setIsLoading(value: boolean): void;
}

export interface LoginDataProps {
  email: string;
  password: string;
}

export interface SignupDataProps {
  name: string;
  username: string;
  email: string;
  password: string;
}

