"use client"

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/naihara2.jpg";
import WhatsappIcon from "@/assets/whatsapp.svg"
import Image from "next/image";
import { useState } from "react";

export default function HeroDesktop(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    };

  return (
    <section id="inicio" className="relative h-screen min-h-screen flex items-center pt-16 bg-gradient-to-b from-[#edf0fe] via-[#d3dbfe] to-[#a9bafc]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Fisioterapia</span>
                <br />
                <span className="text-black/65">Neuropediátrica</span>
                {/* <br />
                <span className="text-black/40">Especializada</span> */}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {/* Sou <strong>Naihara Santos</strong>, fisioterapeuta
                especializada em neuropediatria, cristã, casada e mãe. Aos 40
                anos, transformei minha missão de vida em profissão: cuidar de
                crianças com amor, técnica e esperança. Acredito que cada
                criança tem um potencial único, e meu trabalho é apoiar esse
                processo de desenvolvimento de forma humanizada. */}
                Olá, sou Naihara Santos e ajudo a cuidar do amor da sua vida
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group h-11 font-bold cursor-pointer" onClick={()=> scrollToSection('cta')}>
                Entrar em contato
                <Image src={WhatsappIcon} alt="Whatsapp Icon" width={16} height={16} className="mr-2" />
              </Button>
              {/* <Button variant="outline" size="lg">
                <Phone className="mr-2" />
                (48) 99188-5845
              </Button> */}
            </div>

            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">
                  Crianças Atendidas
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant mx-auto xl:w-fit">
              <img
                src={heroImage.src}
                alt="Naihara Santos - Fisioterapeuta Neuropediatra"
                className="w-full h-auto object-cover mx-auto xl:h-[700px] xl:w-fit xl:object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

