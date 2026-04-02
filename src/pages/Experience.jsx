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
        <h1 className="text-5xl md:text-7xl font-black text-[var(--text-h)] tracking-tighter mb-6">
          Work Experience.
        </h1>
      </section>

      <div className="space-y-6">
        {experience.map((item, idx) => (
          <motion.article
            key={`${item.title}-${item.venue}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bento-card p-10 space-y-5"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-h)] leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg font-semibold text-[var(--text)]">{item.venue}</p>
                {item.location && (
                  <p className="flex items-center gap-2 text-sm font-medium text-[var(--text)] opacity-80">
                    <MapPin size={14} />
                    {item.location}
                  </p>
                )}
              </div>

              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--text)] opacity-70">
                <Calendar size={14} />
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
