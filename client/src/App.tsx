import './App.css';

import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import About from './pages/About/About';
import { ApolloProvider } from '@apollo/client';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Messages from './pages/Messages/Messages';
import ProtectedPages from './pages/ProtectedPages';
import Root from './pages/Root';
import Signup from './pages/Signup/Signup';
import { client } from './graphqlClient';
import useAppStore from './Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: (
          <ProtectedPages requiredIn={false}>
            <Login />
          </ProtectedPages>
        ),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'signup',
        element: (
          <ProtectedPages requiredIn={false}>
            <Signup />
          </ProtectedPages>
        ),
      },
      {
        path: 'logout',
        element: (
          <ProtectedPages requiredIn={true}>
            <Logout />
          </ProtectedPages>
        ),
      },
      {
        path: 'messages',
        element: (
          <ProtectedPages requiredIn={true}>
            <Messages />
          </ProtectedPages>
        ),
      },
    ],
  },
]);

function App() {
  const theme = createTheme();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

