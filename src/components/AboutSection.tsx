import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users } from "lucide-react";

const strengths = [
  { icon: Lightbulb, title: "Problem Solving", desc: "Analytical thinker who breaks down complex challenges into elegant solutions." },
  { icon: Code2, title: "UI/UX Focus", desc: "Creating beautiful, intuitive interfaces that delight users." },
  { icon: Users, title: "Client Experience", desc: "Proven track record with real-world client projects and team leadership." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            A passionate BE IT student at SPPU with a CGPA of 8.34, I bring hands-on experience from internships and live client projects. I thrive at the intersection of clean code and great design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
