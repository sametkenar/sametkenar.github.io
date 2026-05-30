import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { leadership } from '../data/leadership';

const Leadership = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="space-y-4">
        {leadership.map((item) => (
          <article
            key={`${item.title}-${item.venue}`}
            className="bento-card p-6 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-[var(--text-h)]">
                  {item.title}
                </h2>
                <p className="text-base font-semibold text-[var(--text)]">
                  {item.venue}
                </p>
              </div>

              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
                <Calendar size={14} />
                {item.date}
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed font-medium text-[var(--text)]">
              {item.items.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Leadership;
