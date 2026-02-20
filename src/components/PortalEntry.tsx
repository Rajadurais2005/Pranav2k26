import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import phoenixLogo from '@/assets/phoenix-logo.jpg';

const PortalEntry = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
      setTimeout(() => onComplete(), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const runeSymbols = ['⚡', '✦', '◈', '⟡', '✧', '◇', '⬡', '☽', '⊛', '⍟', '⎊', '☀'];

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating gold dust */}
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: 'hsl(43, 72%, 53%)' }}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) - 500,
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) - 400,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, -150],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Outer arcane rune circle */}
          <motion.div
            className="absolute"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
              scale: phase >= 1 ? [0, 1.3, 1] : 0,
              opacity: phase >= 1 ? 0.6 : 0,
              rotate: 360,
            }}
            transition={{ scale: { duration: 1 }, rotate: { duration: 12, repeat: Infinity, ease: 'linear' } }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/30 relative">
              <div className="absolute inset-3 rounded-full border border-primary/15" />
              <div className="absolute inset-6 rounded-full border border-primary/10" />
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-energy-pulse" />
            </div>
          </motion.div>

          {/* Inner counter-rotating circle */}
          <motion.div
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase >= 1 ? 1 : 0,
              opacity: phase >= 1 ? 0.4 : 0,
              rotate: -360,
            }}
            transition={{ scale: { duration: 1 }, rotate: { duration: 8, repeat: Infinity, ease: 'linear' } }}
          >
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-full border border-primary/20" />
          </motion.div>

          {/* Rotating Runes */}
          {phase >= 2 && runeSymbols.map((rune, i) => (
            <motion.span
              key={i}
              className="absolute text-xl md:text-2xl text-primary font-display"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5],
                scale: 1,
                x: Math.cos((i / runeSymbols.length) * Math.PI * 2) * 190,
                y: Math.sin((i / runeSymbols.length) * Math.PI * 2) * 190,
              }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ textShadow: '0 0 20px hsl(43, 72%, 53%)' }}
            >
              {rune}
            </motion.span>
          ))}

          {/* Phoenix Logo assembling from glow */}
          <motion.div
            className="absolute z-10"
            initial={{ scale: 0.3, opacity: 0, filter: 'brightness(3) blur(20px)' }}
            animate={{
              scale: phase >= 2 ? [0.3, 1.1, 1] : 0.3,
              opacity: phase >= 2 ? 1 : 0,
              filter: phase >= 3 ? 'brightness(1) blur(0px)' : 'brightness(3) blur(10px)',
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={phoenixLogo}
              alt="PRANAV 2K26 Phoenix"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
              style={{
                boxShadow: '0 0 60px hsla(43, 72%, 53%, 0.5), 0 0 120px hsla(43, 72%, 53%, 0.2)',
              }}
            />
          </motion.div>

          {/* Energy Burst */}
          {phase >= 3 && (
            <>
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-primary z-20"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 50], opacity: [0.8, 0] }}
                transition={{ duration: 0.8 }}
              />
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`bolt-${i}`}
                  className="absolute h-0.5 bg-primary origin-left z-20"
                  style={{ rotate: `${i * 45}deg` }}
                  initial={{ width: 0, opacity: 1 }}
                  animate={{ width: [0, 250, 0], opacity: [1, 1, 0] }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                />
              ))}
            </>
          )}

          {/* Center text */}
          <motion.div
            className="absolute text-center z-20 mt-44 md:mt-52"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-xs md:text-sm tracking-[0.5em] uppercase text-primary/60 font-body"
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              The Phoenix Awakens
            </motion.p>
          </motion.div>

          {/* Screen shake on burst */}
          {phase >= 3 && (
            <motion.div
              className="fixed inset-0 z-0"
              animate={{ x: [0, -3, 3, -2, 2, 0], y: [0, 2, -2, 1, -1, 0] }}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* Flash */}
          {phase >= 3 && (
            <motion.div
              className="fixed inset-0 bg-primary/20 z-30"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortalEntry;
