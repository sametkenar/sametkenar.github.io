import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const groupedProjects = projects.reduce((acc, project) => {
    const startYear = project.date.match(/\b(20\d{2})\b/)?.[1];
    const label = project.date.includes('Present') ? 'Present' : startYear;
    const lastGroup = acc[acc.length - 1];

    if (!lastGroup || lastGroup.label !== label) {
      acc.push({ label, items: [project] });
    } else {
      lastGroup.items.push(project);
    }

    return acc;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 pb-16 pt-10"
    >
      <section className="space-y-8">
        {groupedProjects.map((group) => (
          <div key={group.label} className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,1fr)] gap-6">
            <div className="hidden md:flex items-start justify-center text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-60 pt-8">
              {group.label}
            </div>

            <div className="relative space-y-4">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />
              {group.items.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative"
                >
                  <div className="hidden md:block absolute left-0 top-8 h-4 w-4 rounded-full bg-[var(--accent)] border-4 border-[var(--bg)] shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
                  <Link
                    to={`/projects/${project.slug}`}
                    className="bento-card block p-5 space-y-3 transition-all duration-300 hover:border-[var(--accent)] group md:ml-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
                            <Calendar size={14} />
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
                        <h2 className="text-lg md:text-xl font-bold text-[var(--text-h)] leading-tight">
                          {project.title}
                        </h2>
                        {project.subtitle && (
                          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text)] opacity-70">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed font-medium text-[var(--text)]">
                      {project.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
