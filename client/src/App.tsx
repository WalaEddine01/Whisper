import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Messages from './pages/Messages/Messages';
import Root from './pages/Root';
import Signup from './pages/Signup/Signup';

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
        element: <Login />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

