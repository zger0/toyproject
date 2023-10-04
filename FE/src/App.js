import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
