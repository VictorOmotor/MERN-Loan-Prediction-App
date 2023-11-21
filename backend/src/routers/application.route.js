import { Router } from 'express';
import ApplicationController from '../controllers/application.controller.js';
import { tryCatchHandler } from '../utils/tryCatch.handler.js';
import { userAuthMiddleWare } from '../middlewares/auth.middleware.js';

const router = Router();

router.post(
  '/create',
  userAuthMiddleWare,
  tryCatchHandler(ApplicationController.createApplication),
);
router.get(
  '/get/:applicationId',
  tryCatchHandler(ApplicationController.getApplication),
);

export { router };
