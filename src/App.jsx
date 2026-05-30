import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperienceDetail from './pages/ExperienceDetail';
import ExperiencePage from './pages/ExperiencePage';
import LeadershipPage from './pages/LeadershipPage';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
