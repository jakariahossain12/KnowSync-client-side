import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router";
import { router } from "./router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ProfilePikProvider from "./Provider/ProfilePikProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProfilePikProvider>
        <RouterProvider router={router} />
      </ProfilePikProvider>
    </AuthProvider>
  </StrictMode>
);
