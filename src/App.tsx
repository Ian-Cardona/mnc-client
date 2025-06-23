// import { API_BASE_URL } from './lib/env';
import { useQuery } from '@tanstack/react-query';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import axios from 'axios';
import { type IHome } from './features/home/types/home.type';
import type { IFooter } from './features/footer/types/footer.type';

const footerData: IFooter = {
  copyright: `© ${new Date().getFullYear()} MNC Bookkeeping Services. All rights reserved.`,
  address: '123 Main St, City, Country\nEmail: info@mnc.com\nPhone: (123) 456-7890',
  socials: [
    { platform: 'facebook', url: 'https://facebook.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'linkedin', url: 'https://linkedin.com' },
  ],
  links: [
    { label: 'About Us', path: '#about' },
    { label: 'Services', path: '#services' },
    { label: 'Contact', path: '#contact' },
    { label: 'External Link', path: 'https://example.com', external: true },
  ],
};

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
      <Footer footer={footerData} />
    </div>
  );
}

export default App;
