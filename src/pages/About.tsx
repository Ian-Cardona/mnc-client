import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import { useAbout } from '../features/about/hooks/useAbout';
import {
  HeroSection,
  MissionSection,
  ValuesSection,
  ApproachSection,
  StatsSection,
  TeamSection,
  ContactCTASection,
} from '../features/about/components';
import { getErrorMessage, getLoadingMessage } from '../utils/errorHandling';

const About = () => {
  const { data: aboutData, isLoading, isError, refetch } = useAbout();

  if (isLoading) {
    return <LoadingSpinner message={getLoadingMessage('about')} />;
  }

  if (isError || !aboutData) {
    return (
      <ErrorState 
        message={getErrorMessage('about')} 
        onRetry={() => { void refetch(); }}
        retryText="Retry"
      />
    );
  }

  return (
    <div className="w-full">
      <HeroSection hero={aboutData.hero} />
      <MissionSection story={aboutData.story} />
      <ValuesSection values={aboutData.values} />
      <ApproachSection approach={aboutData.approach} />
      <StatsSection stats={aboutData.stats} />
      <TeamSection team={aboutData.team} />
      <ContactCTASection />
    </div>
  );
};

export default About;