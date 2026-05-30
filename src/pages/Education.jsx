import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { education } from '../data/education';

const Education = ({ showHeading = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      {showHeading && (
        <section>
          <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tighter mb-5">
            Education.
          </h1>
        </section>
      )}

      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.venue}`}
            className="relative grid grid-cols-1 md:grid-cols-[144px_minmax(0,1fr)] gap-6"
          >
            <div className="hidden md:flex items-start justify-center pt-6">
              {item.logo && (
                <div className="education-logo">
                  <img src={item.logo} alt={item.venue} loading="lazy" />
                </div>
              )}
            </div>

            <div className="bento-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--text-h)] leading-tight">
                  {item.title}
                </h2>
                <p className="text-base font-semibold text-[var(--text)]">{item.venue}</p>
              </div>

              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
                <Calendar size={14} />
                {item.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
