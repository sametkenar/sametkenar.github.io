import { motion } from 'framer-motion';
import { ArrowRight, Globe, Mail, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import profileImg from '../assets/sametkenar.png';
import { profile } from '../data/profile';

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      document.body.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      <div className="spotlight" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(160px,auto)]">
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 p-6 bento-card flex flex-col justify-end space-y-4 overflow-hidden"
          >
            <div className="hero-orb" />
            <div className="space-y-4 relative z-10">
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
                {profile.bio}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-4 bento-card relative group overflow-hidden"
          >
            <div className="absolute inset-0 hero-image-glow" />
            <img
              src={profileImg}
              alt="Samet Kenar"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 p-6 bento-card space-y-4">
            <h2 className="text-[11px] font-black tracking-widest uppercase text-[var(--text)] opacity-50">
              Contact
            </h2>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-3 text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              >
                <Mail size={16} className="mt-1 text-[var(--accent)]" />
                <span className="text-sm font-medium leading-relaxed">{profile.email}</span>
              </a>
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              >
                <Globe size={16} className="mt-1 text-[var(--accent)]" />
                <span className="text-sm font-medium leading-relaxed">{profile.website}</span>
              </a>
              <div className="flex items-start gap-3 text-[var(--text)]">
                <MapPin size={16} className="mt-1 text-[var(--accent)]" />
                <span className="text-sm font-medium leading-relaxed">{profile.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 p-6 bento-card space-y-4">
            <h2 className="text-[11px] font-black tracking-widest uppercase text-[var(--text)] opacity-50">
              Profiles
            </h2>
            <div className="space-y-3">
              {profile.profiles.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between gap-4 text-[var(--text)] hover:text-[var(--text-h)] transition-colors text-sm"
                >
                  <span className="font-semibold">{item.label}</span>
                  <ArrowRight size={14} className="text-[var(--accent)]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="#education"
            onClick={(event) => {
              event.preventDefault();
              document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:col-span-4 p-6 bento-card flex items-center justify-between gap-4 text-[var(--text-h)] hover:border-[var(--accent)] transition-colors"
          >
            <div className="space-y-1.5">
              <p className="text-[11px] font-black tracking-widest uppercase text-[var(--text)] opacity-50">
                Curriculum Vitae
              </p>
              <p className="text-xl font-bold">Education</p>
            </div>
            <ArrowRight size={18} className="text-[var(--accent)]" />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
