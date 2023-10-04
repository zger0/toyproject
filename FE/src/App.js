import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
