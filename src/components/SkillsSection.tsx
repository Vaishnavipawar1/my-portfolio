import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Django"],
  },
  {
    title: "Database & Services",
    skills: ["Supabase", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Vercel", "GitHub", "Power BI", "Canva", "Windsurf AI"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl p-6 border border-primary/20 bg-gradient-to-br from-card/90 via-card/70 to-black/40 backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute -left-10 -bottom-12 h-36 w-36 rounded-full bg-secondary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />

              <h3 className="font-display text-sm uppercase tracking-widest text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 text-foreground border border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
