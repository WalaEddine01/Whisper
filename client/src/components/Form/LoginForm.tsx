import { useForm } from 'react-hook-form';
import { Error, FormElement, Input, InputDiv, Submit } from './Form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
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
        {errors.email && <Error>* {errors.email.message}</Error>}
      </InputDiv>
      <InputDiv>
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
        {errors.password && <Error>* {errors.password.message}</Error>}
      </InputDiv>
      <InputDiv>
        <Submit type="submit" value="Login" name="Login" />
      </InputDiv>
    </FormElement>
  );
};

export default LoginForm;

