import { motion } from 'framer-motion';
import { talks } from '../data/talks';
import TalkMap from '../components/TalkMap';
import { MapPin, Calendar } from 'lucide-react';

const Talks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-4xl font-bold mb-6">Talks & Presentations</h1>
        <p className="text-lg text-[var(--text)] max-w-2xl mb-12">
          An interactive map and listing of the various conferences, workshops, and talks I've participated in across the globe.
        </p>
        
        <TalkMap talks={talks} />
      </section>

      <section className="grid grid-cols-1 gap-6 pt-12">
        {talks.map((talk, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-all">
            <h3 className="text-xl font-bold mb-3">{talk.title}</h3>
            <div className="flex flex-wrap gap-6 text-[var(--text)]">
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {talk.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {talk.date}
              </span>
            </div>
            {talk.link && talk.link !== '#' && (
              <a href={talk.link} className="mt-4 inline-block text-[var(--accent)] font-medium hover:underline">
                View Presentation →
              </a>
            )}
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Talks;
