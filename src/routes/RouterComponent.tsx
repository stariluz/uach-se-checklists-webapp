
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import DevPage from "src/views/DevPage/DevPage";
import Layout from "src/components/Layout/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          children: []
        },
        // {
        //   path: "/dev",
        //   element: <DevPage />,
        //   children: []
        // },
        {
          path: '*',
          element: <Navigate to={`/`} />
        }
      ]
    }
  ],
  {
    basename: process.env.NODE_ENV === 'production'
      ? `/${import.meta.env.VITE_REPO_NAME}/`
      : '/',
  }
);


const RouterComponent = () => <RouterProvider router={router} />
export default RouterComponent;