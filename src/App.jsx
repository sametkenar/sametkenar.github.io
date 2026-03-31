import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Talks from './pages/Talks';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/teaching" element={<Teaching />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
