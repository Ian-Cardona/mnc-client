import { getIconComponent } from '../utils/IconUtils';
import type { IWhyChooseUsItem } from '../types/services.type';

interface WhyChooseUsSectionProps {
  whyChooseUs: IWhyChooseUsItem[];
}

const WhyChooseUsSection = ({ whyChooseUs }: WhyChooseUsSectionProps) => {
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
            Why Choose MNC Bookkeeping Services?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-yellow-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-emerald-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <IconWrapper icon={getIconComponent(item.icon)} />
              </div>
              <h3 className="text-xl font-dm-sans font-medium text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-lato">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 