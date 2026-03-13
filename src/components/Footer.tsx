import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <p className="text-sm text-muted-foreground">© 2026 Aishwarya H S</p>
        <p className="text-xs text-muted-foreground">Data Analyst Portfolio</p>
      </div>
      <div className="flex gap-3">
        <a href="#" className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="#" className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
