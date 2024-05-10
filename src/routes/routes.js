// import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Loadable from "components/Loadable";
import sessionRoutes from "routes/session-routes";
import AuthGuard from "guard/AuthGuard";
import List from "pages/users/List";
import BasicLayout from "pages/layout/BasicLayout";


const routes = [
  {
    path: "/",
    element: <Navigate to="users" />
  },
  {
    element: (
      <AuthGuard>
      <BasicLayout />
      </AuthGuard>
    ),
    children: [
     
      {
        path: "/users",
        element:  <List/>,
      },
      

    ]
  },

  // // session pages route
  ...sessionRoutes
];

export default routes;
