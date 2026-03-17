import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-text-secondary text-sm font-mono">
          © {new Date().getFullYear()} Guilherme Inácio — Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;
