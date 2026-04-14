import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <section>
        <h1 className="text-4xl md:text-5xl font-black text-[var(--text-h)] tracking-tighter mb-6">
          Projects.
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-4">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bento-card p-8 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--text-h)] leading-tight">
                  {project.title}
                </h2>
                <p className="text-xs font-black uppercase tracking-widest text-[var(--text)] opacity-70">
                  {project.date}
                </p>
              </div>

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>

            <p className="text-sm md:text-base leading-relaxed font-medium text-[var(--text)]">
              {project.description}
            </p>
          </motion.article>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;
