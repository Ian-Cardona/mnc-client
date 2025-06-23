import { Mail } from 'lucide-react';
import type { IHome } from '../types/home.type';

type Props = {
  data: IHome
};

const HeroSection = ({ data }: Props) => {
  return (
    <section className="mx-3 my-12 space-y-4">
      <div className="space-y-8">
        <h1 className="text-6xl font font-dm-sans font-medium">{data.heroTitle}</h1>
        <h2 className="text-lg font-lato">
          {data.heroContent}
        </h2>
      </div>
      <button className="px-6 py-3 bg-yellow-300 rounded-2xl flex items-center gap-2">
        <Mail size={20} />
        {data.cta}
      </button>
    </section>
  );
};

export default HeroSection;
