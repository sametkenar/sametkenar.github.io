import { motion } from 'framer-motion';
import profileImg from '../assets/sametkenar.png';
import { profile } from '../data/profile';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 32, opacity: 0, filter: 'blur(12px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(120px,auto)]">
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 md:row-span-2 self-center h-48 py-2 px-6 bento-card flex flex-col justify-center space-y-1 overflow-hidden"
          >
            <div className="space-y-1 relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-3xl md:text-5xl text-gradient"
              >
                {profile.name}
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="hero-divider"
              />
              <p className="text-sm md:text-base text-[var(--text)] font-medium leading-relaxed max-w-3xl">
                IT Business Analyst building AI-powered applications and internal systems that solve real business problems.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold uppercase tracking-wide text-[var(--text)]">
                  Web & Desktop Developer
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold uppercase tracking-wide text-[var(--text)]">
                  Data Scientist & Statistician
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold uppercase tracking-wide text-[var(--text)]">
                  Business Analyst
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-4 md:row-span-2 bento-card relative group overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Samet Kenar"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60"></div>
          </motion.div>

        </div>
      </motion.div>
    </>
  );
};

export default Home;
