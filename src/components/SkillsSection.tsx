import { motion } from "framer-motion";
import { Code2, BarChart3, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code2,
    skills: ["SQL", "Python", "R (Estatística)"],
  },
  {
    title: "Ferramentas",
    icon: Database,
    skills: ["Databricks", "PySpark"],
  },
  {
    title: "Dados & Analytics",
    icon: BarChart3,
    skills: ["Power BI"],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Habilidades</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="font-mono text-sm px-3 py-2 rounded-md bg-background/50 border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
