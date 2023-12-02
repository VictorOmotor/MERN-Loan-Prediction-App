import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Landing = lazy(() => import('./pages/Landing/Landing'));
const About = lazy(() => import('./pages/Landing/About'));
const HelpCentre = lazy(() => import('./pages/Landing/HelpCentre'));
const Onboarding = lazy(() => import('./pages/Onboard/Onboarding'));
const Otp = lazy(() => import('./pages/Onboard/Otp'));
const SignUpWithId = lazy(() => import('./pages/Onboard/SignUpWithId'));
const SignUpWithPassword = lazy(() =>
  import('./pages/Onboard/SignUpWithPassword'),
);
const ResetPassSecQues = lazy(() => import('./pages/Onboard/ResetPassSecQues'));
const SignUpSecurityQuestion = lazy(() =>
  import('./pages/Onboard/SignUpSecurityQuestion'),
);
const ForgotPassword = lazy(() => import('./pages/Onboard/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/Onboard/ResetPassword'));
const Login = lazy(() => import('./pages/Onboard/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const ApplicationDetails = lazy(() =>
  import('./pages/Dashboard/ApplicationDetails'),
);
const AllApplications = lazy(() =>
  import('./pages/Application/AllApplications'),
);
const ApprovedApplications = lazy(() =>
  import('./pages/Application/ApprovedApplications'),
);
const RejectedApplications = lazy(() =>
  import('./pages/Application/RejectedApplications'),
);
const PendingApplications = lazy(() =>
  import('./pages/Application/PendingApplications'),
);
const ApplicantContactInfo = lazy(() =>
  import('./pages/Application/ApplicantContactInfo'),
);
const NewAppFinHistory = lazy(() =>
  import('./pages/Application/NewAppFinHistory'),
);
const NewAppLoanInfo = lazy(() => import('./pages/Application/NewAppLoanInfo'));
const NewAppContact = lazy(() => import('./pages/Application/NewAppContact'));
const ApplicantPredInfo = lazy(() =>
  import('./pages/Application/ApplicantPredInfo'),
);
const GeneralAnalytics = lazy(() =>
  import('./pages/Analytics/GeneralAnalytics'),
);
const AppOverview = lazy(() => import('./pages/Application/AppOverview'));
const Cashflow = lazy(() => import('./pages/Application/Cashflow'));
const PreviousLoans = lazy(() => import('./pages/Application/PreviousLoans'));
const IncAndExp = lazy(() => import('./pages/Application/IncAndExp'));
const Inbox = lazy(() => import('./pages/Messages/Inbox'));
const NewMessage = lazy(() => import('./pages/Messages/NewMessage'));
const Thread = lazy(() => import('./pages/Messages/Thread'));
const Thrash = lazy(() => import('./pages/Messages/Thrash'));
const Notifications = lazy(() => import('./pages/Notification/Notifications'));
const LoanRecovery = lazy(() => import('./pages/Recovery/LoanRecovery'));
const Activity = lazy(() => import('./pages/Settings/Activity'));
const CreateModel = lazy(() => import('./pages/Settings/CreateModel'));
const Models = lazy(() => import('./pages/Settings/Models'));
const NotificationSettings = lazy(() =>
  import('./pages/Settings/NotificationSettings'),
);
const Security = lazy(() => import('./pages/Settings/Security'));
const InitialPredicion = lazy(() =>
  import('./pages/Application/InitialPredicion'),
);
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const ApplicantsAnalytics = lazy(() =>
  import('./pages/Analytics/ApplicantsAnalytics'),
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <About />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <HelpCentre />
            </Suspense>
          }
        />
        <Route
          path="/onboard"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <Onboarding />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <SignUpWithId />
            </Suspense>
          }
        />
        <Route
          path="/signup/password-otp"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <Otp />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <SignUpWithPassword />
            </Suspense>
          }
        />
        <Route
          path="/signup/security-question"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <SignUpSecurityQuestion />
            </Suspense>
          }
        />
        <Route
          path="/resetpassword/security-question"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <ResetPassSecQues />
            </Suspense>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/resetpassword/verify/:resetPasswordToken"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <ResetPassword />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <Login />
            </Suspense>
          }
        />
        <Route
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <PrivateRoute />
            </Suspense>
          }
        >
          <Route
            path="/dashboard"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/analytics"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <GeneralAnalytics />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/application-details"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <ApplicationDetails />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/applicants-analytics"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <ApplicantsAnalytics />
              </Suspense>
            }
          />
          <Route
            path="/applications/all"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <AllApplications />
              </Suspense>
            }
          />
          <Route
            path="/applications/overview/:applicationId"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <AppOverview />
              </Suspense>
            }
          />
          <Route
            path="/applications/approved"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <ApprovedApplications />
              </Suspense>
            }
          />
          <Route
            path="/applications/rejected"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <RejectedApplications />
              </Suspense>
            }
          />
          <Route
            path="/applications/pending"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <PendingApplications />
              </Suspense>
            }
          />
          <Route
            path="/applications/new-application/prediction"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <InitialPredicion />
              </Suspense>
            }
          />
          <Route
            path="/applications/new-application/personalinfo"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <NewAppContact />
              </Suspense>
            }
          />
          <Route
            path="/applications/new-application/loaninfo"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <NewAppLoanInfo />
              </Suspense>
            }
          />
          <Route
            path="/applications/new-application/history"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <NewAppFinHistory />
              </Suspense>
            }
          />
          <Route
            path="/applications/applicant/contact/:applicationId"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <ApplicantContactInfo />
              </Suspense>
            }
          />
          <Route
            path="/applications/applicant/prediction/:applicationId"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <ApplicantPredInfo />
              </Suspense>
            }
          />
          <Route
            path="/applications/applicant/cashflow"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Cashflow />
              </Suspense>
            }
          />
          <Route
            path="/applications/applicant/previousloans"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <PreviousLoans />
              </Suspense>
            }
          />
          <Route
            path="/applications/applicant/iexp"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <IncAndExp />
              </Suspense>
            }
          />
          <Route
            path="/messages/inbox"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Inbox />
              </Suspense>
            }
          />
          <Route
            path="/messages/new"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <NewMessage />
              </Suspense>
            }
          />
          <Route
            path="/messages/thread"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Thread />
              </Suspense>
            }
          />
          <Route
            path="/messages/thrash"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Thrash />
              </Suspense>
            }
          />
          <Route
            path="/notifications"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Notifications />
              </Suspense>
            }
          />
          <Route
            path="/recovery"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <LoanRecovery />
              </Suspense>
            }
          />
          <Route
            path="/settings/activity"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Activity />
              </Suspense>
            }
          />
          <Route
            path="/settings/create-model"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <CreateModel />
              </Suspense>
            }
          />
          <Route
            path="/settings/models"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Models />
              </Suspense>
            }
          />
          <Route
            path="/settings/notification"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <NotificationSettings />
              </Suspense>
            }
          />
          <Route
            path="/settings/security"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <Security />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
