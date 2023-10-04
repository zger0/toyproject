import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import { Home, Product } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [],
      },
      {
        path: '/products',
        element: <Product />,
        children: [],
      },
    ],
  },
]);

export default router;
