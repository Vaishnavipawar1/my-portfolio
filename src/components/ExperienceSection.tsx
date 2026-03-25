import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative border-l-2 border-primary/30">
            <div className="relative pl-8 pb-8">
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary glow-effect" />
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={20} className="text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">Web Developer</h3>
                    <p className="text-primary text-sm">Praavi Consultants</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Internship to Full-time</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    Worked on live client projects delivering production-ready websites
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    Led team operations and assigned development tasks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    Managed end-to-end client communication and project delivery
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary/80 glow-effect" />
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={20} className="text-primary" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">Fullstack Web Development</h3>
                    <p className="text-primary text-sm">EY Edunet Foundation</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">
                  Music Web Application - Internship Project
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    Built a dynamic music web app using Django with user authentication and music data management
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    Ranked in top 3 achievers and selected among top 37 projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    Completion: 90% (fully functional; minor enhancements remaining)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

