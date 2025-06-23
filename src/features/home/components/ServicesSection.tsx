import type { IServicesOffered } from '../types/home.type';
import { emeraldBg } from '../../../utils/colors';

type Props = {
  data: IServicesOffered[];
};

const ServicesSection = ({ data }: Props) => {
  return (
    <section className="w-full pt-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-0">
        {data.map((service, idx) => (
          <div
            key={service.title}
            className={`flex-1 p-8 shadow-md text-center ${emeraldBg[idx] || emeraldBg[emeraldBg.length - 1]}`}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside text-left">
              {service.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;