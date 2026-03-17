import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Projeto não encontrado.</p>
      </div>
    );
  }

  const sections = [
    { title: "Contexto do Problema", content: project.fullContent.context },
    { title: "Solução Desenvolvida", content: project.fullContent.solution },
    { title: "Resultados e Impacto", content: project.fullContent.results },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-medium text-sm"
          >
            <ArrowLeft size={18} />
            Voltar ao Portfólio
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed max-w-3xl">
            {project.introPhrase}
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {section.content.split("\n\n").map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6 inline-block"
            >
              <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3 font-mono">
                Tecnologias Utilizadas
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                {project.fullContent.technologies}
              </p>
            </motion.div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              <ArrowLeft size={18} />
              Voltar ao Portfólio
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
