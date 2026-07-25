import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
    const dotRef = useRef();
    const ringRef = useRef();

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let raf;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
            }
            raf = requestAnimationFrame(animate);
        };

        const onEnter = () => ringRef.current?.classList.add("hover");
        const onLeave = () => ringRef.current?.classList.remove("hover");

        document.addEventListener("mousemove", onMove);
        document.querySelectorAll("a, button, .btn-primary, .btn-outline").forEach((el) => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        raf = requestAnimationFrame(animate);
        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}