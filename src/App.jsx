import Layout from './layouts/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Leadership from './pages/Leadership';

function App() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 space-y-12 pb-12">
        <section id="home" className="pt-6">
          <Home />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="leadership">
          <Leadership />
        </section>
      </div>
    </Layout>
  );
}

export default App;
