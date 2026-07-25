import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
    const [progress, setProgress] = useState(0);

    const lines = [
        "Initializing Ashley.Portfolio()",
        "Loading skills: Flutter, React, Django...",
        "Compiling experience data...",
        "Rendering world-class interface...",
        "Ready.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) { clearInterval(interval); return 100; }
                return p + 2;
            });
        }, 40);
        return () => clearInterval(interval);
    }, []);

    const currentLine = Math.min(Math.floor((progress / 100) * lines.length), lines.length - 1);

    return (
        <div className="loader">
            <div className="loader-content">
                <div className="loader-logo">
                    <span className="loader-bracket">&lt;</span>
                    <span className="loader-name">ATM</span>
                    <span className="loader-bracket">/&gt;</span>
                </div>
                <div className="loader-terminal">
                    {lines.slice(0, currentLine + 1).map((l, i) => (
                        <div key={i} className={`loader-line ${i === currentLine ? "active" : "done"}`}>
                            <span className="loader-prompt">$</span>
                            <span className="loader-text">{l}</span>
                            {i === currentLine && <span className="loader-cursor" />}
                        </div>
                    ))}
                </div>
                <div className="loader-bar-wrap">
                    <div className="loader-bar" style={{ width: `${progress}%` }} />
                </div>
                <div className="loader-percent">{progress}%</div>
            </div>
        </div>
    );
}