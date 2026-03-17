import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Sobre mim</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Sou apaixonado por computação, dados e pela capacidade que a tecnologia tem de transformar problemas complexos em soluções inteligentes. Como graduando em Engenharia da Computação, venho desenvolvendo minha trajetória com foco em análise de dados, automação de processos, inteligência de negócios e construção de soluções que geram impacto real no ambiente corporativo.
            </p>
            <p>
              Acredito que dados, quando bem tratados e interpretados, deixam de ser apenas informações brutas e passam a se tornar direção, estratégia e vantagem competitiva. Tenho grande interesse em utilizar tecnologia para aumentar eficiência operacional, reduzir falhas, estruturar processos e apoiar decisões mais assertivas.
            </p>
            <p>
              Busco constantemente evoluir minha visão técnica e analítica, unindo raciocínio lógico, curiosidade, visão de negócio e vontade de construir soluções cada vez mais robustas.
            </p>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 pl-6 border-l-2 border-primary">
            
            <p className="text-foreground text-lg md:text-xl font-medium italic">
              "Sem dados, você é apenas mais uma pessoa com opinião."
            </p>
            <cite className="text-text-secondary text-sm mt-2 block not-italic font-mono">
              — W. Edwards Deming
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;