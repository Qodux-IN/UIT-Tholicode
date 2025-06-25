import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';
import Faculties from './pages/Faculties';
import ContactUs from './pages/ContactUs';
import Academics from './pages/Academics';
import { PageProvider } from './contexts/PageContext';
import ScrollToTop from './components/ScrollToTop';
import LoaderWrapper from './components/LoaderWrapper'; // ✅ import the wrapper

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <PageProvider>
        <Routes>
          <Route path="*" element={<LoaderWrapper><NoPage /></LoaderWrapper>} />
          <Route path="/" element={<LoaderWrapper><Home /></LoaderWrapper>} />
          <Route path="about-us" element={<LoaderWrapper><AboutUs /></LoaderWrapper>} />
          <Route path="faculties" element={<LoaderWrapper><Faculties /></LoaderWrapper>} />
          <Route path="contact-us" element={<LoaderWrapper><ContactUs /></LoaderWrapper>} />
          <Route path="academics" element={<LoaderWrapper><Academics /></LoaderWrapper>} />
        </Routes>
      </PageProvider>
    </Router>
  </StrictMode>
);
