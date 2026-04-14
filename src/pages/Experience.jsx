import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-2xl md:text-3xl font-black text-[var(--text-h)] tracking-tighter mb-4">
          Work Experience.
        </h1>
      </section>

      <div className="relative space-y-3 md:space-y-4">
        <div className="experience-rail hidden md:block" />
        {experience.map((item, idx) => (
          <motion.article
            key={`${item.title}-${item.venue}`}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.55 }}
            className="experience-card md:ml-10 bento-card p-5 space-y-3"
          >
            <div className="experience-dot hidden md:block" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="space-y-0.5">
                <h2 className="text-lg md:text-xl font-bold text-[var(--text-h)] leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold text-[var(--text)]">{item.venue}</p>
                {item.location && (
                  <p className="flex items-center gap-2 text-[10px] font-medium text-[var(--text)] opacity-80">
                    <MapPin size={12} />
                    {item.location}
                  </p>
                )}
              </div>

              <p className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[10px] font-black uppercase tracking-widest text-[var(--text)] opacity-90">
                <Calendar size={12} />
                {item.date}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
