import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16"
    >
      <section>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Experience.</h1>
        <p className="text-xl text-[var(--text)] max-w-2xl font-medium">
          A professional timeline of my journey in data science, analytics, and business intelligence.
        </p>
      </section>

      <div className="space-y-8 relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block"></div>
        
        {experience.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative md:pl-24 group"
          >
            <div className="absolute left-0 md:left-[27px] top-8 w-[10px] h-[10px] rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors hidden md:block border-4 border-[var(--bg)] box-content z-10"></div>
            
            <div className="bento-card p-8 group-hover:border-[var(--accent)] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                 <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-[var(--accent-light)] text-[var(--accent)] text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                      {item.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">{item.title}</h3>
                    <p className="text-lg font-bold text-[var(--text)] mt-1">{item.venue}</p>
                 </div>
                 <div className="flex flex-col items-start md:items-end text-sm font-bold text-[var(--text)] opacity-60 uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                 </div>
              </div>
              
              <p className="text-[#a1a1aa] text-sm mb-6 leading-relaxed font-medium max-w-2xl italic">
                {item.description}
              </p>
              
              <div className="flex items-center gap-4 text-[var(--accent)]">
                 <Briefcase size={20} />
                 <div className="h-px flex-grow bg-[var(--border)] group-hover:bg-[var(--accent-light)] transition-colors"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
