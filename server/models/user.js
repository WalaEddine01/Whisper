import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'You need a username to sign up'],
    unique: [true, 'This username is already taken'],
    minlength: [4, 'Your username should be at least 4 letters long'],
    validate: {
      validator: function(v) {
        return validator.isAlphanumeric(v, 'en-US', { ignore: '_-' });
      },
      message: 'Usernames must be alphanumeric and can include underscores and hyphens.'
    }
  },
  email: {
    type: String,
    required: [true, 'Add your email address'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
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

userSchema.statics.login = async function login(loginCredential, password) {
  if (!password) {
    throw Error('Password must be provided');
  }

  const isEmail = loginCredential.includes('@');
  let query = isEmail ? { email: loginCredential } : { username: loginCredential };

  const user = await this.findOne(query);
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error(isEmail ? 'incorrect email' : 'incorrect username');
};

const User = mongoose.model('User', userSchema);

export { User, userSchema };
