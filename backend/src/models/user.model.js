import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    surname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      trim: true,
      select: false,
    },
    companyId: {
      type: String,
      trim: true,
      unique: true,
    },
    securityQuestion: {
      type: String,
      trim: true,
      enum: ['Where did you meet your spouse', 'When is your next birthday'],
    },
    securityAnswer: {
      type: String,
      trim: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    signUpOtp: {
      type: String,
      default: null,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default model('User', UserSchema);
