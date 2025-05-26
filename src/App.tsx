import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import BGAnimation from './assets/BG.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectScope from './components/ProjectScope';
import Milestones from './components/Milestones';
import Downloads from './components/Downloads';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Agri-Frontier | Sustainable Paddy Agriculture Research";
  }, []);

  return (
    <>
      {/* Fixed Lottie Background */}
      <div
        style={{
          position: 'fixed',
      top: 300,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: -9999,
      opacity: 0.2,
      backgroundColor: '#000',
        }}
      >
        <Lottie animationData={BGAnimation} loop autoplay style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Main app content */}
      <div style={{ position: 'relative', zIndex: 0, minHeight: '100vh', backgroundColor: 'transparent' }}>
        <Navbar />
        <Hero />
        <ProjectScope />
        <Milestones />
        <Downloads />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
