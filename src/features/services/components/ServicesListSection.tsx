import { getServiceIconComponent } from '../utils/IconUtils';
import type { IServiceList } from '../types/services.type';

interface ServicesListSectionProps {
  services: IServiceList[];
}

const ServicesListSection = ({ services }: ServicesListSectionProps) => {
  const IconWrapper = ({ icon, className = '' }: { icon: React.ReactNode, className?: string }) => (
    <div className={`text-white ${className}`}>
      {icon}
    </div>
  );

  

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-dm-sans font-medium text-gray-900 mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className={`md:flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={'inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl'}>
                      <IconWrapper icon={getServiceIconComponent(service.icon)} />
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-lato">
                    {service.description}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x300/1f2937/ffffff?text=${encodeURIComponent(service.title)}`;
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection; 