import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Page Imports
import Splash from './pages/Splash';
import Home from './pages/Home';
import FindNest from './pages/FindNest';
import StudentSpot from './pages/StudentSpot';
import CampusLife from './pages/CampusLife';
import Updates from './pages/Updates';
import Hackathons from './pages/Hackathons';
import AboutUs from './pages/AboutUs';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page Wrapper for smooth route transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex-1 w-full flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      {/* Frosted Navbar */}
      <Navbar />

      {/* Slide Transition Routing Mount */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageWrapper>
                <Splash />
              </PageWrapper>
            } 
          />
          <Route 
            path="/home" 
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } 
          />
          <Route 
            path="/find-nest" 
            element={
              <PageWrapper>
                <FindNest />
              </PageWrapper>
            } 
          />
          <Route 
            path="/student-spot" 
            element={
              <PageWrapper>
                <StudentSpot />
              </PageWrapper>
            } 
          />
          <Route 
            path="/campus-life" 
            element={
              <PageWrapper>
                <CampusLife />
              </PageWrapper>
            } 
          />
          <Route 
            path="/updates" 
            element={
              <PageWrapper>
                <Updates />
              </PageWrapper>
            } 
          />
          <Route 
            path="/hackathons" 
            element={
              <PageWrapper>
                <Hackathons />
              </PageWrapper>
            } 
          />
          <Route 
            path="/about" 
            element={
              <PageWrapper>
                <AboutUs />
              </PageWrapper>
            } 
          />
        </Routes>
      </AnimatePresence>

      {/* Floating FAQ Assistant */}
      {location.pathname !== '/' && <Chatbot />}

      {/* Centered heart Footer */}
      <Footer />
    </div>
  );
}
