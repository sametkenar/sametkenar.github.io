import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Database, BarChart, Code, Cpu, Layers, Zap, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import profileImg from '../assets/sametkenar.png';

// Stilize SVG İkonlar
const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fare hareketlerini takip et ve CSS değişkenlerine yaz
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardMouseMove = (e, cardRef) => {
    const { left, top } = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x-card', `${e.clientX - left}px`);
    cardRef.current.style.setProperty('--mouse-y-card', `${e.clientY - top}px`);
  };

  const bioRef = useRef(null);
  const imgRef = useRef(null);
  const stackRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <>
      <div className="spotlight" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Hero Bento */}
          <motion.div 
            ref={bioRef}
            onMouseMove={(e) => handleCardMouseMove(e, bioRef)}
            variants={itemVariants}
            className="md:col-span-8 p-12 bento-card flex flex-col justify-end space-y-6 group"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(99,102,241,0.1)] text-[#6366f1] text-[10px] font-black uppercase tracking-[0.3em]">
                IT Business Analyst
              </span>
              <h1 className="text-5xl md:text-8xl text-gradient">Samet Kenar</h1>
              <p className="text-xl md:text-2xl text-[var(--text)] font-medium max-w-2xl leading-relaxed">
                Transforming complex data into <span className="text-[var(--text-h)] italic">AI-powered</span> technical solutions. Statistics expert from <span className="text-[var(--text-h)] font-bold">METU</span>.
              </p>
            </div>
          </motion.div>

          {/* Profile Image Bento */}
          <motion.div 
            ref={imgRef}
            onMouseMove={(e) => handleCardMouseMove(e, imgRef)}
            variants={itemVariants}
            className="md:col-span-4 bento-card relative group overflow-hidden"
          >
            <img 
              src={profileImg} 
              alt="Samet Kenar" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60"></div>
          </motion.div>

          {/* Tech Stack Bento */}
          <motion.div 
            ref={stackRef}
            onMouseMove={(e) => handleCardMouseMove(e, stackRef)}
            variants={itemVariants}
            className="md:col-span-4 p-10 bento-card space-y-8"
          >
            <h3 className="text-xs font-black tracking-widest uppercase text-[var(--text)] opacity-50">Architecture</h3>
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-1">
                  <p className="text-[var(--text-h)] font-bold">.NET Core</p>
                  <div className="h-1 w-full bg-[var(--text-h)]/5 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[90%]"></div>
                  </div>
               </div>
               <div className="space-y-1">
                  <p className="text-[var(--text-h)] font-bold">Python</p>
                  <div className="h-1 w-full bg-[var(--text-h)]/5 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[85%]"></div>
                  </div>
               </div>
               <div className="space-y-1">
                  <p className="text-[var(--text-h)] font-bold">React</p>
                  <div className="h-1 w-full bg-[var(--text-h)]/5 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[80%]"></div>
                  </div>
               </div>
               <div className="space-y-1">
                  <p className="text-[var(--text-h)] font-bold">R Shiny</p>
                  <div className="h-1 w-full bg-[var(--text-h)]/5 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[95%]"></div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* GitHub Bento */}
          <motion.div 
            ref={statsRef}
            onMouseMove={(e) => handleCardMouseMove(e, statsRef)}
            variants={itemVariants}
            className="md:col-span-5 p-10 bento-card flex items-center justify-between group"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[var(--text-h)]">Open Source</h3>
              <p className="text-sm text-[var(--text)]">Building tools for the future of business analysis.</p>
              <a href="https://github.com/sametkenar" target="_blank" className="flex items-center gap-2 text-[#6366f1] text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                 Connect Github <ArrowRight size={14} />
              </a>
            </div>
            <div className="p-4 rounded-3xl bg-[var(--text-h)]/5 group-hover:bg-[#6366f1] group-hover:text-white transition-colors duration-500 text-[var(--text-h)]">
               <GithubIcon />
            </div>
          </motion.div>

          {/* Social Links Bento */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 grid grid-cols-1 gap-4"
          >
            <a href="https://linkedin.com/in/sametkenar" target="_blank" className="bento-card flex items-center justify-center hover:bg-[#0077b5] group transition-colors duration-500 text-[var(--text-h)] hover:text-white">
               <LinkedinIcon />
            </a>
            <a href="mailto:samet.kenarr@gmail.com" className="bento-card flex items-center justify-center hover:bg-[var(--text-h)] group transition-colors duration-500 text-[var(--text-h)] hover:text-[var(--bg)]">
               <Mail size={24} />
            </a>
          </motion.div>

          {/* Large Services Bento */}
          <motion.div 
            ref={servicesRef}
            onMouseMove={(e) => handleCardMouseMove(e, servicesRef)}
            variants={itemVariants}
            className="md:col-span-12 p-12 bento-card"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               <div className="space-y-6 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center"><Zap className="text-indigo-500" size={32} /></div>
                  <h4 className="text-2xl font-bold text-[var(--text-h)] leading-tight">AI & Agentic <br /> Workflows</h4>
                  <p className="text-[var(--text)] leading-relaxed font-medium">Designing intelligent agents that automate complex business decision-making processes.</p>
               </div>
               <div className="space-y-6 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center"><Layers className="text-indigo-500" size={32} /></div>
                  <h4 className="text-2xl font-bold text-[var(--text-h)] leading-tight">Enterprise <br /> Architecture</h4>
                  <p className="text-[var(--text)] leading-relaxed font-medium">Building scalable .NET and Python solutions for critical internal business systems.</p>
               </div>
               <div className="space-y-6 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center"><BarChart size={32} className="text-indigo-500" /></div>
                  <h4 className="text-2xl font-bold text-[var(--text-h)] leading-tight">Statistical <br /> Intelligence</h4>
                  <p className="text-[var(--text)] leading-relaxed font-medium">Applying METU-grade statistical depth to discover hidden opportunities in your data.</p>
               </div>
            </div>
          </motion.div>

        </div>
        
        {/* Experience Shortcut */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center pt-20 pb-10"
        >
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-12 py-6 rounded-full overflow-hidden transition-all duration-500"
          >
             <div className="absolute inset-0 bg-white group-hover:bg-[#6366f1] transition-colors duration-500"></div>
             <div className="relative flex items-center gap-4 text-black group-hover:text-white font-black uppercase tracking-widest text-sm">
                Explore Selected Projects
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
             </div>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
