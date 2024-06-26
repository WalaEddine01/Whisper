import mongoose from 'mongoose';

const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: false, unique: true },
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

userSchema.statics.login = async function login(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
