import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ArcaneFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 overflow-hidden">
      {/* Top divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          className="mx-auto mb-8 w-12 h-12 rounded-full glass-gold flex items-center justify-center
            text-primary hover:glow-gold transition-all duration-500 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-float" />
        </motion.button>

        <p className="font-display text-xl text-gold-gradient tracking-wider mb-2">
          PRANAV 2026
        </p>
        <p className="text-sm text-muted-foreground font-body tracking-wider mb-6">
          The Arcane Digital Realm
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
