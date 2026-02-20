import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import phoenixLogo from '@/assets/phoenix-logo.jpg';
import heroBgVideo from '@/assets/hero-bg-video.mp4';

const HeroSection = () => {
  const title = 'PRANAV 2K26';
  const tagline = 'An Elite Innovation Guild • A Forbidden Arcane Tech Arena';
  const [shimmer, setShimmer] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayedTagline, setDisplayedTagline] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for tagline
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= tagline.length) {
        setDisplayedTagline(tagline.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // Mouse 3D tilt
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) saturate(0.8)' }}
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        {/* Gold tint */}
        <div className="absolute inset-0" style={{ background: 'hsla(43, 72%, 53%, 0.03)' }} />
      </div>

      {/* Breathing pulse */}
      <motion.div
        className="absolute inset-0 z-[1]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle at 50% 40%, hsla(43, 72%, 53%, 0.04) 0%, transparent 60%)',
        }}
      />

      {/* Energy Ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/10 animate-spin-slow z-[1]"
        style={{
          boxShadow: '0 0 80px hsla(43, 72%, 53%, 0.05), inset 0 0 80px hsla(43, 72%, 53%, 0.03)',
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
            style={{
              top: `${50 + 48 * Math.sin((i / 12) * Math.PI * 2)}%`,
              left: `${50 + 48 * Math.cos((i / 12) * Math.PI * 2)}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, delay: i * 0.25, repeat: Infinity }}
          />
        ))}
      </motion.div>

      {/* Second ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-primary/5 z-[1]"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Phoenix Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: `perspective(800px) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 3}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Glow aura behind logo */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 40px hsla(43, 72%, 53%, 0.3), 0 0 80px hsla(43, 72%, 53%, 0.1)',
                '0 0 60px hsla(43, 72%, 53%, 0.5), 0 0 120px hsla(43, 72%, 53%, 0.2)',
                '0 0 40px hsla(43, 72%, 53%, 0.3), 0 0 80px hsla(43, 72%, 53%, 0.1)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={phoenixLogo}
            alt="PRANAV 2K26 - Arcane Phoenix"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover relative z-10 border-2 border-primary/30"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              boxShadow: '0 0 50px hsla(43, 72%, 53%, 0.3)',
            }}
          />
          {/* Shimmer sweep across logo */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: shimmer ? 1 : 0 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, hsla(43, 80%, 70%, 0.3) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
              }}
              animate={shimmer ? { backgroundPosition: ['-200% 0', '200% 0'] } : {}}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground font-body mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Arcane Phoenix Realm
        </motion.p>

        {/* Title */}
        <div className="relative">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider relative">
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                className={`inline-block text-gold-gradient ${shimmer ? 'animate-shimmer' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  textShadow: '0 0 40px hsla(43, 72%, 53%, 0.3), 0 0 80px hsla(43, 72%, 53%, 0.1)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </div>

        {/* Typewriter Tagline */}
        <motion.p
          className="mt-6 text-base md:text-lg text-muted-foreground font-body font-light max-w-xl mx-auto h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {displayedTagline}
          <motion.span
            className="inline-block w-px h-5 bg-primary/60 ml-1 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <a
            href="#events"
            className="inline-block px-10 py-4 font-display text-sm tracking-[0.3em] uppercase glass-gold rounded-sm glow-gold 
              text-primary hover:glow-gold-intense transition-all duration-500 hover:scale-105"
          >
            Enter the Arena
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
