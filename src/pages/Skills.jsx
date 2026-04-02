import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-5xl md:text-7xl font-black text-[var(--text-h)] tracking-tighter mb-6">
          Skills.
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <article key={group.title} className="bento-card p-10 space-y-6">
            <h2 className="text-2xl font-bold text-[var(--text-h)]">
              {group.title}
            </h2>

            {group.items ? (
              <div className="space-y-3">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-lg leading-relaxed font-medium text-[var(--text)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : group.badges ? (
              <div className="flex flex-wrap gap-3">
                {group.badges.map((badge) => (
                  <img
                    key={badge.label}
                    src={badge.src}
                    alt={badge.label}
                    loading="lazy"
                    className="h-8 md:h-9 w-auto"
                  />
                ))}
              </div>
            ) : (
              <p className="text-base leading-relaxed font-medium text-[var(--text)]">
                {group.text}
              </p>
            )}
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
