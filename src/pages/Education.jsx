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
        <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tighter mb-5">
          Education.
        </h1>
      </section>

      <div className="space-y-4">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.venue}`}
            className="bento-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--text-h)] leading-tight">
                {item.title}
              </h2>
              <p className="text-base font-semibold text-[var(--text)]">{item.venue}</p>
            </div>

            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[var(--text)] opacity-70">
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
