import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, GraduationCap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Top 3 Achiever", desc: "EY Edunet Foundation — recognized for outstanding performance." },
  { icon: Award, title: "Top 37 Projects", desc: "Selected among top 37 projects in a competitive showcase." },
  { icon: GraduationCap, title: "IIT Bombay Certification", desc: "Completed PHP & MySQL certification from IIT Bombay." },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Achievements & <span className="gradient-text">Certificates</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center hover:scale-[1.03] transition-transform"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gradient-primary)" }}>
                <a.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
