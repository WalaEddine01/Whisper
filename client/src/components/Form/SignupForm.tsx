import { useForm } from 'react-hook-form';
import { Error, FormElement, Input, InputDiv, Submit } from './Form';

const SignupForm = () => {
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
      </InputDiv>
      <InputDiv>
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
        {errors.username && <Error>* {errors.username.message}</Error>}
      </InputDiv>
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
        <Submit type="submit" value="SignUp" name="SignUp" />
      </InputDiv>
    </FormElement>
  );
};

export default SignupForm;

