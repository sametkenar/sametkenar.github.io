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
        <h1 className="text-5xl md:text-7xl font-black text-[var(--text-h)] tracking-tighter mb-6">
          Skills.
        </h1>
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skills.map((group) => (
          <motion.article
            key={group.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bento-card p-10 space-y-6"
          >
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
                {group.badges.map((badge, idx) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="skill-badge-shell"
                  >
                    <img
                      src={badge.src}
                      alt={badge.label}
                      loading="lazy"
                      className="h-8 md:h-9 w-auto"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-base leading-relaxed font-medium text-[var(--text)]">
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
