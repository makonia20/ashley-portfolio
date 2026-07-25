import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Smartphone, Layout, Server, Building2, Terminal, LineChart } from "lucide-react";
import "./Skills.css";

const categories = [
    {
        label: "Mobile",
        icon: <Smartphone size={18} />,
        skills: [
            { name: "Flutter", level: 92, color: "#54C5F8" },
            { name: "React Native", level: 85, color: "#61DAFB" },
            { name: "Dart", level: 88, color: "#00B4AB" },
        ],
    },
    {
        label: "Frontend & JS",
        icon: <Layout size={18} />,
        skills: [
            { name: "React / Next.js", level: 92, color: "#61DAFB" },
            { name: "Vue.js", level: 82, color: "#4FC08D" },
            { name: "Angular", level: 70, color: "#DD0031" },
            { name: "Svelte", level: 75, color: "#FF3E00" },
            { name: "JavaScript / TS", level: 90, color: "#F7DF1E" },
        ],
    },
    {
        label: "Backend",
        icon: <Server size={18} />,
        skills: [
            { name: "Django / Python", level: 90, color: "#092E20" },
            { name: "Node.js / Express", level: 85, color: "#339933" },
            { name: "PHP / Laravel", level: 80, color: "#4F5D95" },
            { name: "Spring Boot / Java", level: 82, color: "#6DB33F" },
        ],
    },
    {
        label: "ERP / Business",
        icon: <Building2 size={18} />,
        skills: [
            { name: "Odoo", level: 88, color: "#714B67" },
            { name: "Frappe / ERPNext", level: 85, color: "#0089FF" },
            { name: "SQL", level: 85, color: "#F29111" },
            { name: "MongoDB", level: 75, color: "#47A248" },
        ],
    },
    {
        label: "Systems",
        icon: <Terminal size={18} />,
        skills: [
            { name: "C / C++", level: 70, color: "#00599C" },
            { name: "C#", level: 68, color: "#9B4F96" },
            { name: "Linux", level: 80, color: "#FCC624" },
            { name: "Docker", level: 75, color: "#2496ED" },
        ],
    },
    {
        label: "IS / Analysis",
        icon: <LineChart size={18} />,
        skills: [
            { name: "Systems Analysis", level: 90, color: "#00D4FF" },
            { name: "Agile / Scrum", level: 85, color: "#009FDA" },
            { name: "Business Analysis", level: 88, color: "#7C3AED" },
            { name: "Project Mgmt", level: 80, color: "#06FFA5" },
        ],
    },
];

export default function Skills() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % categories.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="skills" className="skills">
            <div className="container">
                <p className="section-label">What I Use</p>
                <h2 className="section-title">
                    Tech <span className="skills-accent">Stack</span>
                </h2>
                <p className="skills-intro">
                    A polyglot developer comfortable across the full stack — from mobile apps to enterprise ERP systems.
                </p>

                <div className="skills-tabs">
                    {categories.map((c, i) => (
                        <button
                            key={c.label}
                            className={`skills-tab glass ${active === i ? "active" : ""}`}
                            onClick={() => setActive(i)}
                        >
                            <span>{c.icon}</span> {c.label}
                        </button>
                    ))}
                </div>

                <div className="skills-panel glass-strong">
                    {categories[active].skills.map((s) => (
                        <div key={s.name} className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">{s.name}</span>
                                <span className="skill-pct">{s.level}%</span>
                            </div>
                            <div className="skill-bar-bg">
                                <div
                                    className="skill-bar-fill"
                                    style={{
                                        width: `${s.level}%`,
                                        background: `linear-gradient(90deg, ${s.color}88, ${s.color})`,
                                        boxShadow: `0 0 10px ${s.color}44`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech logo grid */}
                <div className="tech-grid">
                    {["Odoo", "Flutter", "React", "Next.js", "Vue", "Angular", "Django", "PHP", "Spring Boot", "Frappe", "Python", "Java", "JS/TS", "Docker", "SQL", "Node.js"].map((t) => (
                        <div key={t} className="tech-badge glass">
                            {t}
                        </div>
                    ))}
                </div>

                {/* GitHub Contributions */}
                <div className="github-calendar-wrap glass-strong" style={{ marginTop: "60px", padding: "40px", borderRadius: "24px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", overflowX: "auto" }}>
                    <h3 style={{ marginBottom: "30px", fontSize: "1.4rem", color: "var(--text)", fontWeight: "600", letterSpacing: "1px" }}>
                        My GitHub Contributions
                    </h3>
                    <a href="https://github.com/makonia20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                        <div style={{ display: "flex", justifyContent: "center", cursor: "pointer", transition: "transform 0.3s ease", padding: "10px", width: "100%", overflowX: "auto" }}
                             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <GitHubCalendar 
                                username="makonia20" 
                                colorScheme="dark" 
                                blockSize={15}
                                blockMargin={5}
                                fontSize={14}
                                theme={{
                                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                    dark: ['#2d333b', '#00d4ff33', '#00d4ff66', '#00d4ff99', '#00d4ff']
                                }}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}