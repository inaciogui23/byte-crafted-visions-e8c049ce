import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />

      {/* Floating geometric elements */}
      <div className="absolute top-20 right-[15%] w-16 h-16 border border-primary/20 rounded-lg rotate-12 animate-float hidden md:block" />
      <div className="absolute bottom-32 left-[10%] w-10 h-10 border border-primary/15 rounded-full animate-float hidden md:block" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[8%] w-6 h-6 bg-primary/10 rounded-sm rotate-45 animate-float hidden md:block" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-6"
        >
          Business Intelligence & Data Analytics
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
        >
          Olá, seja bem-vindo!{" "}
          <span className="text-gradient">Eu sou Guilherme Inácio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl mb-6 font-medium"
        >
          Graduando em Engenharia da Computação | Business Intelligence | Data Analyst
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo processos manuais, dados brutos e desafios operacionais em soluções analíticas que geram eficiência, controle e inteligência para o negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:scale-105"
          >
            Ver Portfólio
            <ArrowDown size={18} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold transition-all hover:border-primary/50 hover:bg-primary/5"
          >
            Entrar em Contato
            <Mail size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
