import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Developed interactive Power BI dashboards to support business reporting and data-driven decision-making.",
  "Cleaned, transformed, and analyzed datasets using Power BI, applying DAX functions for advanced calculations.",
  "Optimized data models and reports to present actionable insights to stakeholders.",
];

const Internship = () => (
  <SectionWrapper id="internship" title="Internship" subtitle="Professional experience">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 max-w-2xl mx-auto hover:shadow-glass-hover transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
          <Briefcase size={22} />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Data Analytics Intern</h3>
          <p className="text-primary font-medium text-sm">Placemantra (Virtual)</p>
          <span className="badge-pill mt-2 inline-block">Nov 2025 – Jan 2026</span>

          <ul className="mt-5 space-y-3">
            {responsibilities.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                {r}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Internship;
