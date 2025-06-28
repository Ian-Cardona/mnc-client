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

const About = () => {
  const { data: aboutData, isLoading, error, refetch } = useAbout();

  if (isLoading) {
    return <LoadingSpinner message="Loading about information..." />;
  }

  if (error) {
    return (
      <ErrorState 
        message="Failed to load about information" 
        onRetry={() => { void refetch(); }}
        retryText="Retry"
      />
    );
  }

  if (!aboutData) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 font-lato">No about information available</p>
        </div>
      </div>
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