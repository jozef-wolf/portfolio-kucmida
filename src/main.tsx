import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import MainGalleryPage from "./pages/MainGalleryPage";
import AboutMe from "./pages/AboutMePage";
import Contact from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
// import ErrorPage from "./pages/ErrorPage";

// Create a router with your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        index: true, // This is the default route for '/'
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <MainGalleryPage />,
      },
      {
        path: 'gallery/:category',
        element: <GalleryPage />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
