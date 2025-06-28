import { Mail, Users, Target, Heart, Award, Zap, Shield, Globe, BookOpen, Calculator, FileText, TrendingUp, Clock, Star, Briefcase, Lock, Eye } from 'lucide-react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import { useAbout } from '../features/about/hooks/useAbout';

// Icon mapping function
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    heart: Heart,
    users: Users,
    target: Target,
    award: Award,
    zap: Zap,
    shield: Shield,
    globe: Globe,
    book: BookOpen,
    calculator: Calculator,
    file: FileText,
    trendingup: TrendingUp,
    clock: Clock,
    star: Star,
    briefcase: Briefcase,
    mail: Mail,
    lock: Lock,
    eye: Eye,
  };
  
  return iconMap[iconName.toLowerCase()] || Heart; // default to Heart
};

const About = () => {
  const { data: aboutData, isLoading, error } = useAbout();

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <LoadingSpinner message="Loading about information..." />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <ErrorState 
          message="Failed to load about information" 
          onRetry={() => window.location.reload()}
        />
        <Footer />
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <div className="w-full flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 font-lato">No about information available</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div className="w-full" style={{ flex: 1 }}>
        {/* Hero Section */}
        <section className="mx-10 my-12 space-y-4 lg:my-24 lg:space-y-12">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl lg:text-8xl font-dm-sans font-medium">{aboutData.hero.title}</h1>
            <h2 className="text-lg lg:text-3xl font-lato max-w-2xl mx-auto">
              {aboutData.hero.subtitle}
            </h2>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mx-10 my-8 lg:my-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium">{aboutData.story.title}</h3>
                {aboutData.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg lg:text-xl font-lato text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {aboutData.story.highlight && (
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 lg:p-12 rounded-3xl">
                  <Target className="w-16 h-16 text-yellow-600 mb-6" />
                  <h4 className="text-2xl font-dm-sans font-medium mb-4">{aboutData.story.highlight.title}</h4>
                  <p className="text-gray-700 font-lato">
                    {aboutData.story.highlight.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium text-center mb-16">Our Values</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {aboutData.values.map((value) => {
                const IconComponent = getIconComponent(value.icon);
                return (
                  <div key={value.id} className="text-center space-y-4 w-full md:w-80 lg:w-64">
                    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h4 className="text-xl font-dm-sans font-medium">{value.title}</h4>
                    <p className="text-gray-600 font-lato">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium mb-6">{aboutData.approach.title}</h3>
              <p className="text-lg lg:text-xl font-lato text-gray-700 max-w-3xl mx-auto">
                {aboutData.approach.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutData.approach.members.map((member) => {
                const IconComponent = getIconComponent(member.icon);
                return (
                  <div key={member.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl flex flex-col justify-between transition-shadow">
                    <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-10 h-10 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-dm-sans font-medium mb-2">{member.title}</h4>
                      <p className="text-gray-600 font-lato mb-4">
                        {member.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {aboutData.stats.map((stat) => (
                  <div key={stat.id}>
                    <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white font-lato">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="mx-10 my-16 lg:my-24">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium mb-6">{aboutData.contact.title}</h3>
            <p className="text-lg lg:text-xl font-lato text-gray-700 mb-8">
              {aboutData.contact.description}
            </p>
            <button
              className="px-8 py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black rounded-2xl flex items-center gap-3 text-lg font-bold shadow-lg hover:from-yellow-400 hover:to-yellow-600 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 mx-auto"
              onClick={() => {
                const scrollToFooterForm = () => {
                  const form = (window as Window & { footerEmailForm?: HTMLFormElement | null }).footerEmailForm;
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                    const emailInput = form.querySelector('input[type="email"]');
                    if (emailInput instanceof HTMLInputElement) {
                      emailInput.focus();
                    }
                    return true;
                  }
                  return false;
                };
                if (!scrollToFooterForm()) {
                  let elapsed = 0;
                  const interval = setInterval(() => {
                    elapsed += 100;
                    if (scrollToFooterForm() || elapsed > 2000) {
                      clearInterval(interval);
                    }
                  }, 100);
                }
              }}
            >
              {aboutData.contact.ctaText || 'Get Started'}
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;