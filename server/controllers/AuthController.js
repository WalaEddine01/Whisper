import { User } from '../models/user';
import jwt from 'jsonwebtoken';

const ErrorHandler = (err) => {
  console.log(err.message, err.code);
  const errors = { email: '', password: '' };

  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const exDate = 10000;
const createToken = (id) => jwt.sign({ id }, 'a screte to change latter', { expiresIn: exDate });

class AuthController {
  static async signupPost(request, response) {
    try {
      const { email, password } = request.body;
      const newUser = await User.create({ email, password });
      const token = createToken(newUser._id);
      response.cookie('jwt', token, { httpOnly: true, maxAge: exDate * 1000 });
      response.status(201).json({ user: newUser._id });
    } catch (err) {
      const errorJson = ErrorHandler(err);
      response.status(400).json(errorJson);
    }
  }

  static async logout(request, response) {
    response.cookie('jwt', '', { maxAge: 1 });
    response.status(201).json({ msg: '' });
  }

  static async loginPost(request, response) {
    const { email, password } = request.body;
    try {
      const user = await User.login(email, password);
      console.log(user);
      console.log(user.email);
      console.log(user.password);
      const token = createToken(user._id);
      response.cookie('jwt', token, { httpOnly: true, maxAge: exDate * 1000 });
      response.status(201).json({ user: user._id });
    } catch (err) {
      const errorJson = ErrorHandler(err);
      response.status(400).json(errorJson);
    }
  }
}

module.exports = AuthController;
