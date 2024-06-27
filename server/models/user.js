import mongoose from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: () => `user_${uuidv4()}`,
  },
  email: {
    type: String,
    required: [true, 'Add your email Adress'],
    unique: [true, 'This email is already registered'],

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
  chatRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' }],
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
