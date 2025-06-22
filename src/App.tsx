// import { API_BASE_URL } from './lib/env';
import { useQuery } from '@tanstack/react-query';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import axios from 'axios';
import { type IHome } from './features/home/types/home';

function App() {
  const result = useQuery<IHome>({
    queryKey: ['home'],
    queryFn: () => axios.get<IHome>('http://localhost:3000/api/home').then(res => res.data),
  });

  console.log(result);

  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
