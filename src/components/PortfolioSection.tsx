import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    onClick={onClick}
    className="glass-card p-6 cursor-pointer group hover:glow-border transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <ArrowRight size={18} className="text-primary group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {project.shortDescription}
    </p>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card glow-border p-8 max-w-lg w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {project.introPhrase}
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/projeto/${project.id}`)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            Ver projeto
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg border border-border text-muted-foreground font-semibold text-sm hover:border-primary/30 hover:text-foreground transition-colors"
          >
            Fechar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Portfólio</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Confira alguns projetos. Por favor, sinta-se à vontade para analisá-los e, caso tenha alguma dúvida, sugestão ou apenas queira trocar uma ideia sobre algum deles, não hesite em entrar em contato comigo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
