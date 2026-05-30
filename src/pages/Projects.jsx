import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
        <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tighter mb-5">
          Projects.
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-4">
        {projects.slice(0, 3).map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
          >
            <Link
              to={`/projects/${project.slug}`}
              className="bento-card block p-6 space-y-4 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
                      {project.date}
                    </p>
                    <div className="flex items-center gap-2 md:justify-end">
                      {project.company && (
                        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70 md:text-right">
                          {project.company}
                        </p>
                      )}
                      <ArrowRight
                        size={18}
                        className="text-[var(--text)] opacity-60 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                      />
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--text-h)] leading-tight">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-sm md:text-base leading-relaxed font-medium text-[var(--text)]">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </section>

      <div className="flex justify-end">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--text-h)] transition-colors"
        >
          See all projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
