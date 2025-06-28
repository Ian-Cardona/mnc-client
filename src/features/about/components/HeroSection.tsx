import type { IAboutHero } from '../types/about.type';

interface HeroSectionProps {
  hero: IAboutHero;
}

const HeroSection = ({ hero }: HeroSectionProps) => {
  return (
    <section className="py-20 px-6">
      <div className="space-y-8 text-center">
        <h1 className="text-5xl lg:text-8xl font-dm-sans font-medium">{hero.title}</h1>
        <h2 className="text-lg lg:text-3xl font-lato max-w-2xl mx-auto">
          {hero.subtitle}
        </h2>
      </div>
    </section>
  );
};

export default HeroSection; 