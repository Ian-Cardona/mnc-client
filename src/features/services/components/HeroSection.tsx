import type { IServicesHero } from '../types/services.type';

interface HeroSectionProps {
  hero: IServicesHero;
}

const HeroSection = ({ hero }: HeroSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl lg:text-8xl font-dm-sans font-medium text-gray-900 mb-6">
          {hero.title}
        </h1>
        <p className="text-lg lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-lato">
          {hero.subtitle}
        </p>
        <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg max-w-4xl mx-auto">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-lato">
            {hero.description}
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-4 font-lato">
            {hero.additionalInfo}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 