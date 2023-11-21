import Joi from 'joi';

const applicationValidator = Joi.object({
  creditScore: Joi.number().required(),
  creditHistory: Joi.number().required(),
  creditDebitRatio: Joi.number().required(),
  salaryEarner: Joi.boolean().required(),
  applicantIncome: Joi.number().required(),
  coApplicantIncome: Joi.number().required(),
  lastLoanDate: Joi.date(),
  creditBalance: Joi.number().required(),
  loanAmount: Joi.number().required(),
  lastLoanAmount: Joi.number(),
  loanDuration: Joi.date().required(),
  loanType: Joi.string().required(),
  dependents: Joi.number(),
  selfEmployed: Joi.boolean().required(),
  maritalStatus: Joi.string().required(),
  education: Joi.string().required(),
  applicantName: Joi.string().required(),
  bvn: Joi.number().required(),
  gender: Joi.string().required(),
  dob: Joi.date().required(),
  stateOfOrigin: Joi.string().required(),
  contactAddress: Joi.string().required(),
  workAddress: Joi.string().required(),
  phone: Joi.string().required(),
  nextOfKinPhone: Joi.string().required(),
});

export default applicationValidator;
