import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Education.</h1>
        <p className="text-xl text-[var(--text)] max-w-2xl font-medium">
          The foundation of my analytical thinking and statistical approach.
        </p>
      </section>

      <div className="space-y-6">
        {education.map((item, idx) => (
          <div key={idx} className="bento-card p-10 flex flex-col md:flex-row justify-between gap-8 group">
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-[#6366f1]">
                  <GraduationCap size={32} />
                  <span className="text-sm font-black uppercase tracking-[0.3em] opacity-60">Degree</span>
               </div>
               <h3 className="text-3xl font-bold text-white group-hover:text-[#6366f1] transition-colors leading-tight">
                  {item.title}
               </h3>
               <p className="text-xl font-bold text-slate-300 italic">{item.venue}</p>
               <p className="text-[#a1a1aa] leading-relaxed max-w-xl font-medium">
                  {item.description}
               </p>
            </div>
            <div className="flex flex-col items-start md:items-end text-sm font-black text-slate-500 space-y-2 uppercase tracking-widest pt-4 md:pt-0">
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
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
