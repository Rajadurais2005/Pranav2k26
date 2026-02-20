import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface Event {
  title: string;
  description: string;
  icon: string;
}

const technicalEvents: Event[] = [
  { title: 'Code Arcana', description: 'Competitive coding challenge pushing limits of algorithmic mastery.', icon: '⚡' },
  { title: 'Cipher Hunt', description: 'Decrypt ancient codes and solve cryptographic puzzles under pressure.', icon: '🔐' },
  { title: 'Forge & Deploy', description: 'Build and deploy a full-stack application in 24 hours.', icon: '⚒️' },
  { title: 'Neural Nexus', description: 'AI/ML challenge to create intelligent systems from raw data.', icon: '🧠' },
];

const nonTechnicalEvents: Event[] = [
  { title: 'War of Words', description: 'Debate tournament where rhetoric meets strategy.', icon: '🗡️' },
  { title: 'Rune Design', description: 'UI/UX design challenge crafting magical digital experiences.', icon: '✨' },
  { title: 'Guild Trials', description: 'Team-based treasure hunt across the campus realm.', icon: '🏰' },
  { title: 'Echo Chamber', description: 'Public speaking & storytelling contest of legendary tales.', icon: '📜' },
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="glass-dark rounded-sm p-6 cursor-pointer relative overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        onClick={() => setIsOpen(true)}
      >
        {/* Gold border glow on hover */}
        <div className="absolute inset-0 rounded-sm border border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: 'inset 0 0 30px hsla(43, 72%, 53%, 0.05)' }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, hsla(43, 72%, 53%, 0.03) 45%, hsla(43, 72%, 53%, 0.06) 50%, hsla(43, 72%, 53%, 0.03) 55%, transparent 60%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s linear infinite',
          }}
        />

        <span className="text-3xl mb-4 block">{event.icon}</span>
        <h3 className="font-display text-lg text-primary mb-2 tracking-wide">{event.title}</h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">{event.description}</p>
        
        <div className="mt-4 flex items-center gap-2 text-xs text-primary/60 font-body tracking-wider uppercase group-hover:text-primary/80 transition-colors">
          <span>Discover</span>
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            className="relative glass-dark rounded-sm p-8 max-w-lg w-full glow-gold"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors">
              <X size={20} />
            </button>
            <span className="text-5xl mb-4 block">{event.icon}</span>
            <h3 className="font-display text-2xl text-gold-gradient mb-2 tracking-wide">{event.title}</h3>
            <motion.div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4"
              initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-muted-foreground font-body leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {event.description}
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground/60 font-body mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Registration details and rules will be revealed soon. Prepare yourself for the challenge ahead.
            </motion.p>
            <motion.button
              className="px-8 py-3 font-display text-xs tracking-[0.3em] uppercase glass-gold rounded-sm text-primary
                hover:glow-gold-intense transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Register Soon
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 md:py-32 px-4">
      {/* Section divider */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body mb-4">⚜ The Forbidden Archive ⚜</p>
          <h2 className="text-4xl md:text-5xl font-display text-gold-gradient tracking-wide">Events</h2>
        </motion.div>

        {/* Technical */}
        <div className="mb-16">
          <motion.h3
            className="font-display text-xl text-primary/80 tracking-[0.3em] uppercase mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ⚜ Technical Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalEvents.map((e, i) => <EventCard key={e.title} event={e} index={i} />)}
          </div>
        </div>

        {/* Non-Technical */}
        <div>
          <motion.h3
            className="font-display text-xl text-primary/80 tracking-[0.3em] uppercase mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ⚜ Non-Technical Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((e, i) => <EventCard key={e.title} event={e} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
