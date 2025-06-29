import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import HeroSection from '../features/home/components/HeroSection';
import ServicesSection from '../features/home/components/ServicesSection';
import TestimonialsSection from '../features/home/components/TestimonialsSection';
import { useHome } from '../features/home/hooks/useHome';
import { getErrorMessage, getLoadingMessage } from '../utils/errorHandling';

const Home = () => {
  const { data, isLoading, isError, refetch } = useHome();
  
  if (isLoading) return <LoadingSpinner message={getLoadingMessage('home')} />;

  if (isError || !data) return (
    <ErrorState 
      message={getErrorMessage('home')} 
      onRetry={() => { void refetch(); }}
      retryText="Retry"
    />
  );

  return (
    <div className="w-full">
      {data && <HeroSection data={data} />}
      {data && <TestimonialsSection data={data} />}
      {data && <ServicesSection data={data} />}
    </div>
  );
};

export default Home;
