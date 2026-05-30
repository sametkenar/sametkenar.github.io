import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experience } from '../data/experience';

const Experience = () => {
  const groupedExperience = experience.reduce((acc, item) => {
    const years = item.date.match(/\b(20\d{2})\b/g);
    const endYear = years && years.length > 1 ? years[years.length - 1] : years?.[0];
    const label = item.date.includes('Present') ? 'Present' : endYear;
    const lastGroup = acc[acc.length - 1];

    if (!lastGroup || lastGroup.label !== label) {
      acc.push({ label, items: [item] });
    } else {
      lastGroup.items.push(item);
    }

    return acc;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="space-y-8">
        {groupedExperience.map((group) => (
          <div key={group.label} className="grid grid-cols-1 md:grid-cols-[110px_minmax(0,1fr)] gap-6">
            <div className="hidden md:flex items-center justify-center text-sm font-bold uppercase tracking-wide text-[var(--text)] opacity-70">
              {group.label}
            </div>

            <div className="space-y-6">

              {group.items.map((item) => (
                <motion.div
                  key={`${item.title}-${item.venue}`}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="relative flex flex-col md:flex-row gap-6"
                >
                  <div className="hidden md:flex flex-col items-center gap-3 w-[144px] flex-shrink-0 pt-6">
                    {item.logo && (
                      <div className="experience-logo">
                        <img src={item.logo} alt={item.venue} loading="lazy" />
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/experience/${item.slug}`}
                    className="flex-1 experience-card bento-card p-6 space-y-4 block group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 flex-1">
                        <div className="space-y-1">
                          <h2 className="text-lg md:text-xl font-bold text-[var(--text-h)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                            {item.title}
                          </h2>
                          <p className="text-sm font-semibold text-[var(--text)]">{item.venue}</p>
                        </div>

                        <div className="flex items-center gap-3 self-start">
                          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[11px] font-semibold uppercase tracking-wide text-[var(--text)] opacity-90 group-hover:border-[var(--accent)]/40 transition-colors">
                            <Calendar size={12} />
                            {item.date}
                          </p>
                          <ArrowRight
                            size={16}
                            className="text-[var(--text)] opacity-60 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                          />
                        </div>
                      </div>
                      {item.location && (
                        <p className="flex items-center gap-2 text-[11px] font-medium text-[var(--text)] opacity-80 mt-2">
                          <MapPin size={12} />
                          {item.location}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
