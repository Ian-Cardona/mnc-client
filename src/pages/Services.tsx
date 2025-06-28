import { useServices } from '../features/services/hooks/useServices';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import {
  HeroSection,
  WhyChooseUsSection,
  ServicesListSection,
  CTASection,
} from '../features/services/components';

const Services = () => {
  const { data: servicesData, isLoading, error, refetch } = useServices();

  // Loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Error state
  if (error || !servicesData) {
    return (
      <ErrorState 
        message="Failed to load services data. Please try again later."
        onRetry={() => {
          void refetch();
        }}
        retryText="Refresh Page"
      />
    );
  }

  return (
    <div className="w-full">
      <HeroSection hero={servicesData.hero} />
      <WhyChooseUsSection whyChooseUs={servicesData.whyChooseUs} />
      <ServicesListSection services={servicesData.services} />
      <CTASection cta={servicesData.cta} />
    </div>
  );
};

export default Services;
