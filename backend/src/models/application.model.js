import { Schema, model, Types } from 'mongoose';

const ApplicationSchema = new Schema(
  {
    creditScore: {
      type: Number,
      required: true,
    },
    creditHistory: {
      type: Number,
      required: true,
    },
    creditDebitRatio: {
      type: Number,
      required: true,
    },
    salaryEarner: {
      type: Boolean,
      required: true,
    },
    applicantIncome: {
      type: Number,
      required: true,
    },
    coApplicantIncome: {
      type: Number,
      required: true,
    },
    lastLoanAmount: {
      type: Number,
    },
    lastLoanDate: {
      type: Date,
    },
    creditBalance: {
      type: Number,
      required: true,
    },
    loanAmount: {
      type: Number,
      required: true,
    },
    loanDuration: {
      type: Date,
      required: true,
    },
    loanType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['approved', 'rejected', 'pending'],
    },
    dependents: Number,
    selfEmployed: {
      type: Boolean,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    applicantName: {
      type: String,
      required: true,
    },
    bvn: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    stateOfOrigin: {
      type: String,
      required: true,
    },
    contactAddress: {
      type: String,
      required: true,
    },
    workAddress: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    nextOfKinPhone: {
      type: String,
      required: true,
      unique: true,
    },
    applicationId: {
      type: Number,
      unique: true,
      min: 1000000000,
      max: 9999999999,
    },
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
ApplicationSchema.pre('save', function (next) {
  this.applicationId = Math.floor(Math.random() * 900000000 + 100000000);
  next();
});
export default model('Application', ApplicationSchema);
