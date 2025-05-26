import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://araliyarice.com/wp-content/uploads/2018/08/Untitled-2ss.jpg')",
          transform: "translateZ(0)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>
      
      {/* Animated Foreground Elements */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <h1 
          className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Agri-Frontier
        </h1>
        
        <h2 
          className={`text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto mb-8 leading-tight transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          NAVIGATING THE GREEN FRONTIER: 
          <br className="hidden md:block" />
          THE FUTURE OF PADDY ECOSYSTEMS AND 
          <br className="hidden md:block" />
          SUSTAINABLE AGRICULTURE
        </h2>
        
        <button 
          onClick={() => {
            document.getElementById('project-scope')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } transition-all duration-1000 delay-600`}
        >
          Discover Our Research
        </button>
      </div>
      
      {/* Enhanced animated floating elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-green-400 opacity-50 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-green-300 opacity-50 animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-green-500 opacity-50 animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-green-200 opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/2 w-4 h-4 rounded-full bg-green-600 opacity-50 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;