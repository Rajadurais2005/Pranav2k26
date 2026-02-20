import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortalEntry = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Circle starts
      setTimeout(() => setPhase(2), 1500),  // Runes appear
      setTimeout(() => setPhase(3), 2500),  // Energy burst
      setTimeout(() => setPhase(4), 3200),  // Portal opens
      setTimeout(() => onComplete(), 4000), // Done
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const runeSymbols = ['⚡', '✦', '◈', '⟡', '✧', '◇', '⬡', '☽'];

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating background particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: 'hsl(43, 72%, 53%)' }}
              initial={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, -100],
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Magic Circle */}
          <motion.div
            className="absolute"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
              scale: phase >= 1 ? [0, 1.2, 1] : 0,
              opacity: phase >= 1 ? 1 : 0,
              rotate: 360,
            }}
            transition={{ scale: { duration: 1 }, rotate: { duration: 8, repeat: Infinity, ease: 'linear' } }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/40 relative">
              <div className="absolute inset-2 rounded-full border border-primary/20" />
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-energy-pulse" />
            </div>
          </motion.div>

          {/* Rotating Runes */}
          {phase >= 2 && runeSymbols.map((rune, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl text-primary font-display"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.6],
                scale: 1,
                x: Math.cos((i / runeSymbols.length) * Math.PI * 2) * 170,
                y: Math.sin((i / runeSymbols.length) * Math.PI * 2) * 170,
              }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ textShadow: '0 0 20px hsl(43, 72%, 53%)' }}
            >
              {rune}
            </motion.span>
          ))}

          {/* Energy Burst */}
          {phase >= 3 && (
            <>
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 40], opacity: [1, 0] }}
                transition={{ duration: 0.8 }}
              />
              {/* Lightning cracks */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`bolt-${i}`}
                  className="absolute h-0.5 bg-primary origin-left"
                  style={{ rotate: `${i * 60}deg` }}
                  initial={{ width: 0, opacity: 1 }}
                  animate={{ width: [0, 200, 0], opacity: [1, 1, 0] }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
              ))}
            </>
          )}

          {/* Center text */}
          <motion.div
            className="absolute text-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-sm tracking-[0.5em] uppercase text-primary/60 font-body"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Entering the Realm
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortalEntry;
