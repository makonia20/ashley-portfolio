import { useState } from "react";
import { MessageCircle, Mail, Phone, Hash, CheckCircle2, Send } from "lucide-react";
import "./Contact.css";

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

const socials = [
    { name: "WhatsApp", icon: <MessageCircle size={20} />, href: "https://wa.me/263771883091", label: "+263 771 883 091", color: "#25D366" },
    { name: "Email", icon: <Mail size={20} />, href: "mailto:makonia20@gmail.com", label: "makonia20@gmail.com", color: "#EA4335" },
    { name: "Email 2", icon: <Mail size={20} />, href: "mailto:makoniashleytadiswa@gmail.com", label: "makoniashleytadiswa@gmail.com", color: "#EA4335" },
    { name: "LinkedIn", icon: <LinkedinIcon />, href: "https://linkedin.com/in/ashley-makoni", label: "LinkedIn Profile", color: "#0A66C2" },
    { name: "GitHub", icon: <GithubIcon />, href: "https://github.com/makonia20", label: "github.com/makonia20", color: "#6E40C9" },
    { name: "WhatsApp 2", icon: <Phone size={20} />, href: "https://wa.me/263787318627", label: "+263 787 318 627", color: "#25D366" },
    { name: "Instagram", icon: <InstagramIcon />, href: "https://instagram.com/ashley.makoni", label: "@ashley.makoni", color: "#E4405F" },
    { name: "Facebook", icon: <FacebookIcon />, href: "https://facebook.com/ashley.makoni", label: "Ashley Makoni", color: "#1877F2" },
    { name: "Threads", icon: <Hash size={20} />, href: "https://threads.net/@ashley.makoni", label: "@ashley.makoni", color: "#101010" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailto = `mailto:makonia20@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.open(mailto);
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-bg-orb" />
            <div className="container">
                <p className="section-label">Get In Touch</p>
                <h2 className="section-title">
                    Let's Build Something <span className="contact-accent">Amazing</span>
                </h2>
                <p className="contact-intro">
                    Open to full-time roles, freelance projects, and collaborations. If you have an idea or an opportunity — reach out. I respond fast.
                </p>

                <div className="contact-grid">
                    {/* Form */}
                    <div className="contact-form-wrap glass-strong">
                        <h3 className="contact-form-title">Send a Message</h3>
                        {sent ? (
                            <div className="contact-success">
                                <span className="contact-success-icon"><CheckCircle2 size={32} color="#25D366" /></span>
                                <p>Message opened in your mail client!</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project · Job Offer · Collaboration"
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell me about your project or opportunity..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-primary contact-submit">
                                    Send Message <Send size={18} className="btn-icon" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Social links */}
                    <div className="contact-links">
                        <h3 className="contact-links-title">Connect Directly</h3>
                        <div className="contact-socials">
                            {socials.map((s) => (
                                <a
                                    key={s.name + s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social glass"
                                    style={{ "--s-color": s.color }}
                                >
                                    <span className="contact-social-icon">{s.icon}</span>
                                    <div className="contact-social-info">
                                        <span className="contact-social-name">{s.name}</span>
                                        <span className="contact-social-label">{s.label}</span>
                                    </div>
                                    <span className="contact-social-arrow">→</span>
                                </a>
                            ))}
                        </div>

                        <div className="contact-available glass">
                            <div className="contact-available-dot" />
                            <div>
                                <p className="contact-available-title">Available for New Projects</p>
                                <p className="contact-available-sub">Response within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <p className="footer-name">Ashley Tadiswa Makoni</p>
                    <p className="footer-copy">
                        Designed &amp; Built with ❤️ · © {new Date().getFullYear()} · Made in Zimbabwe 🇿🇼
                    </p>
                </div>
            </div>
        </section>
    );
}