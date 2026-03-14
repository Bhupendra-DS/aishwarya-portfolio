import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "JSS College of Arts, Commerce and Science, Mysore",
    period: "2022 – 2025",
    score: "CGPA: 7.79",
  },
  {
    degree: "Higher Secondary Certificate (12th Grade)",
    institution: "Morarji Desai Residential PU College, Varakodu, Mysore",
    period: "2020 – 2022",
    score: "Percentage: 72.5%",
  },
];

const Education = () => (
  <SectionWrapper id="education" title="Education" subtitle="My academic journey">
    <div className="relative max-w-2xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 to-secondary/20" />

      <div className="space-y-10">
        {educationData.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-16"
          >
            {/* Dot */}
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass-card p-6 hover:shadow-glass-hover transition-shadow">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-foreground">{ed.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{ed.institution}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="badge-pill">{ed.period}</span>
                    <span className="badge-pill">{ed.score}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Education;
