import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUP";
import Login from "../pages/Login/Login";
import AllArticles from "../pages/All_Articles/AllArticles";
import MyArticle from "../pages/My_Article/MyArticle";
import PostArticle from "../pages/Post_Article/PostArticle";
import AboutUs from "../pages/About_Us/AboutUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../pages/Error/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>, 
    children: [
      { index: true, Component: Home },
      { path: "sign-up", Component: SignUp },
      { path: "login", Component: Login },
      { path: "all-articles", element: <AllArticles></AllArticles> },
      {
        path: "my-articles",
        element: (
          <PrivateRoute>
            <MyArticle></MyArticle>
          </PrivateRoute>
        ),
      },
      {
        path: "post-article",
        element: (
          <PrivateRoute>
            <PostArticle></PostArticle>
          </PrivateRoute>
        ),
      },
      { path: "about-us", element: <AboutUs></AboutUs> },
    ],
  },
]);