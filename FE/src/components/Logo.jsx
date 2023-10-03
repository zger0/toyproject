import { Outlet , Link} from 'react-router-dom';

function RootLayout() {
  return (
    <div >
      <h1 >Logo</h1>
      <Link to="/">홈</Link>
      <Link to="/products">상품페이지</Link>
      <Outlet />
    </div>
  );
}

export default RootLayout;
