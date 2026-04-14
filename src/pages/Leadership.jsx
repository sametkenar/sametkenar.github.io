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
      <section>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tighter mb-5">
          Service and leadership.
        </h1>
      </section>

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

              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text)] opacity-70">
                <Calendar size={14} />
                {item.date}
              </p>
            </div>

            <div className="space-y-2">
              {item.items.map((detail) => (
                <p
                  key={detail}
                  className="text-sm md:text-base leading-relaxed font-medium text-[var(--text)]"
                >
                  {detail}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Leadership;
