import { getIconComponent } from '../utils/IconUtils';
import type { IAboutValue } from '../types/about.type';

interface ValuesSectionProps {
  values: IAboutValue[];
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  return (
    <section className="mx-10 my-16 lg:my-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium text-center mb-16">Our Values</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value) => {
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
  );
};

export default ValuesSection; 