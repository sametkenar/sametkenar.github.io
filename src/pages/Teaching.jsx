import { motion } from 'framer-motion';
import { teaching } from '../data/teaching';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Teaching = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-4xl font-bold mb-6">Teaching Experience</h1>
        <p className="text-lg text-[var(--text)] max-w-2xl">
          A record of courses I've taught, workshops I've led, and academic mentorship.
        </p>
      </section>

      <section className="space-y-6">
        {teaching.map((item, idx) => (
          <div key={idx} className="flex gap-6 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] transition-all">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)] shrink-0">
              <GraduationCap size={24} />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] text-xs font-bold uppercase tracking-wider">
                {item.type}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-h)]">{item.title}</h3>
              <p className="text-lg font-medium text-[var(--text)]">{item.venue}</p>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--text)] pt-2">
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {item.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {item.date.split('-')[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Teaching;
