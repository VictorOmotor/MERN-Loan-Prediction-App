import {
  registerUserIdValidator,
  loginUserValidator,
  registerUserValidator,
  resetPasswordValidator,
} from '../validators/user.validator.js';
import {
  BadUserRequestError,
  NotFoundError,
  UnAuthorizedError,
} from '../errors/error.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { config } from '../config/index.js';
import { generateToken, verifyToken } from '../utils/jwt.utils.js';
import { sendEmail } from '../utils/sendEmail.js';
import crypto from 'crypto';

export default class UserController {
  static async registerUserWithId(req, res) {
    const { error } = registerUserIdValidator.validate(req.body);
    if (error) throw error;
    const { companyId, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (existingUser.isVerified) {
        throw new BadUserRequestError(`Account already exists. Please login`);
      } else {
        await User.deleteOne({ _id: existingUser._id });
      }
    }
    const signUpOtp = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(signUpOtp);
    const user = new User({
      companyId,
      email,
      signUpOtp,
    });
    await user.save();
    
    const message = `Hi,\n\n Your Otp is: ${signUpOtp}`;

    const mailSent = await sendEmail({
      email: user.email,
      subject: 'Registration OTP',
      message,
    });
    if (mailSent === false)
      throw new NotFoundError(
        `${email} cannot be reached. Please provide a valid email address`,
      );
    res.status(200).json({
      message: `An email has been sent to ${email}`,
    });
  }

  static async verifyOtp(req, res) {
    const { signUpOtp } = req.body;
    const user = await User.findOne({ signUpOtp });
    if (!user) throw new UnAuthorizedError('Invalid OTP');
    res.status(200).json({
      status: 'Success',
      message: 'OTP Verified',
      user,
    });
  }

  static async registerUser(req, res) {
    const { error } = registerUserValidator.validate(req.body);
    if (error) throw error;
    const {
      firstName,
      surname,
      password,
      securityQuestion,
      securityAnswer,
      signUpOtp,
    } = req.body;
    const validUser = await User.findOne({ signUpOtp });
    if (!validUser) throw new UnAuthorizedError('Invalid OTP');
    const saltRounds = config.bycrypt_salt_round;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const token = generateToken(validUser);
    validUser.firstName = firstName;
    validUser.surname = surname;
    validUser.password = hashedPassword;
    validUser.signUpOtp = null;
    validUser.isVerified = true;
    validUser.accessToken = token;
    validUser.securityQuestion = securityQuestion;
    validUser.securityAnswer = securityAnswer;
    await validUser.save();
    const user = validUser.toObject();
    delete user.password;
    const maxAge = config.cookie_max_age;
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge,
    });
    res.status(201).json({
      status: 'Success',
      message: 'User created successfully',
      user,
    });
  }

  static async loginUser(req, res) {
    const { error } = loginUserValidator.validate(req.body);
    if (error) throw new BadUserRequestError('Invalid login details');
    const { email, password } = req.body;
    const validUser = await User.findOne({ email }).select('+password');
    if (!validUser) throw new UnAuthorizedError('Invalid login details');
    const isMatch = bcrypt.compareSync(password, validUser.password);
    if (!isMatch) throw new UnAuthorizedError('Invalid login details');
    const token = generateToken(validUser);
    validUser.accessToken = token;
    await validUser.save();
    const user = validUser.toObject();
    delete user.password;
    const maxAge = config.cookie_max_age;
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge,
    });

    res.status(200).json({
      status: 'Success',
      message: 'Login successful',
      user,
    });
  }

  static async logout(req, res) {
    const userId = req.user._id;
    const user = await User.findById(userId);
    user.accessToken = null;
    await user.save();
    res.cookie('access_token', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(0),
    });
    res.status(200).json({
      status: 'Success',
      message: 'Logout successful',
    });
  }

  static async getUser(req, res) {
    const userId = req.user._id;
    // const id = req.params.id
    // if (userId !== id) throw new UnAuthorizedError('Unauthorized!')
    const user = await User.findById(userId).select('-password');
    if (!user) throw new NotFoundError('User not found');
    res.status(200).json({
      status: 'Success',
      user,
    });
  }

  static async getLoginStatus(req, res) {
    const token = req.cookies.access_token;
    const verified = verifyToken(token);
    if (verified) {
      res.json(true);
    } else {
      res.json(false);
    }
  }

  static async forgotPassword(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError('User Not Found');
    res.status(200).json({
      status: 'Success',
    });
  }

  static async resetPasswordQuestion(req, res) {
    const { email, securityQuestion, securityAnswer } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError('User Not Found');
    if (
      securityQuestion !== user.securityQuestion ||
      securityAnswer !== user.securityAnswer
    )
      throw new UnAuthorizedError('Wrong Security Details');
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    await user.save();
    const resetPasswordUrl = `${req.protocol}://${req.get(
      'host',
    )}/api/user/resetpassword/verify/${resetToken}`;
    console.log(resetPasswordUrl);
    const message = `Hello ${user.firstName},\n\nPlease click on the following link to reset your password: ${resetPasswordUrl}\n\nPlease ignore this message if this request did not emanate from you.\n\nThank you.`;

    const mailSent = await sendEmail({
      email: user.email,
      subject: 'Reset Password Link',
      message,
    });
    if (mailSent === false)
      throw new NotFoundError(
        `${email} cannot be reached. Please provide a valid email address`,
      );
    res.status(200).json({
      message: `An password reset link has been sent to ${email}`,
    });
  }

  static async verifyResetPasswordToken(req, res) {
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resetToken)
      .digest('hex');
    const user = await User.findOne({ resetPasswordToken });
    if (!user) throw new BadUserRequestError('Invalid Reset Token');
    res.status(200).json({
      status: 'Success',
      message: 'Verified',
    });
  }

  static async resetPassword(req, res) {
    const { error } = resetPasswordValidator.validate(req.body);
    if (error) throw error;
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser) throw new NotFoundError('User Not Found');
    const saltRounds = config.bycrypt_salt_round;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const token = generateToken(validUser);
    validUser.password = hashedPassword;
    validUser.accessToken = token;
    validUser.resetPasswordToken = null;
    await validUser.save();
    const user = validUser.toObject();
    delete user.password;
    const maxAge = config.cookie_max_age;
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge,
    });

    res.status(200).json({
      status: 'Success',
      message: 'Password reset successful',
      user,
    });
  }

  // static async deleteAll(req, res) {
  //   const users =  await User.find()
  //   if(users.length < 1) throw new NotFoundError('No user found')
  //   const deleteUsers = await User.deleteMany()
  //   res.status(200).json({
  //     status: "All users delete successfully",
  //   })
  // }
}
