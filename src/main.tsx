import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Root, { loader as rootLoader } from './routes/Root';
import { ThemeProvider } from '@/components/theme-provider';
import './index.css';
import Logs, { loader as logsLoader } from './routes/logs';
import Networks from './routes/networks';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'logs/:connection/',
    element: <Logs />,
    errorElement: <ErrorPage />,
    loader: logsLoader,
    children: [
      {
        path: 'network/:id',
        element: <Networks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
