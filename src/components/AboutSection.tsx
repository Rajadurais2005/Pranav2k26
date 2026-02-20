import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Rune frame corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-primary/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-primary/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-primary/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-primary/20" />

      {/* Background rotating sigils */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-primary/[0.03] font-display select-none pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        ⎊
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ⚜ The Phoenix Prophecy ⚜
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-gradient tracking-wide mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About PRANAV
        </motion.h2>

        <motion.div
          className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.p
          className="text-lg text-muted-foreground font-body leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          PRANAV 2K26 is not merely an event — it is a convergence of minds, a summit where 
          innovation meets ancient wisdom, where technology transcends the ordinary and enters 
          the realm of the extraordinary.
        </motion.p>

        <motion.p
          className="text-base text-muted-foreground/70 font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Join the guild of innovators, coders, designers, and visionaries as we forge 
          the future in the crucible of competition and collaboration. The phoenix rises.
        </motion.p>

        {/* Date section */}
        <motion.div
          className="mt-16 glass-dark rounded-sm p-8 inline-block relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, hsla(43, 72%, 53%, 0.05) 50%, transparent 60%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          />
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-3">Date</p>
          <motion.p
            className="font-display text-2xl text-gold-gradient tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            To Be Announced
          </motion.p>
          <motion.div
            className="mt-4 text-3xl text-primary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            ⏳
          </motion.div>
          {/* Aura pulse */}
          <motion.div
            className="absolute inset-0 rounded-sm pointer-events-none"
            animate={{
              boxShadow: [
                '0 0 20px hsla(43, 72%, 53%, 0.05)',
                '0 0 40px hsla(43, 72%, 53%, 0.1)',
                '0 0 20px hsla(43, 72%, 53%, 0.05)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
