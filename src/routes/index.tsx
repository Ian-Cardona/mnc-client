import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';
import Guides from '../pages/Guide';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/guides',
        element: <Guides />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
