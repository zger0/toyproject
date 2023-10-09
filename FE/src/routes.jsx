import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import { Home, Product, MemberInsert, MemberList, MemberDetail } from './pages';

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
      {
        path: '/memberInsertPage',
        element: <MemberInsert />,
        children: [],
      },
      {
        path: '/members',
        element: <MemberList />,
        children: [],
      },
      {
        path: '/member/:id',
        element: <MemberDetail />,
        children: [],
      }
    ],
  },
]);

export default router;
