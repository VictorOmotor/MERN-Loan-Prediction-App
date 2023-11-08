import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
import { tryCatchHandler } from '../utils/tryCatch.handler.js';
import { userAuthMiddleWare } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/signup', tryCatchHandler(UserController.registerUserWithId));
router.post('/verifyotp', tryCatchHandler(UserController.verifyOtp));
router.post('/register', tryCatchHandler(UserController.registerUser));
router.post('/login', tryCatchHandler(UserController.loginUser));
router.get('/logout', tryCatchHandler(UserController.logout));
router.get('/loginstatus', tryCatchHandler(UserController.getLoginStatus));

router.get('/', userAuthMiddleWare, tryCatchHandler(UserController.getUser));

router.post('/forgotpassword', tryCatchHandler(UserController.forgotPassword));
router.post(
  '/resetpassword/security-question',
  tryCatchHandler(UserController.resetPasswordQuestion),
);
router.get(
  '/resetpassword/verify/:resetToken',
  tryCatchHandler(UserController.verifyResetPasswordToken),
);
router.post('/resetpassword', tryCatchHandler(UserController.resetPassword));

// router.delete('/deleteall', tryCatchHandler(UserController.deleteAll))

export { router };
