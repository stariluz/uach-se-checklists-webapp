
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import Layout from "src/components/Layout/Layout";
import ChecklistDetail from "src/views/ChecklistDetail/ChecklistDetail";
import MainPage from "src/views/MainPage/MainPage";
import PersistLogin from "src/components/Auth/PersistLogin";

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <MainPage />,
      children: []
    },
    {
      path: "/",
      element: <PersistLogin />,
      children: [
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
              path: ":userId/:checklistId",
              element: <ChecklistDetail />,
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