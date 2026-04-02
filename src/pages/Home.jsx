import { motion } from 'framer-motion';
import { ArrowRight, Globe, Mail, MapPin } from 'lucide-react';
import profileImg from '../assets/sametkenar.png';
import { profile } from '../data/profile';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 p-12 bento-card flex flex-col justify-end space-y-6"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(99,102,241,0.1)] text-[#6366f1] text-[10px] font-black uppercase tracking-[0.3em]">
                {profile.role}
              </span>
              <h1 className="text-5xl md:text-8xl text-gradient">{profile.name}</h1>
              <p className="text-lg md:text-xl text-[var(--text)] font-medium leading-relaxed max-w-4xl">
                {profile.bio}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-4 bento-card relative group overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Samet Kenar"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 p-8 bento-card space-y-5">
            <h2 className="text-xs font-black tracking-widest uppercase text-[var(--text)] opacity-50">
              Contact
            </h2>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-3 text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              >
                <Mail size={18} className="mt-1 text-[var(--accent)]" />
                <span className="font-medium leading-relaxed">{profile.email}</span>
              </a>
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
              >
                <Globe size={18} className="mt-1 text-[var(--accent)]" />
                <span className="font-medium leading-relaxed">{profile.website}</span>
              </a>
              <div className="flex items-start gap-3 text-[var(--text)]">
                <MapPin size={18} className="mt-1 text-[var(--accent)]" />
                <span className="font-medium leading-relaxed">{profile.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 p-8 bento-card space-y-5">
            <h2 className="text-xs font-black tracking-widest uppercase text-[var(--text)] opacity-50">
              Profiles
            </h2>
            <div className="space-y-4">
              {profile.profiles.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 text-[var(--text)] hover:text-[var(--text-h)] transition-colors"
                >
                  <span className="font-semibold">{item.label}</span>
                  <ArrowRight size={16} className="text-[var(--accent)]" />
                </a>
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
            className="md:col-span-4 p-8 bento-card flex items-center justify-between gap-4 text-[var(--text-h)] hover:border-[var(--accent)] transition-colors"
          >
            <div className="space-y-2">
              <p className="text-xs font-black tracking-widest uppercase text-[var(--text)] opacity-50">
                Curriculum Vitae
              </p>
              <p className="text-2xl font-bold">Education</p>
            </div>
            <ArrowRight className="text-[var(--accent)]" />
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
