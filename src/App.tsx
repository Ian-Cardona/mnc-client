// import { API_BASE_URL } from './lib/env';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
