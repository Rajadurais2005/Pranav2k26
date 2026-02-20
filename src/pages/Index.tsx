import { useState, useCallback } from 'react';
import PortalEntry from '@/components/PortalEntry';
import ParticleField from '@/components/ParticleField';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ArcaneFooter from '@/components/ArcaneFooter';

const Index = () => {
  const [portalDone, setPortalDone] = useState(false);

  const handlePortalComplete = useCallback(() => {
    setPortalDone(true);
  }, []);

  return (
    <div className="grain-overlay">
      {!portalDone && <PortalEntry onComplete={handlePortalComplete} />}
      
      {portalDone && (
        <>
          <ParticleField count={60} />
          <main className="relative z-10">
            <HeroSection />
            <EventsSection />
            <AboutSection />
            <ContactSection />
            <ArcaneFooter />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
