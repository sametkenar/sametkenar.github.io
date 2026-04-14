import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-2xl md:text-3xl font-black text-[var(--text-h)] tracking-tighter mb-4">
          Skills.
        </h1>
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {skills.map((group) => (
          <motion.article
            key={group.title}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="bento-card p-5 space-y-3"
          >
            <h2 className="text-lg font-bold text-[var(--text-h)]">
              {group.title}
            </h2>

            {group.items ? (
              <div className="space-y-1.5">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-xs md:text-sm leading-relaxed font-medium text-[var(--text)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ) : group.badges ? (
              <div className="flex flex-wrap gap-2">
                {group.badges.map((badge, idx) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="skill-badge-shell !p-1 !rounded-lg"
                  >
                    <img
                      src={badge.src}
                      alt={badge.label}
                      loading="lazy"
                      className="h-6 md:h-7 w-auto"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-xs md:text-sm leading-relaxed font-medium text-[var(--text)]">
                {group.text}
              </p>
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
