import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Experience from './Experience';

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 pb-16 pt-10 space-y-10"
    >
      <div className="flex justify-end">
        <a
          href="/Samet_Kenar_CV.pdf"
          download="Samet_Kenar_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-sm font-semibold text-white hover:bg-transparent hover:text-[var(--accent)] border border-transparent hover:border-[var(--accent)] transition-all"
        >
          <FileText size={16} />
          CV
        </a>
      </div>

      <Experience />
    </motion.div>
  );
};

export default ExperiencePage;
