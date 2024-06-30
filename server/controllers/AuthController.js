import { User } from '../models/user';
import jwt from 'jsonwebtoken';

const ErrorHandler = (err) => {
  console.log(err.message, err.code);
  const errors = { email: '', password: '', username: '' };

  if (
    err.message === 'incorrect email' ||
    err.message === 'incorrect username'
  ) {
    const field = err.message.split(' ')[1];
    errors[field] = `That ${field} is not registered`;
  }

  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  if (err.message === 'Password must be provided') {
    errors.password = 'Please enter your password';
  }

  if (err.code === 11000) {
    if (err.keyPattern.email) {
      errors.email = 'That email is already registered';
    }
    if (err.keyPattern.username) {
      errors.username = 'That username is already taken';
    }
  }

  // Handle validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
const exDate = 10000;
const createToken = (id) =>
  jwt.sign({ id }, 'a secret to change later', { expiresIn: exDate });

class AuthController {
  static async signupPost(request, response) {
    try {
      const { email, password, username } = request.body;
      const newUser = await User.create({ email, password, username });
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
    const { username, email, password } = request.body;
    let loginCredential;

    if (username) {
      loginCredential = username;
    } else if (email) {
      loginCredential = email;
    }

    try {
      const user = await User.login(loginCredential, password);
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

