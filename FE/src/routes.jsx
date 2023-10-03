import { createBrowserRouter } from 'react-router-dom';
import Logo from './components/Logo';
import { Home, ProductPage } from './pages';

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
        element: <ProductPage />,
        children: [
        ],
      },
    ],
  },
]);

export default router;