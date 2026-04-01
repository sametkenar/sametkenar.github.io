import Layout from './layouts/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';

function App() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
        <section id="home" className="pt-20">
          <Home />
        </section>
        
        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
      </div>
    </Layout>
  );
}

export default App;
