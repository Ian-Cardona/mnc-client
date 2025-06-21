import HeroSection from '../features/home/components/HeroSection';
import ServicesSection from '../features/home/components/ServicesSection';
import TestimonialsSection from '../features/home/components/TestimonialsSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
