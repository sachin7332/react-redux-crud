// import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import Loadable from "components/Loadable";
import sessionRoutes from "routes/session-routes";
import AuthGuard from "guard/AuthGuard";


const routes = [
  {
    path: "/",
    element: <Navigate to="users" />
  },
  {
    element: (
      <AuthGuard>
       <h1>dashboard users</h1>
      </AuthGuard>
    ),
    children: [
     
      {
        path: "/users",
        element: (<h1>users</h1>),
      },
      

    ]
  },

  // // session pages route
  ...sessionRoutes
];

export default routes;
