import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        
        // Intersection Observer for active section tracking
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Trigger when section is in top 20-30% of view
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    const scrollTo = (id) => {
        const targetId = id.toLowerCase();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
        setOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-inner">
                <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}>
                    <span className="nav-logo-bracket">&lt;</span>
                    Ashley
                    <span className="nav-logo-bracket">/&gt;</span>
                </a>

                <ul className={`nav-links ${open ? "open" : ""}`}>
                    {links.map((l) => (
                        <li key={l}>
                            <button 
                                className={`nav-link ${activeSection === l.toLowerCase() ? "active" : ""}`} 
                                onClick={() => scrollTo(l)}
                            >
                                <span className="nav-link-num">0{links.indexOf(l) + 1}.</span>
                                {l}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="mailto:makonia20@gmail.com"
                            className="btn-outline nav-cta"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                <button className={`nav-burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}