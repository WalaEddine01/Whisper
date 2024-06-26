import mongoose from 'mongoose';

const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Set to true if you always want a username to be generated
    default: () => `user_${uuidv4()}`, // Generate a default username combining 'user_' with a UUID
  },
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

export { User, userSchema };
