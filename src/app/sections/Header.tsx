"use client";

import { Button } from "@/components/ui/button";
import { Menu, Phone, Heart } from "lucide-react";
import { useState } from "react";
import { CallOnWhatsApp } from "../utils/functions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-[var(--shadow-header)] border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div> */}
            <div>
              <h3 className="font-bold text-foreground">Naihara Santos</h3>
              <p className="text-xs text-muted-foreground">Fisioterapeuta</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Missão
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Equoterapia
            </button>
            {/* <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button> */}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={CallOnWhatsApp} variant="default" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/40">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Missão
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Equoterapia
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Contato
            </button>
            <Button variant="default" size="sm" className="w-full mt-4">
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
