import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import equoterapiaImage from "@/assets/equoterapia-3.png";

export default function EquineTherapy() {
  const benefits = [
    "Melhora da postura, equilíbrio e coordenação motora",
    "Maior amplitude de movimento articular", 
    "Regulação do tônus muscular",
    "Aumento da força e controle de tronco/cabeça",
    "Desenvolvimento da lateralidade e percepção corporal",
    "Melhora da marcha (andar) e das habilidades motoras globais e finas",
    "Integração das áreas motora, emocional e social"
  ];

  return (
    <section id="equoterapia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-tertiary leading-tight">
                Equoterapia: terapia transformadora com o cavalo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A equoterapia utiliza o cavalo como recurso terapêutico para promover saúde, 
                educação e reabilitação. Indicado para crianças, jovens e adultos com 
                necessidades especiais, dificuldades motoras, cognitivas, emocionais ou sociais.
              </p>
            </div>

            {/* Diferencial */}
            {/* <Card className="bg-accent border-primary-soft shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-deep mb-3">
                  Diferencial
                </h3>
                <p className="text-accent-foreground">
                  Meu trabalho é realizado em equipe interdisciplinar, garantindo uma 
                  abordagem completa e personalizada.
                </p>
              </CardContent>
            </Card> */}

            {/* Benefícios */}
            <div>
              <h3 className="text-2xl font-semibold text-tertiary mb-6">
                Benefícios comprovados da equoterapia:
              </h3>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 w-5 h-5 mt-1" />
                    <span className="text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="lg:order-first">
            <div className="relative">
              <img
                src={equoterapiaImage.src}
                alt="Sessão de equoterapia com criança e cavalo"
                className="w-full h-[600px] object-cover rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
