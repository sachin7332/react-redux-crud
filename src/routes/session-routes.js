import { lazy } from "react";
import Loadable from "components/Loadable";
import ErrorBoundary from "components/ErrorBoundary";
const Login = Loadable(lazy(() => import("pages/sessions/Login")));
const NotFound = Loadable(lazy(() => import("pages/error/NotFound")));





const sessionRoutes = [
  { path: "/session/signin", element: <Login /> ,errorElement : <ErrorBoundary /> },
  { path: "*", element: <NotFound /> }
];

export default sessionRoutes;
