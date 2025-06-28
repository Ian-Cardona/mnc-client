import { getIconComponent } from '../utils/IconUtils';
import type { IAboutTeamMember } from '../types/about.type';

interface TeamSectionProps {
  team: IAboutTeamMember[];
}

const TeamSection = ({ team }: TeamSectionProps) => {
  return (
    <section className="mx-10 my-16 lg:my-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl lg:text-5xl font-dm-sans font-medium text-center mb-16">Our Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => {
            const IconComponent = getIconComponent(member.icon);
            return (
              <div key={member.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl flex flex-col justify-between transition-shadow">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-10 h-10 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-dm-sans font-medium mb-2">{member.title}</h4>
                  <p className="text-gray-600 font-lato mb-4">
                    {member.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 