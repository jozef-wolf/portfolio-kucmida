import './i18n'; // Import the i18n configuration
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import PortfolioCategoryPage from './pages/PortfolioCategoryPage';
import AboutMe from './pages/AboutMePage';
import Contact from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioCategoryPage />,
      },
      {
        path: 'portfolio/:category',
        element: <PortfolioPage />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
