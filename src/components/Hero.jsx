import { useState, useEffect, useRef } from "react";
import { MessageCircle, Mail, Hash } from "lucide-react";
import laptopImage from "../assets/laptop_with_code.png";
import "./Hero.css";

const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const roles = [
    "Full-Stack Developer",
    "Odoo & Frappe Specialist",
    "Information Systems Graduate",
    "Flutter Developer",
    "React & JS Frameworks Expert",
    "Django, Spring Boot & PHP Engineer",
    "Open to Collaboration",
];

const floatingSnippets = [
    { text: "flutter build apk", x: 5, y: 15, delay: 0 },
    { text: "python manage.py runserver", x: 75, y: 20, delay: 0.5 },
    { text: "npm run dev", x: 10, y: 75, delay: 1 },
    { text: "odoo-bin -c odoo.conf", x: 70, y: 80, delay: 1.5 },
    { text: "php artisan serve", x: 55, y: 10, delay: 2 },
    { text: "git push origin main", x: 0, y: 50, delay: 2.5 },
    { text: "<Component />", x: 85, y: 50, delay: 3 },
    { text: "docker compose up", x: 30, y: 90, delay: 3.5 },
];

const socialLinks = [
    { label: "GitHub", icon: <GithubIcon />, href: "https://github.com/makonia20" },
    { label: "LinkedIn", icon: <LinkedinIcon />, href: "https://linkedin.com/in/ashley-makoni" },
    { label: "WhatsApp", icon: <MessageCircle size={20} />, href: "https://wa.me/263771883091" },
    { label: "Email", icon: <Mail size={20} />, href: "mailto:makonia20@gmail.com" },
    { label: "Instagram", icon: <InstagramIcon />, href: "https://instagram.com/ashley.makoni" },
    { label: "Facebook", icon: <FacebookIcon />, href: "https://facebook.com/ashley.makoni" },
    { label: "Threads", icon: <Hash size={20} />, href: "https://threads.net/@ashley.makoni" },
];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);
    const canvasRef = useRef();

    // Typewriter
    useEffect(() => {
        let i = displayed.length;
        const target = roles[roleIdx];
        if (typing) {
            if (i < target.length) {
                const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setTyping(false), 2000);
                return () => clearTimeout(t);
            }
        } else {
            if (i > 0) {
                const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 30);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => {
                    setRoleIdx((r) => (r + 1) % roles.length);
                    setTyping(true);
                }, 500);
                return () => clearTimeout(t);
            }
        }
    }, [displayed, typing, roleIdx]);

    // Particle canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.1,
        }));

        let raf;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
                ctx.fill();
            });
            // Connect nearby
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0,212,255,${0.05 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        };
        draw();

        const onResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", onResize);
        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
    }, []);

    return (
        <section id="hero" className="hero">
            <canvas ref={canvasRef} className="hero-canvas" />

            {/* Floating code snippets */}
            {floatingSnippets.map((s, i) => (
                <div
                    key={i}
                    className="hero-snippet glass"
                    style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${s.delay}s` }}
                >
                    {s.text}
                </div>
            ))}

            {/* Glow orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />

            <div className="container hero-wrapper">
                <div className="hero-content">
                    <div className="hero-greeting">
                    <span className="hero-hi">Hello, World! 👋</span>
                </div>

                <h1 className="hero-name">
                    BREW<span className="hero-name-accent">SKIFY</span>
                </h1>

                <div className="hero-role">
                    <span className="hero-role-prefix">&gt; </span>
                    <span className="hero-role-text">{displayed}</span>
                    <span className="hero-cursor">|</span>
                </div>

                <p className="hero-desc">
                    Hi, I'm Ashley Tadiswa Makoni. BSc Information Systems (2.1) · Building scalable systems that bridge
                    business intelligence and cutting-edge technology. Available for
                    full-time roles, freelance projects & collaborations.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                        View My Work <span>→</span>
                    </a>
                    <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
                        Let's Talk
                    </a>
                </div>

                <div className="hero-socials">
                    {socialLinks.map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hero-social-link glass" title={s.label}>
                            <span>{s.icon}</span>
                        </a>
                    ))}
                </div>

                <div className="hero-stats">
                    {[
                        { num: "2.1", label: "BSc Class" },
                        { num: "10+", label: "Technologies" },
                        { num: "∞", label: "Passion" },
                    ].map((s) => (
                        <div key={s.label} className="hero-stat glass">
                            <span className="hero-stat-num">{s.num}</span>
                            <span className="hero-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero-image-container">
                <img src={laptopImage} alt="Laptop displaying code" className="hero-image" />
            </div>
        </div>

            <div className="hero-scroll">
                <div className="hero-scroll-dot" />
                <span>Scroll</span>
            </div>
        </section>
    );
}