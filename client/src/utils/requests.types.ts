import { LoginDataProps } from '../components/Form/Form.types';
import { UseFormSetError } from 'react-hook-form';

export type setIsLoadingFunc = (value: boolean) => void;
export type setErrorFunc = UseFormSetError<LoginDataProps>;

