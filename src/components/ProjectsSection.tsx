import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Music, Plane, Building2 } from "lucide-react";

const projects = [
  {
    icon: Music,
    title: "Music Web App (Gaana Clone)",
    tech: "Django - Python - Authentication",
    desc: "Full-featured music application with user authentication, music browsing, search, and playback functionality.",
  },
  {
    icon: Plane,
    title: "RealTrips Website",
    tech: "WordPress - Travel",
    desc: "Professional travel website featuring tour package booking, itinerary display, and an integrated blog section.",
    href: "https://realtrips.in/",
  },
  {
    icon: Building2,
    title: "Client Projects",
    tech: "Web Development",
    desc: "Delivered production websites for multiple clients across travel, infrastructure, and events.",
  },
];

const liveProjects = [
  { name: "RMK Enterprises", href: "https://rmkenterprises.in/" },
  { name: "RealTrips", href: "https://realtrips.in/" },
  { name: "Sky Hostel", href: "https://skyhostels.in/" },
  { name: "Impact Infra India", href: "https://impactinfraindia.com/" },
  { name: "Ariv Buildcon", href: "https://arivbuildcon.com/" },
  { name: "TheVishwa Banquets and Lawns", href: "https://thevishwabanquets.com/" },
  { name: "Yogesh Supplies", href: "https://www.yogeshsupplies.com/" },
  { name: "Pune Book Festival", href: "https://www.punebookfestival.org/" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, hsl(265 90% 65% / 0.08), transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-muted">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-primary text-xs mb-3">{p.tech}</p>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> View Project
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10"
        >
          <h3 className="font-display text-lg font-semibold mb-4">Live Client Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveProjects.map((proj) => (
              <a
                key={proj.name}
                href={proj.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-xl p-4 flex items-center justify-between hover:scale-[1.01] transition-transform"
              >
                <span className="font-medium">{proj.name}</span>
                <ExternalLink size={16} className="text-primary" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

