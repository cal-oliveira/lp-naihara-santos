import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapist.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Fisioterapia</span>
                <br />
                <span className="text-black/65">Neuropediátrica</span>
                <br />
                <span className="text-black/40">Especializada</span>
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
              <Button size="lg" className="group">
                Agendar Consulta
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2" />
                (48) 99188-5845
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
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
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              {/* <img
                src={heroImage}
                alt="Naihara Santos - Fisioterapeuta Neuropediatra"
                className="w-full h-auto object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
