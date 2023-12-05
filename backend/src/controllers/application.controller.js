import { BadUserRequestError, NotFoundError } from '../errors/error.js';
import Application from '../models/application.model.js';
import applicationValidator from '../validators/application.validator.js';
import User from '../models/user.model.js';

export default class ApplicationController {
  static async createApplication(req, res) {
    const { error } = applicationValidator.validate(req.body);
    if (error) throw error;
    const {
      applicantName,
      bvn,
      gender,
      coApplicantIncome,
      creditBalance,
      lastLoanAmount,
      salaryEarner,
      creditDebitRatio,
      creditScore,
      creditHistory,
      loanType,
      loanDuration,
      loanAmount,
      education,
      maritalStatus,
      selfEmployed,
      dependents,
      nextOfKinPhone,
      workAddress,
      phone,
      contactAddress,
      stateOfOrigin,
      dob,
      applicantIncome,
    } = req.body;
    const userId = req.user._id;
    const existingUser = await User.findById(userId);
    if (!existingUser)
      throw new NotFoundError('User not found in the database!');
    const existingApplication = await Application.findOne({ phone });
    if (existingApplication)
      throw new BadUserRequestError(
        'Applicant with this phone number already exists',
      );
    const parsedApplicantIncome = parseInt(applicantIncome, 10);
    const parsedCoApplicantIncome = parseInt(coApplicantIncome, 10);
    const parsedCreditHistory = parseInt(creditHistory, 10);
    const parsedSalaryEarner = salaryEarner === 'true';
    const parsedSelfEmployed = selfEmployed === 'true';
    const parsedCreditBalance = +creditBalance;
    const parsedCreditScore = +creditScore;
    const parsedLoanAmount = +loanAmount;
    const parsedLastLoanAmount = +lastLoanAmount;
    const parsedCreditDebitRatio = +creditDebitRatio;
    
    if (
      parsedApplicantIncome > parsedCoApplicantIncome ||
      parsedApplicantIncome * 3 < parsedLoanAmount ||
      (parsedSalaryEarner === false && parsedSelfEmployed === false) ||
      // parsedCreditBalance * 5 > parsedLoanAmount ||
      // parsedCreditDebitRatio > 30 ||
      (parsedCreditScore > 250 && parsedCreditScore < 700) ||
      // parsedLastLoanAmount > parsedCreditBalance * 5 ||
      parsedCoApplicantIncome * 1.5 < parsedLoanAmount
    ) {
      const application = new Application({
        applicantName,
        bvn,
        gender,
        coApplicantIncome,
        creditBalance,
        lastLoanAmount,
        salaryEarner,
        creditDebitRatio,
        creditScore,
        creditHistory,
        loanType,
        loanDuration,
        loanAmount,
        education,
        maritalStatus,
        selfEmployed,
        dependents,
        nextOfKinPhone,
        workAddress,
        phone,
        contactAddress,
        stateOfOrigin,
        dob,
        applicantIncome,
        user: userId,
        status: 'rejected',
        lastLoanDate: req.body.lastLoanDate
      });
      await application.save();
      res.status(201).json(application);
    } else if (
      (parsedCreditHistory === 0 && parsedCreditDebitRatio === 0) ||
      parsedCreditScore <= 250 ||
      (parsedLastLoanAmount === 0 && parsedCreditBalance === 0) ||
      (parsedSalaryEarner === false && parsedSelfEmployed === true)
    ) {
      const application = new Application({
        applicantName,
        bvn,
        gender,
        coApplicantIncome,
        creditBalance,
        lastLoanAmount,
        salaryEarner,
        creditDebitRatio,
        creditScore,
        creditHistory,
        loanType,
        loanDuration,
        loanAmount,
        education,
        maritalStatus,
        selfEmployed,
        dependents,
        nextOfKinPhone,
        workAddress,
        phone,
        contactAddress,
        stateOfOrigin,
        dob,
        applicantIncome,
        user: userId,
        status: 'pending',
        lastLoanDate: req.body.lastLoanDate
      });
      await application.save();
      res.status(201).json(application);
    } else {
      const application = new Application({
        applicantName,
        bvn,
        gender,
        coApplicantIncome,
        creditBalance,
        lastLoanAmount,
        salaryEarner,
        creditDebitRatio,
        creditScore,
        creditHistory,
        loanType,
        loanDuration,
        loanAmount,
        education,
        maritalStatus,
        selfEmployed,
        dependents,
        nextOfKinPhone,
        workAddress,
        phone,
        contactAddress,
        stateOfOrigin,
        dob,
        applicantIncome,
        user: userId,
        status: 'approved',
        lastLoanDate: req.body.lastLoanDate
      });
      await application.save();
      res.status(201).json(application);
    }
  }

  static async getApplication(req, res) {
    const applicationId = req.params.applicationId;
    const application = await Application.findOne({ applicationId });
    if (!application) throw new NotFoundError('Application not found');
    res.status(200).json(application);
  }

  static async getAllApplications(req, res) {
    const userId = req.user._id;
    const applications = await Application.find({ user: userId });
    if (applications.length < 1)
      throw new NotFoundError('Application not found');
    res.status(200).json(applications);
  }
}
