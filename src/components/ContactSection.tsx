import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guilherme-inacio-69b7a0227/",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:contato@guilhermeinacio.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/guilherme-inacio",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />
      <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contato</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8 mx-auto" />
          <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
            Ficarei muito feliz em conversar sobre dados, tecnologia, automação, oportunidades profissionais ou qualquer projeto interessante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 flex items-center gap-3 hover:glow-border transition-all duration-300 hover:-translate-y-1 group"
            >
              <link.icon size={22} className="text-primary" />
              <span className="font-medium group-hover:text-primary transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary text-sm"
        >
          Se você chegou até aqui, obrigado pela visita. Será um prazer trocar ideias e construir conexões profissionais.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
