import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/Landing/About';
import HelpCentre from './pages/Landing/HelpCentre';
import Onboarding from './pages/Onboard/Onboarding';
import Otp from './pages/Onboard/Otp';
import SignUpWithId from './pages/Onboard/SignUpWithId';
import SignUpWithPassword from './pages/Onboard/SignUpWithPassword';
import ResetPassSecQues from './pages/Onboard/ResetPassSecQues';
import SignUpSecurityQuestion from './pages/Onboard/SignUpSecurityQuestion';
import ForgotPassword from './pages/Onboard/ForgotPassword';
import ResetPassword from './pages/Onboard/ResetPassword';
import Login from './pages/Onboard/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ApplicationDetails from './pages/Dashboard/ApplicationDetails';
import AllApplications from './pages/Application/AllApplications';
import ApprovedApplications from './pages/Application/ApprovedApplications';
import RejectedApplications from './pages/Application/RejectedApplications';
import PendingApplications from './pages/Application/PendingApplications';
import ApplicantContactInfo from './pages/Application/ApplicantContactInfo';
import NewAppFinHistory from './pages/Application/NewAppFinHistory';
import NewAppLoanInfo from './pages/Application/NewAppLoanInfo';
import NewAppContact from './pages/Application/NewAppContact';
import ApplicantPredInfo from './pages/Application/ApplicantPredInfo';
import GeneralAnalytics from './pages/Analytics/GeneralAnalytics';
import AppOverview from './pages/Application/AppOverview';
import Cashflow from './pages/Application/Cashflow';
import PreviousLoans from './pages/Application/PreviousLoans';
import IncAndExp from './pages/Application/IncAndExp';
import Inbox from './pages/Messages/Inbox';
import NewMessage from './pages/Messages/NewMessage';
import Thread from './pages/Messages/Thread';
import Thrash from './pages/Messages/Thrash';
import Notifications from './pages/Notification/Notifications';
import LoanRecovery from './pages/Recovery/LoanRecovery';
import Activity from './pages/Settings/Activity';
import CreateModel from './pages/Settings/CreateModel';
import Models from './pages/Settings/Models';
import NotificationSettings from './pages/Settings/NotificationSettings';
import Security from './pages/Settings/Security';
import InitialPredicion from './pages/Application/InitialPredicion';
import PrivateRoute from './components/PrivateRoute';
import ApplicantsAnalytics from './pages/Analytics/ApplicantsAnalytics';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpCentre />} />
        <Route path="/onboard" element={<Onboarding />} />
        <Route path="/signup" element={<SignUpWithId />} />
        <Route path="/signup/password-otp" element={<Otp />} />
        <Route path="/register" element={<SignUpWithPassword />} />
        <Route
          path="/signup/security-question"
          element={<SignUpSecurityQuestion />}
        />
        <Route
          path="/resetpassword/security-question"
          element={<ResetPassSecQues />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/resetpassword/verify/:resetPasswordToken"
          element={<ResetPassword />}
        />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<GeneralAnalytics />} />
          <Route
            path="/dashboard/application-details"
            element={<ApplicationDetails />}
          />
          <Route
            path="/dashboard/applicants-analytics"
            element={<ApplicantsAnalytics />}
          />
          <Route path="/applications/all" element={<AllApplications />} />
          <Route
            path="/applications/overview/:applicationId"
            element={<AppOverview />}
          />
          <Route
            path="/applications/approved"
            element={<ApprovedApplications />}
          />
          <Route
            path="/applications/rejected"
            element={<RejectedApplications />}
          />
          <Route
            path="/applications/pending"
            element={<PendingApplications />}
          />
          <Route
            path="/applications/new-application/prediction"
            element={<InitialPredicion />}
          />
          <Route
            path="/applications/new-application/personalinfo"
            element={<NewAppContact />}
          />
          <Route
            path="/applications/new-application/loaninfo"
            element={<NewAppLoanInfo />}
          />
          <Route
            path="/applications/new-application/history"
            element={<NewAppFinHistory />}
          />
          <Route
            path="/applications/applicant/contact/:applicationId"
            element={<ApplicantContactInfo />}
          />

          <Route
            path="/applications/applicant/prediction/:applicationId"
            element={<ApplicantPredInfo />}
          />
          <Route
            path="/applications/applicant/cashflow"
            element={<Cashflow />}
          />
          <Route
            path="/applications/applicant/previousloans"
            element={<PreviousLoans />}
          />
          <Route path="/applications/applicant/iexp" element={<IncAndExp />} />
          <Route path="/messages/inbox" element={<Inbox />} />
          <Route path="/messages/new" element={<NewMessage />} />
          <Route path="/messages/thread" element={<Thread />} />
          <Route path="/messages/thrash" element={<Thrash />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/recovery" element={<LoanRecovery />} />
          <Route path="/settings/activity" element={<Activity />} />
          <Route path="/settings/create-model" element={<CreateModel />} />
          <Route path="/settings/models" element={<Models />} />
          <Route
            path="/settings/notification"
            element={<NotificationSettings />}
          />
          <Route path="/settings/security" element={<Security />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
