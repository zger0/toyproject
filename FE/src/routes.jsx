import { createBrowserRouter } from 'react-router-dom';
import Logo from './components/Logo';
import { Home, Product } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Logo />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
        ],
      },
      {
        path: '/products',
        element: <Product />,
        children: [
        ],
      },
    ],
  },
]);

export default router;