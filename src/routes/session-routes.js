import { lazy } from "react";
import Loadable from "components/Loadable";
import ErrorBoundary from "components/ErrorBoundary";
const Login = Loadable(lazy(() => import("pages/sessions/login/Login")));
const NotFound = Loadable(lazy(() => import("pages/error/NotFound")));





const sessionRoutes = [
  { path: "/login", element: <Login /> ,errorElement : <ErrorBoundary /> },
  { path: "*", element: <NotFound /> }
];

export default sessionRoutes;
