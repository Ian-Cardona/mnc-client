import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorState';
import { useContact } from '../features/contact/hooks/useContact';

const Contact = () => {
  const { data, isLoading, isError, refetch } = useContact();

  if (isLoading) return <LoadingSpinner message="Loading contact information..." />;

  if (isError) return (
    <ErrorState 
      message="Oops! Something went wrong while loading the contact information." 
      onRetry={() => { void refetch(); }}
      retryText="Retry"
    />
  );

  if (!data) {
    return (
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 font-lato">No contact information available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="space-y-8 text-center">
          <h1 className="text-5xl lg:text-8xl font-dm-sans font-medium">{data.hero.title}</h1>
          <h2 className="text-lg lg:text-3xl font-lato max-w-2xl mx-auto">
            {data.hero.subtitle}
          </h2>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-10 my-8 lg:my-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-dm-sans font-medium text-gray-900 mb-4">
                Phone
              </h3>
              <p className="text-lg font-lato text-gray-700">
                <a 
                  href={`tel:${data.contactInfo.phone}`}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {data.contactInfo.phone}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-dm-sans font-medium text-gray-900 mb-4">
                Email
              </h3>
              <p className="text-lg font-lato text-gray-700">
                <a 
                  href={`mailto:${data.contactInfo.email}`}
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  {data.contactInfo.email}
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-dm-sans font-medium text-gray-900 mb-4">
                Address
              </h3>
              <p className="text-lg font-lato text-gray-700">
                {data.contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-dm-sans font-medium text-gray-900 mb-4">
              Follow Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg lg:text-xl font-lato text-gray-700 max-w-2xl mx-auto">
              Connect with us on social media for the latest updates and insights.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            {/* Facebook */}
            <a
              href={data.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-8 h-8" />
            </a>

            {/* LinkedIn */}
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl p-4 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="mx-10 my-8 lg:my-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl lg:text-5xl font-dm-sans font-medium text-gray-900 mb-4">
                Business Hours
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {data.businessHours.map((hours, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-lg font-dm-sans font-medium text-gray-900">{hours.day}</span>
                  <span className="text-lg font-lato text-gray-700">{hours.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
