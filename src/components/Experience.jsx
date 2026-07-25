import "./Experience.css";

const timeline = [
    {
        year: "2024",
        title: "BSc Information Systems",
        org: "Midlands State University · 2.1 Honours",
        desc: "Graduated with Second Class Upper Honours. Specialised in systems analysis, software engineering, database design, and business information management.",
        type: "education",
        icon: "🎓",
    },
    {
        year: "2023",
        title: "Full-Stack Developer (Attachment)",
        org: "Tech Company · Zimbabwe",
        desc: "Industrial attachment developing enterprise web applications using Django and React. Built REST APIs, managed databases, and implemented CI/CD pipelines.",
        type: "work",
        icon: "💼",
    },
    {
        year: "2022",
        title: "Flutter Mobile Developer",
        org: "Freelance",
        desc: "Developed cross-platform mobile applications for clients. Built apps with Firebase integration, payment gateways, and offline-first architecture.",
        type: "work",
        icon: "📱",
    },
    {
        year: "2022",
        title: "ERPNext Consultant",
        org: "Frappe · Self-directed",
        desc: "Implemented and customized Frappe/ERPNext for small-to-medium businesses. Created custom doctypes, scripts, and dashboards to meet business requirements.",
        type: "work",
        icon: "🏢",
    },
    {
        year: "2021",
        title: "Systems Analysis Project",
        org: "Academic · Group Lead",
        desc: "Led team in designing and implementing a Student Information System. Applied SDLC, UML modeling, and agile methodology. Presented to industry panel.",
        type: "project",
        icon: "🔬",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <p className="section-label">My Journey</p>
                <h2 className="section-title">
                    Experience &amp; <span className="exp-accent">Education</span>
                </h2>

                <div className="timeline">
                    <div className="timeline-line" />
                    {timeline.map((item, i) => (
                        <div key={i} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-dot glass">
                                <span>{item.icon}</span>
                            </div>
                            <div className="timeline-card glass">
                                <div className="timeline-card-header">
                                    <span className="timeline-year">{item.year}</span>
                                    <span className={`timeline-type ${item.type}`}>{item.type}</span>
                                </div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-org">{item.org}</p>
                                <p className="timeline-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}