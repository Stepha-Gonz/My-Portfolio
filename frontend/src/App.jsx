import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Nav from './components/Nav';
import Cursor from './components/Cursor';
import Home from './views/Home';
import ProjectDetail from './views/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Cursor />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/impact" element={<Home />} />
          <Route path="/career" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/credentials" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
