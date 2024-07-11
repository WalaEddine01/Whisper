import FormPage from '../../components/Form/FormPage';
import signupSVG from './SignupSVG';

const Signup = () => {
  return (
    <FormPage
      svg={signupSVG}
      head="Sign up To Whisper!"
      secondaryText="Already have an account?"
      redirectText="Login"
      redirectLink="/login"
      type="signup"
    />
  );
};

export default Signup;

