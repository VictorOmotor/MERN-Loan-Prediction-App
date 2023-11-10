import Joi from 'joi';

export const registerUserIdValidator = Joi.object({
  companyId: Joi.string().required(),
  email: Joi.string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Email is not a valid email format/address',
    }),
}).strict();

export const registerUserValidator = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  surname: Joi.string().required(),
  password: Joi.string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/,
    )
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one number and at least 6 characters long',
    }),
  securityQuestion: Joi.string().required(),
  securityAnswer: Joi.string().required(),
}).strict();

export const securityQuestionValidator = Joi.object({
  email: Joi.string().required(),
}).strict();
export const loginUserValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).strict();

export const resetPasswordValidator = Joi.object({
  password: Joi.string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()~¥=_+}{":;'?/>.<,`\-\|\[\]]{6,50}$/,
    )
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one number and at least 6 characters long',
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': `Password does not match` }),
}).strict();
