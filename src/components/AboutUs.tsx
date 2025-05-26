import React, { useEffect, useState } from 'react';
import { teamMembers } from '../data/team';
import TeamMember from './TeamMember';

const AboutUs: React.FC = () => {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([]);
  const supervisors = teamMembers.filter(member => member.isSupervisor);
  const teamMembers2 = teamMembers.filter(member => !member.isSupervisor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.id.split('-')[1]);
            setVisibleMembers((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-member-id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Meet Our Team</p>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
        
        {/* Supervisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Project Supervisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map(supervisor => (
              <div
                key={supervisor.id}
                id={`member-${supervisor.id}`}
                data-member-id={supervisor.id}
                className={`transform transition-all duration-700 ${
                  visibleMembers.includes(supervisor.id)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <TeamMember member={supervisor} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Research Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers2.map(member => (
              <div
                key={member.id}
                id={`member-${member.id}`}
                data-member-id={member.id}
                className={`transform transition-all duration-700 ${
                  visibleMembers.includes(member.id)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;