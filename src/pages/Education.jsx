import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-5xl md:text-7xl font-black text-[var(--text-h)] tracking-tighter mb-6">
          Education.
        </h1>
      </section>

      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.venue}`}
            className="bento-card p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-h)] leading-tight">
                {item.title}
              </h2>
              <p className="text-lg font-semibold text-[var(--text)]">{item.venue}</p>
            </div>

            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--text)] opacity-70">
              <Calendar size={14} />
              {item.date}
            </p>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
