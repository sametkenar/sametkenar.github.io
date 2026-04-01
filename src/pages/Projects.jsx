import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Code, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16"
    >
      <section className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">Selected <br /> <span className="text-[var(--accent)]">Projects.</span></h1>
        <p className="text-xl text-[var(--text)] max-w-2xl font-medium leading-relaxed">
          Showcasing my work in AI integration, statistical modeling, and full-stack application development.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative glass-card overflow-hidden bg-[var(--card-bg)]"
          >
            <div className="aspect-[16/10] bg-[#1a1a1d] overflow-hidden relative border-b border-[var(--border)]">
              <div className="absolute inset-0 bg-[var(--accent)] opacity-10 group-hover:opacity-20 transition-opacity"></div>
              {/* Proje görseli */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90"
              />
              <div className="absolute top-6 right-6 p-2 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                 <ArrowUpRight size={20} />
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-white group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-[var(--text)] text-sm leading-relaxed font-medium">
                  {project.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags?.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[var(--border)] text-[var(--text)] text-[10px] font-black uppercase tracking-widest group-hover:border-[var(--accent)] group-hover:text-white transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-6 border-t border-[var(--border)]">
                <a href="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-white hover:text-[var(--accent)] transition-colors">
                  <Code size={16} />
                  Source Code
                </a>
                <a href="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-white hover:text-[var(--accent)] transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Daha Fazlası İçin GitHub Call-to-Action */}
      <section className="p-12 glass-card bg-gradient-to-r from-[var(--card-bg)] to-[var(--accent-light)] flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-[var(--accent-light)]">
         <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-black text-white">Want to see more?</h3>
            <p className="text-[var(--text)] font-medium">I have dozens of open-source and internal tools on my GitHub.</p>
         </div>
         <a href="https://github.com/sametkenar" target="_blank" className="px-10 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-tighter hover:bg-[var(--accent)] hover:text-white transition-all shadow-2xl">
            Explore All Repo
         </a>
      </section>
    </motion.div>
  );
};

export default Projects;
