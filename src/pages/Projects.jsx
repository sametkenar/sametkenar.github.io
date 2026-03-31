import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
        <p className="text-lg text-[var(--text)] max-w-2xl">
          A showcase of my recent projects, open-source contributions, and technical work.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--bg)] hover:shadow-xl transition-all">
            <div className="aspect-video bg-[var(--code-bg)] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-[var(--text-h)] group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--text)] leading-relaxed">
                {project.excerpt}
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors">
                  <Code size={18} />
                  Code
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;
