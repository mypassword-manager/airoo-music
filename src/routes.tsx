import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import LandingPage from './pages/landing';
import AdminLoginPage from './pages/admin/index';
import AdminDashboard from './pages/admin/dashboard';
import WalletPage from './pages/app/wallet';
import RewardsPage from './pages/app/rewards';
import ReferralPage from './pages/app/referral';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import ForgotPasswordPage from './pages/auth/forgot-password';
import SettingsPage from './pages/app/settings';
import AppDashboardPage from './pages/app/dashboard';
import SearchPage from './pages/app/search';
import LikedPage from './pages/app/liked';
import UserDashboardPage from './pages/app/user-dashboard';
import DownloadsPage from './pages/app/downloads';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

// Pages that bypass RootLayout (full-screen, own chrome)
export const bareRoutes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/admin', element: <AdminLoginPage /> },
  { path: '/admin/dashboard', element: <AdminDashboard /> },
  { path: '/app/dashboard', element: <AppDashboardPage /> },
  { path: '/app/search', element: <SearchPage /> },
  { path: '/app/liked', element: <LikedPage /> },
  { path: '/app/user-dashboard', element: <UserDashboardPage /> },
  { path: '/app/downloads', element: <DownloadsPage /> },
  { path: '/app/wallet', element: <WalletPage /> },
  { path: '/app/rewards', element: <RewardsPage /> },
  { path: '/app/referral', element: <ReferralPage /> },
  { path: '/app/settings', element: <SettingsPage /> },
  { path: '/auth/login', element: <LoginPage /> },
  { path: '/auth/register', element: <RegisterPage /> },
  { path: '/auth/forgot-password', element: <ForgotPasswordPage /> },
];

// Pages wrapped by RootLayout (shared header/footer)
export const routes: RouteObject[] = [
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    id: 'airo-not-found',
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/home' | '/admin' | '/admin/dashboard';

export type Params = Record<string, string | undefined>;
