import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
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
      <LoadingSpinner message="Loading homepage..." />
      <Footer />
    </div>
  );

  if (isError) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <ErrorState 
        message="Oops! Something went wrong while loading the homepage." 
        onRetry={() => { void refetch(); }}
        retryText="Retry"
      />
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
