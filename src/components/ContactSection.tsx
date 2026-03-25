import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "2151d973-d386-424d-bda1-061a5907857b";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "Portfolio Contact Form",
          from_name: "Vaishnavi Pawar Portfolio",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send message");
      }

      setSubmitted(true);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      toast.error("Could not send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="relative grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 border border-primary/20 shadow-[0_18px_50px_rgba(0,0,0,0.35)] relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Let&apos;s Connect</p>
                <h3 className="font-display text-2xl font-semibold">Tell me about your next project</h3>
              </div>
              <p className="text-muted-foreground">
                I&apos;d love to hear from you! Whether you have a project idea, a question, or just want to connect — feel free to reach out.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:8767980311"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                    <Phone size={16} className="text-primary" />
                  </span>
                  <span>8767980311</span>
                </a>
                <a
                  href="mailto:vaishnavipawar5050@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                    <Mail size={16} className="text-primary" />
                  </span>
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                    <Linkedin size={16} className="text-primary" />
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                    <Github size={16} className="text-primary" />
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="group glass-card rounded-2xl p-6 md:p-8 space-y-4 border border-primary/20 shadow-[0_18px_50px_rgba(0,0,0,0.35)] relative overflow-hidden"
          >
            <div className="absolute -left-10 -bottom-12 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition"
              maxLength={100}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition"
              maxLength={255}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: "var(--gradient-primary)" }}
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} /> Sent!
                </>
              ) : loading ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
