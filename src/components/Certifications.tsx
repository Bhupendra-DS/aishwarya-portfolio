import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award } from "lucide-react";

const certs = [
  { title: "Postgraduate Program in Data Science and Analytics", org: "Imarticus Learning, Bangalore" },
  { title: "Data Analytics Job Simulation", org: "Deloitte" },
  { title: "Generative AI", org: "Simplilearn" },
  { title: "Artificial Intelligence", org: "Simplilearn" },
];

const Certifications = () => (
  <SectionWrapper id="certifications" title="Certifications" subtitle="Continuous learning and professional development">
    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
      {certs.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="glass-card p-6 hover:shadow-glass-hover transition-shadow"
        >
          <Award size={20} className="text-primary mb-3" />
          <h3 className="font-display font-semibold text-foreground text-sm">{c.title}</h3>
          <p className="text-muted-foreground text-xs mt-1">{c.org}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
