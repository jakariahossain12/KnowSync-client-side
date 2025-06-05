import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUP";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            { index: true, Component: Home },
          { path: 'sign-up', Component: SignUp },
            {path:'login',Component:Login}
    ]
  },
]);