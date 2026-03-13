import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "" }: Props) => (
  <section id={id} className={`section-container ${className}`}>
    {title && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
      </motion.div>
    )}
    {children}
  </section>
);

export default SectionWrapper;
