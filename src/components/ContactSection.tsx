import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'pranav2026@college.edu', href: 'mailto:pranav2026@college.edu' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Venue', value: 'College Campus, India', href: '#' },
];

const ContactSection = () => {
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
          ⚜ Royal Seal ⚜
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-display text-gold-gradient tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="glass-dark rounded-sm p-8 group relative overflow-hidden block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Emboss shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, hsla(43, 72%, 53%, 0.08) 50%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 rounded-sm border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
              
              <contact.icon className="w-8 h-8 text-primary/60 mx-auto mb-4 group-hover:text-primary transition-colors duration-300" />
              <p className="font-display text-sm tracking-wider text-primary mb-2">{contact.label}</p>
              <p className="text-sm text-muted-foreground font-body">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
