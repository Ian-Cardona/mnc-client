import { useQuery } from '@tanstack/react-query';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import Home from '../pages/Home';
import axios from 'axios';

function App() {
  const result = useQuery({
    queryKey: ['home'],
    queryFn: () => axios.get()
  })

  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
