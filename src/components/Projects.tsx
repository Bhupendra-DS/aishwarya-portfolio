import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, BarChart3, Car, Users, Pizza } from "lucide-react";

const projects = [
  {
    title: "Sales Analysis Dashboard",
    tech: ["Power BI"],
    description: "Interactive sales reports analyzing customer behavior and product trends.",
    icon: BarChart3,
  },
  {
    title: "Car Price Prediction",
    tech: ["Python", "Machine Learning"],
    description: "Used Pandas and Matplotlib for data analysis and built ML models to predict car prices.",
    icon: Car,
  },
  {
    title: "HR Dashboard",
    tech: ["Tableau"],
    description: "Analyzed employee roles, salary trends, and hiring patterns.",
    icon: Users,
  },
  {
    title: "Pizza Sales Dashboard",
    tech: ["Excel"],
    description: "Analyzed revenue trends and top selling items.",
    icon: Pizza,
  },
];

const Projects = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Hands-on work that showcases my skills">
    <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="glass-card p-6 hover:shadow-glass-hover transition-all group cursor-default"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary">
              <p.icon size={20} />
            </div>
            <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="badge-pill">{t}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
