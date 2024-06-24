import mongoose from 'mongoose';

const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Add your email Adress'],
    unique: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'You need a password'],
    minlength: [8, 'your password should be at list 8 letter long'],
  },
  isVerfied: {
    type: Boolean, default: false,
  },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'users' });

userSchema.pre('save', async function hashPassword(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.static.login = async function login(email, password) {
  const user = this.findone({ email });
  if (user) {
    const isValidPwd = bcrypt.compare(password, user.password);
    if (isValidPwd) {
      return user;
    }
    throw Error('incorrect email');
  }
  throw Error('incorrect password');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
