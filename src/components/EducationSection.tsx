import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "BE Information Technology", school: "Trinity Academy of Engineering (SPPU)", score: "CGPA: 8.34" },
  { degree: "HSC", school: "MIT Junior College", score: "83%" },
  { degree: "SSC", school: "Angel High School", score: "79.20%" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-muted">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold">{e.degree}</h3>
                <p className="text-muted-foreground text-sm">{e.school}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary">
                  {e.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
