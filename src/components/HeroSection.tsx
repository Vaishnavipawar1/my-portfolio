import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";
import heroVideo from "../assets/Untitled design.mp4";

const roles = ["Full Stack Web Developer", "UI/UX Enthusiast", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" />

      <div className="container mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-display text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          Vaishnavi <span className="gradient-text">Pawar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="font-display text-xl md:text-2xl text-muted-foreground">
            {text}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg"
        >
          Building modern, responsive, and user-friendly web experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-display font-semibold text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            <FolderOpen size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-display font-semibold glass-card text-foreground hover:scale-105 transition-all gradient-border"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
