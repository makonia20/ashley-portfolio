import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import "./styles/globals.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}