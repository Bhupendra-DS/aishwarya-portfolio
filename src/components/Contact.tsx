import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Phone, Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 8904418118" },
  { icon: Mail, label: "Email", value: "aish70929@gmail.com", href: "mailto:aish70929@gmail.com" },
  { icon: MapPin, label: "Location", value: "Mysuru, Karnataka, India" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn", href: "https://linkedin.com/in/aishwarya-hs" },
  { icon: Github, label: "GitHub", value: "GitHub", href: "https://github.com/aishwarya-hs" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <SectionWrapper id="contact" title="Contact" subtitle="Let's connect and collaborate">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          {contactInfo.map((c, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
                <c.icon size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-accent/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-accent/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-accent/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 w-full justify-center"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
