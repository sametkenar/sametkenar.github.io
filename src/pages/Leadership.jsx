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
        <h1 className="text-2xl md:text-3xl font-black text-[var(--text-h)] tracking-tighter mb-4">
          Service and leadership.
        </h1>
      </section>

      <div className="space-y-3">
        {leadership.map((item) => (
          <article
            key={`${item.title}-${item.venue}`}
            className="bento-card p-5 space-y-3"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="space-y-0.5">
                <h2 className="text-lg font-bold text-[var(--text-h)]">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold text-[var(--text)]">
                  {item.venue}
                </p>
              </div>

              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text)] opacity-70">
                <Calendar size={12} />
                {item.date}
              </p>
            </div>

            <div className="space-y-1.5">
              {item.items.map((detail) => (
                <p
                  key={detail}
                  className="text-xs md:text-sm leading-relaxed font-medium text-[var(--text)]"
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
