import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ⚜ Ancient Prophecy ⚜
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
          PRANAV 2026 is not merely an event — it is a convergence of minds, a summit where 
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
          the future in the crucible of competition and collaboration.
        </motion.p>

        {/* Date section */}
        <motion.div
          className="mt-16 glass-dark rounded-sm p-8 inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-3">Date</p>
          <motion.p
            className="font-display text-2xl text-gold-gradient tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            To Be Announced
          </motion.p>
          {/* Spinning clock symbol */}
          <motion.div
            className="mt-4 text-3xl text-primary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            ⏳
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
