import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">Hello, I'm</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              Aishwarya <span className="gradient-text">H S</span>
            </h1>
            <p className="text-xl sm:text-2xl font-display font-medium text-muted-foreground mb-6">
              Data Analyst
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              Motivated and detail-oriented Data Analyst with skills in Excel, SQL, Python, and Power BI. Experienced in exploratory data analysis, data visualization, and dashboard creation to extract meaningful insights.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects <ArrowDown size={16} />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5">
                <Download size={16} /> Download Resume
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:border-primary/40 hover:bg-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} /> Contact
              </button>
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="floating">
                <div className="glow-border shadow-glow">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-card">
                    <img src={profilePhoto} alt="Aishwarya H S" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-8 border border-primary/10 rounded-full animate-pulse" />
              <div className="absolute -inset-16 border border-secondary/5 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
