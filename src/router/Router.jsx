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
import ViewCategory from "../pages/ViewCategorie/ViewCategorie";
import Loading from "../components/Loading/Loading";
import MyArticleUpdate from "../pages/MyArticleUpdate/MyArticleUpdate";
import ArticleDetails from "../pages/ArticleDetails/ArticleDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch(`http://localhost:3000/article`),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
      },

      {
  path: "all-articles",
  loader: async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    const limit = url.searchParams.get("limit") || 6;

    const res = await fetch(
      `http://localhost:3000/article-all?page=${page}&limit=${limit}`
    );
    return res.json();
  },
  hydrateFallbackElement: <Loading />,
  element: <AllArticles />,
},
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
      {
        path: "view-category/:id",
        element: <ViewCategory></ViewCategory>,
      },
      {
        path: "article-all/view-category/:id",
        element: <ViewCategory></ViewCategory>,
      },
      {
        path: "my-article/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/my-article/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        element: <MyArticleUpdate></MyArticleUpdate>,
      },
      {
        path: "article-details/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/my-article/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          
            <ArticleDetails></ArticleDetails>
          
        ),
      },
      {
        path: "my-article/article-details/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/my-article/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <ArticleDetails></ArticleDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "sign-up", Component: SignUp },
  { path: "login", Component: Login },
]);
