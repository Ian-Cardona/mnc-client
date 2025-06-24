import type { IServicesOffered } from '../types/home.type';
import { emeraldBg } from '../../../utils/colors';
import { Check } from 'lucide-react';

type Props = {
  data: IServicesOffered[];
};

const ServicesSection = ({ data }: Props) => {
  return (
    <section className="w-full py-12 lg:py-24 font-dm-sans bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-dm-sans font-bold text-center mb-4 text-gray-800">
          Our Services
        </h2>
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-emerald-500"></div>
        </div>
        <p className="text-center text-gray-500 mb-12 text-lg">Expert accounting and financial solutions for your business.</p>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {data.map((service, idx) => (
            <div
              key={service.title}
              className={`flex-1 p-8 lg:p-12 shadow-lg rounded-2xl bg-white text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 ${emeraldBg[idx] || emeraldBg[emeraldBg.length - 1]}`}
              style={{ minWidth: '260px' }}
            >
              <h3 className="font-dm-sans text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <ul className="space-y-3 font-lato text-left max-w-xs mx-auto">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-base lg:text-lg text-gray-700">
                    <span className="mt-1 flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600">
                        <Check size={18} className="align-middle" />
                      </span>
                    </span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;