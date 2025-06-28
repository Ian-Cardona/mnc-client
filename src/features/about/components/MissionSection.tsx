import { Target } from 'lucide-react';
import type { IAboutStory } from '../types/about.type';

interface MissionSectionProps {
  story: IAboutStory;
}

const MissionSection = ({ story }: MissionSectionProps) => {
  return (
    <section className="mx-10 my-8 lg:my-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium">{story.title}</h3>
            {story.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg lg:text-xl font-lato text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {story.highlight && (
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 lg:p-12 rounded-3xl">
              <Target className="w-16 h-16 text-yellow-600 mb-6" />
              <h4 className="text-2xl font-dm-sans font-medium mb-4">{story.highlight.title}</h4>
              <p className="text-gray-700 font-lato">
                {story.highlight.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 