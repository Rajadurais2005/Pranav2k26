import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const title = 'PRANAV 2026';
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Void background layers */}
      <div className="absolute inset-0 bg-void-gradient" />
      
      {/* Breathing pulse */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsla(43, 72%, 53%, 0.03) 0%, transparent 60%)',
        }}
      />

      {/* Energy Ring */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/10 animate-spin-slow"
        style={{
          boxShadow: '0 0 80px hsla(43, 72%, 53%, 0.05), inset 0 0 80px hsla(43, 72%, 53%, 0.03)',
        }}
      >
        {/* Sigil points */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              top: `${50 + 48 * Math.sin((i / 8) * Math.PI * 2)}%`,
              left: `${50 + 48 * Math.cos((i / 8) * Math.PI * 2)}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </motion.div>

      {/* Second ring */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-primary/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base tracking-[0.4em] uppercase text-muted-foreground font-body mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Arcane Digital Realm
        </motion.p>

        {/* Title */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-wider relative">
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                className={`inline-block text-gold-gradient ${shimmer ? 'animate-shimmer' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.07,
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

          {/* Glow underline */}
          <motion.div
            className="h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground font-body font-light max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          An Elite Innovation Guild • A Forbidden Arcane Tech Arena
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
