import { motion } from 'framer-motion';
import Education from './Education';
import Skills from './Skills';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 pb-16 pt-10 space-y-10"
    >
      <div className="space-y-10">
        <section>
          <h1 className="text-3xl md:text-4xl font-black text-[var(--text-h)] tracking-tighter mb-5">
            About.
          </h1>
          <div className="bento-card p-6">
            <p className="text-sm md:text-base text-[var(--text)] leading-relaxed">
              I am an IT Business Analyst with a background in Statistics and Data Science. My work focuses on building AI-powered applications and internal systems that solve real business problems. I develop both web and desktop solutions and turn business needs into practical technical products. I currently work mainly with ASP.NET Core, React, C#, Vite, Python, R, and R Shiny. My background also includes machine learning, statistical modeling, automation, data analysis, and analytical product development.
            </p>
          </div>
        </section>
        <Education />
        <Skills />
      </div>
    </motion.div>
  );
};

export default AboutPage;
