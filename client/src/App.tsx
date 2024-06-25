import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

