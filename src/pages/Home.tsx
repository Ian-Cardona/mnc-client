import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import HeroSection from '../features/home/components/HeroSection';
import ServicesSection from '../features/home/components/ServicesSection';
import TestimonialsSection from '../features/home/components/TestimonialsSection';
import { fetchHome } from '../features/home/api/home.api';

const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['home'],
    queryFn: fetchHome,
  });

  if (isLoading) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className="flex flex-col justify-center items-center min-h-[40vh] text-lg font-medium text-gray-700" style={{ flex: 1 }}>
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <span>Loading homepage...</span>
      </div>
      <Footer />
    </div>
  );

  if (isError) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center" style={{ flex: 1 }}>
        <div className="text-red-500 text-xl font-semibold mb-2">Oops! Something went wrong while loading the homepage.</div>
        <button
          onClick={() => { void refetch(); }}
          className="mt-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-md font-semibold transition-colors shadow-md"
        >
          Retry
        </button>
      </div>
      <Footer />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className="w-full" style={{ flex: 1 }}>
        {data && <HeroSection data={data} />}
        {data && <TestimonialsSection data={data} />}
        {data && <ServicesSection data={data} />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
