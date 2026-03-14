import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Postgraduate Program in Data Science and Analytics",
    org: "Imarticus Learning, Bangalore",
    period: "Jul 2024 – Feb 2025",
    description: null,
  },
  {
    title: "Data Analytics Job Simulation – Deloitte",
    org: "Deloitte",
    period: null,
    description: "Completed Deloitte's virtual job simulation involving end-to-end data analysis. Designed a data dashboard using Tableau and utilized Excel to classify data and derive actionable business conclusions.",
  },
  {
    title: "Generative AI",
    org: "Simplilearn",
    period: null,
    description: "Acquired foundational knowledge of Generative AI concepts and Large Language Models (LLMs). Gained hands-on experience with AI tools such as ChatGPT for content creation, documentation, and productivity enhancement.",
  },
  {
    title: "Artificial Intelligence",
    org: "Simplilearn",
    period: null,
    description: "Developed a basic understanding of Artificial Intelligence concepts and real-world applications, including the use of AI-based tools for task automation and workflow optimization.",
  },
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
          <p className="text-muted-foreground text-xs mt-1">{c.org}{c.period ? ` · ${c.period}` : ""}</p>
          {c.description && (
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{c.description}</p>
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
