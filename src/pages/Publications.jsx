import { motion } from 'framer-motion';
import { publications } from '../data/publications';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';

const Publications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-4xl font-bold mb-6">Publications</h1>
        <p className="text-lg text-[var(--text)] max-w-2xl">
          A collection of my research papers, journal articles, and academic contributions.
        </p>
      </section>

      <section className="space-y-8">
        {publications.map((pub, idx) => (
          <div key={idx} className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg)] hover:shadow-lg transition-all group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[var(--text-h)] group-hover:text-[var(--accent)] transition-colors">
                  {pub.title}
                </h3>
                <p className="text-[var(--text)] font-medium italic">
                  {pub.venue}, {pub.date.split('-')[0]}
                </p>
                <p className="text-[var(--text)] leading-relaxed line-clamp-3">
                  {pub.excerpt}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {pub.paperurl && (
                <a
                  href={pub.paperurl}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-bg)] text-[var(--accent)] font-medium hover:bg-[var(--accent)] hover:text-white transition-all"
                >
                  <ExternalLink size={18} />
                  Download PDF
                </a>
              )}
              {pub.citation && (
                <div className="flex items-center gap-2 px-4 py-2 text-[var(--text)] text-sm">
                  <Quote size={16} />
                  <span className="italic">Cite this paper</span>
                </div>
              )}
            </div>
            
            {pub.citation && (
              <div className="mt-4 p-4 bg-[var(--code-bg)] rounded-lg text-sm font-mono text-[var(--text)] border border-[var(--border)]">
                {pub.citation}
              </div>
            )}
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Publications;
