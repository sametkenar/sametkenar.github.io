import { motion } from 'framer-motion';
import { Code, ExternalLink, Mail, X } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-h)] tracking-tight">
          Hi, I'm Samet Kenar.
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text)] max-w-3xl leading-relaxed">
          I'm a researcher and developer passionate about building innovative tools and exploring the intersection of technology and academia.
        </p>
        
        <div className="flex space-x-6 pt-4">
          <a href="https://github.com/sametkenar" target="_blank" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
            <Code size={28} />
          </a>
          <a href="#" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
            <ExternalLink size={28} />
          </a>
          <a href="#" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
            <X size={28} />
          </a>
          <a href="mailto:hello@example.com" className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--accent-bg)] hover:border-[var(--accent-border)] transition-all group">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent)]">Research</h3>
          <p className="text-[var(--text)] leading-relaxed">
            Focused on distributed systems and cloud computing. Check out my latest publications and research projects.
          </p>
        </div>
        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--social-bg)] hover:border-[var(--border)] transition-all">
          <h3 className="text-2xl font-bold mb-4">Development</h3>
          <p className="text-[var(--text)] leading-relaxed">
            Building modern web applications with React, Node.js, and everything in between.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
