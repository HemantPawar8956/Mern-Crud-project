import { createBrowserRouter } from "react-router-dom";
import Layout from "./../components/Layout";
import Users from "./../components/Users";
import CreateUser from "./../components/CreateUser";
import UpdateUser from "./../components/UpdateUser";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
    ],
  },

  {
    path: "/updateUser",
    element: <UpdateUser />,
  },
]);
