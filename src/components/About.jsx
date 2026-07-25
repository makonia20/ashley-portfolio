import { Globe, Users, Zap, Briefcase, GraduationCap, Mail, MessageCircle } from "lucide-react";
import "./About.css";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-avatar glass-strong">
                            <div className="about-avatar-inner">
                                <span className="about-avatar-initials">ATM</span>
                                <div className="about-avatar-ring" />
                                <div className="about-avatar-ring about-avatar-ring-2" />
                            </div>
                        </div>
                        <div className="about-card glass">
                            <span className="about-card-dot" />
                            <div>
                                <p className="about-card-title">Open to Work</p>
                                <p className="about-card-sub">Full-time · Freelance · Collab</p>
                            </div>
                        </div>
                        <div className="about-card about-card-2 glass">
                            <span className="about-card-icon"><GraduationCap size={24} color="#00D4FF" /></span>
                            <div>
                                <p className="about-card-title">Midlands State Uni</p>
                                <p className="about-card-sub">BSc Info Systems (2.1)</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-text">
                        <p className="section-label">Who I Am</p>
                        <h2 className="section-title">
                            Developer. Problem-solver.
                            <span className="about-title-accent"> Business thinker.</span>
                        </h2>

                        <p className="about-para">
                            I'm <strong>Ashley Tadiswa Makoni</strong>, a BSc Information Systems graduate (2.1) from <strong>Midlands State University</strong>, Zimbabwe. I'm passionate about building intelligent systems that solve real-world business challenges and bridging the gap between technical execution and business strategy.
                        </p>
                        <p className="about-para">
                            My stack spans mobile (Flutter), web (React, Vue, Django, Spring Boot), and everything in between. I approach every project with the mindset of shipping products that matter — clean code, great UX, and measurable impact.
                        </p>
                        <p className="about-para">
                            I'm actively looking for opportunities where I can contribute, grow, and create exceptional solutions. Whether it's an enterprise system, a mobile app, or a startup MVP — I'm ready to build.
                        </p>

                        <div className="about-highlights">
                            {[
                                { icon: <Globe size={18} />, text: "Based in Zimbabwe · Remote-ready" },
                                { icon: <Users size={18} />, text: "Open to individuals & teams" },
                                { icon: <Zap size={18} />, text: "Fast learner · Best-effort delivery" },
                                { icon: <Briefcase size={18} />, text: "Business-aware developer" },
                            ].map((h) => (
                                <div key={h.text} className="about-highlight glass">
                                    <span className="highlight-icon">{h.icon}</span>
                                    <span>{h.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="about-actions">
                            <a href="mailto:makonia20@gmail.com" className="btn-primary">
                                <Mail size={18} className="btn-icon" /> Get In Touch
                            </a>
                            <a href="https://wa.me/263771883091" target="_blank" rel="noopener noreferrer" className="btn-outline">
                                <MessageCircle size={18} className="btn-icon" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}