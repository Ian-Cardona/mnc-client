import type { IAboutStat } from '../types/about.type';

interface StatsSectionProps {
  stats: IAboutStat[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="mx-10 my-16 lg:my-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="text-4xl lg:text-5xl font-dm-sans font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white font-lato">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 