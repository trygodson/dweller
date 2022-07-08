import { lazy } from 'react';

const Login = lazy(() => import('../pages/Auth/Login/index'));
const Register = lazy(() => import('../pages/Auth/Register/index'));
const Otp = lazy(() => import('../pages/Auth/otp/index'));
// const ForgotPassword = lazy(() => import("../pages/Auth/ForgotPassword"));
// const OTP = lazy(() => import("../pages/Auth/VerifyOtp"));
const DefaultLayout = lazy(() => import('../shared/navs/DefaultLayout'));
// const Error = lazy(() => import("../pages/MainPage/Error/Error"));

const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
    guarded: false,
  },
  {
    path: '/signup',
    component: Register,
    guarded: false,
  },
  {
    path: '/otp',
    component: Otp,
    guarded: false,
  },
  // {
  //   path: "/forget-password",
  //   component: ForgotPassword,
  //   guarded: false,
  // },
  // {
  //   path: "/verify-otp",
  //   component: OTP,
  //   guarded: false,
  // },
  // {
  //   path: "/error",
  //   component: Error,
  //   guarded: false,
  // },
  {
    path: '/app',
    component: DefaultLayout,
    guarded: true,
  },
];

export { routes };
