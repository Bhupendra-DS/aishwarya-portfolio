import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, BarChart3, Car, Users, Pizza } from "lucide-react";

const projects = [
  {
    title: "Sales Analysis Dashboard",
    tech: ["Power BI"],
    description: "Built dynamic and interactive sales reports providing deep insights into sales performance, customer behavior, and product trends. Enabled data-driven decisions for optimizing sales strategies, marketing campaigns, and inventory management.",
    icon: BarChart3,
  },
  {
    title: "Car Price Prediction",
    tech: ["Python", "Machine Learning"],
    description: "Performed data cleaning, transformation, and exploratory data analysis using Pandas and Matplotlib. Applied machine learning models to predict car prices; improved accuracy through feature engineering and validation techniques.",
    icon: Car,
  },
  {
    title: "HR Dashboard",
    tech: ["Tableau"],
    description: "Designed an interactive Tableau dashboard to analyze employee data across job roles, gender distribution, salary trends, age groups, and education qualifications. Created visualizations to track headcount, salary insights, leave balances, and hiring trends, enabling better workforce planning.",
    icon: Users,
  },
  {
    title: "Pizza Sales & Orders Overview Dashboard",
    tech: ["Excel"],
    description: "Analyzed pizza sales data to identify top-selling items, peak order periods, and revenue trends. Built interactive dashboards tracking KPIs including total revenue, order volumes, and category-wise sales performance.",
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
