import { useServices } from '../features/services/hooks/useServices';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import {
  HeroSection,
  WhyChooseUsSection,
  ServicesListSection,
  CTASection,
} from '../features/services/components';
import { getErrorMessage, getLoadingMessage } from '../utils/errorHandling';

const Services = () => {
  const { data: servicesData, isLoading, isError, refetch } = useServices();

  // Loading state
  if (isLoading) {
    return <LoadingSpinner message={getLoadingMessage('services')} />;
  }

  // Error state
  if (isError || !servicesData) {
    return (
      <ErrorState 
        message={getErrorMessage('services')}
        onRetry={() => {
          void refetch();
        }}
        retryText="Retry"
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
