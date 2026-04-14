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
        <h1 className="text-2xl md:text-3xl font-black text-[var(--text-h)] tracking-tighter mb-4">
          Projects.
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-3">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bento-card p-5 space-y-3"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
              <div className="space-y-0.5">
                <h2 className="text-lg md:text-xl font-bold text-[var(--text-h)] leading-tight">
                  {project.title}
                </h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text)] opacity-70">
                  {project.date}
                </p>
              </div>

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
                >
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>

            <p className="text-xs md:text-sm leading-relaxed font-medium text-[var(--text)]">
              {project.description}
            </p>
          </motion.article>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;
