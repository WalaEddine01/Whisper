import FormPage from '../../components/Form/FormPage';
import LoginSVG from './LoginSVG';

const Login = () => {
  return (
    <FormPage
      svg={LoginSVG}
      head="Log In"
      secondaryText="Don't have an account?"
      redirectText="Signup"
      redirectLink="/signup"
      type="login"
    />
  );
};

export default Login;

