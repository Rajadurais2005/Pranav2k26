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
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <>
      <motion.div
        className="glass-dark rounded-sm p-6 cursor-pointer relative overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        style={{
          transform: `perspective(600px) rotateX(${(mousePos.y - 0.5) * -5}deg) rotateY(${(mousePos.x - 0.5) * 5}deg)`,
        }}
      >
        {/* Rune watermark */}
        <div className="absolute top-2 right-2 text-4xl text-primary/[0.04] font-display select-none pointer-events-none">✦</div>

        {/* Gold border glow on hover */}
        <div className="absolute inset-0 rounded-sm border border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: 'inset 0 0 30px hsla(43, 72%, 53%, 0.05)' }}
        />
        
        {/* Spotlight following cursor */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, hsla(43, 72%, 53%, 0.08), transparent 60%)`,
          }}
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
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          
          {/* Energy burst on open */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-primary"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: [0, 30], opacity: [0.6, 0] }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="relative glass-dark rounded-sm p-8 max-w-lg w-full glow-gold"
            initial={{ scale: 0.85, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Arcane circle watermark */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] text-primary/[0.03] pointer-events-none select-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              ⎊
            </motion.div>

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
                hover:glow-gold-intense transition-all duration-500 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Pulse aura */}
              <motion.span
                className="absolute inset-0 rounded-sm"
                animate={{
                  boxShadow: [
                    '0 0 10px hsla(43, 72%, 53%, 0.1)',
                    '0 0 20px hsla(43, 72%, 53%, 0.3)',
                    '0 0 10px hsla(43, 72%, 53%, 0.1)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
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
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-6xl mx-auto">
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
