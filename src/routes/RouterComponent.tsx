
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import Layout from "src/components/Layout/Layout";
<<<<<<< Updated upstream
import ChecklistDetail from "src/views/ChecklistDetail/ChecklistDetail";
=======
import MainPage from "src/views/MainPage/MainPage";
>>>>>>> Stashed changes

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
        {
<<<<<<< Updated upstream
          path: "/:url",
          element: <ChecklistDetail />,
          children: []
=======
        path: "/main",
        element: <MainPage />,
        children: []
>>>>>>> Stashed changes
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