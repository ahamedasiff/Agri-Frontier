import React from 'react';
import { milestones } from '../data/milestones';
import { CalendarDays, CheckCircle, Circle } from 'lucide-react';

const Milestones: React.FC = () => {
  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Milestones</h2>
          <p className="text-xl text-gray-600">Timelines in Brief</p>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  {milestone.completed ? (
                    <CheckCircle className="w-8 h-8 text-green-600 bg-white rounded-full" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400 bg-white rounded-full" />
                  )}
                </div>
                
                {/* Content */}
                <div 
                  className={`flex-1 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div 
                    className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-l-4 ${
                      milestone.completed ? 'border-green-600' : 'border-gray-300'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <div className="flex items-center mb-3 text-gray-500 text-sm">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>{milestone.date}</span>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                    {milestone.completed && (
                      <div className="mt-4 inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Completed
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty div for layout */}
                <div className="hidden md:block flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;