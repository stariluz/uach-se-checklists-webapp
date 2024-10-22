
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../views/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      children: []
    },
    {
      path: '*',
      element: <Navigate to={`/`} />
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