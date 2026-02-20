import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import phoenixLogo from '@/assets/phoenix-logo.jpg';

const ArcaneFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Top golden wave */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating sparks */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Back to top orb */}
        <motion.button
          onClick={scrollToTop}
          className="mx-auto mb-8 w-14 h-14 rounded-full glass-gold flex items-center justify-center
            text-primary hover:glow-gold-intense transition-all duration-500 group"
          whileHover={{ scale: 1.15, rotate: 360 }}
          whileTap={{ scale: 0.95 }}
          transition={{ rotate: { duration: 0.6 } }}
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-float" />
        </motion.button>

        {/* Phoenix logo subtle glow */}
        <motion.img
          src={phoenixLogo}
          alt="PRANAV 2K26"
          className="w-16 h-16 rounded-full object-cover mx-auto mb-4 opacity-40"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ filter: 'brightness(0.8)' }}
        />

        <motion.p
          className="font-display text-xl text-gold-gradient tracking-wider mb-2"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          PRANAV 2K26
        </motion.p>
        <p className="text-sm text-muted-foreground font-body tracking-wider mb-6">
          The Arcane Phoenix Realm
        </p>
        
        <motion.div
          className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
        />

        <p className="text-xs text-muted-foreground/40 font-body tracking-wider">
          © 2026 PRANAV. All realms reserved.
        </p>
      </div>
    </footer>
  );
};

export default ArcaneFooter;
