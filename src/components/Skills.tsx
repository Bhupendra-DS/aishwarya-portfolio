import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Database, Code, BarChart3, Brain, FileSpreadsheet, LayoutDashboard, PieChart } from "lucide-react";

const technicalSkills = [
  { name: "SQL", icon: Database },
  { name: "Python", icon: Code },
  { name: "Statistics", icon: BarChart3 },
  { name: "Machine Learning", icon: Brain },
];

const tools = [
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Power BI", icon: LayoutDashboard },
  { name: "Tableau", icon: PieChart },
];

const SkillCard = ({ name, icon: Icon, index }: { name: string; icon: typeof Database; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="glass-card p-6 flex flex-col items-center gap-3 cursor-default hover:shadow-glass-hover transition-shadow"
  >
    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
      <Icon size={24} />
    </div>
    <span className="font-display font-semibold text-foreground">{name}</span>
  </motion.div>
);

const Skills = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies and tools I work with">
    <div className="space-y-10">
      <div>
        <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {technicalSkills.map((s, i) => <SkillCard key={s.name} {...s} index={i} />)}
        </div>
      </div>
      <div>
        <h3 className="font-display font-semibold text-lg mb-4 text-foreground">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tools.map((s, i) => <SkillCard key={s.name} {...s} index={i} />)}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Skills;
