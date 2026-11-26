import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Research from "./pages/Research";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function CanonicalManager() {
  const location = useLocation();

  useEffect(() => {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const path = location.pathname;
    const fullUrl = `https://lucky-portpolio.vercel.app${path === "/" ? "/" : path}`;
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullUrl);
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <CanonicalManager />
      <Navbar />

      <Routes>
        {/* Primary Landing */}
        <Route path="/" element={<Home />} />

        {/* Main Sections */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/research" element={<Research />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback — always redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}
