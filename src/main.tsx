import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import MainGalleryPage from "./pages/MainGalleryPage";
import AboutMe from "./pages/AboutMePage";
import Contact from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
// import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "gallery",
        element: <MainGalleryPage />,
      },
      {
        path: "gallery/:category",
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

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768, // Custom breakpoint for small screens
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
