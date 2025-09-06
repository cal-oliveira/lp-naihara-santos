"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Heart,
  Award,
  Users,
  Check,
  CheckCircle,
  CheckCircle2,
  Car,
} from "lucide-react";

const Equaotherapy = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Equoterapia: terapia transformadora com o cavalo
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            A equoterapia utiliza o cavalo como recurso terapêutico para
            promover saúde, educação e reabilitação. Indicado para crianças,
            jovens e adultos com necessidades especiais, dificuldades motoras,
            cognitivas, emocionais ou sociais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:flex lg:justify-center gap-5">
          <Card>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Benefícios comprovados
              </h3>
              <div className="flex flex-col gap-2">
                {/* <p className="flex gap-2 text-base">
                  <CheckCircle2 /> Melhora da postura, equilíbrio e coordenação
                  motora
                </p> */}
                <p className="flex gap-2 text-base">
                  <CheckCircle2 /> Maior amplitude de movimento articular
                </p>
                <p className="flex gap-2 text-base">
                  <CheckCircle2 /> Regulação do tônus muscular
                </p>
                {/* <p className="flex gap-2 text-base">
                  <CheckCircle2 /> Aumento da força e controle de tronco/cabeça
                </p> */}
                {/* <p className="flex gap-2 text-base bg-red-500 h-full">
                  <CheckCircle2 /> Melhora da marcha (andar) e das habilidades
                  motoras globais e finas
                </p> */}
                <p className="flex gap-2 text-base">
                  <CheckCircle2 /> Integração das áreas motora, emocional e
                  social
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 w-fit">
              <h3 className="text-lg font-semibold text-foreground">
                Abordagem interdisciplinar
              </h3>
              <div className="flex flex-col gap-2">
                <p className="flex gap-2 max-w-xl">
                  Integramos áreas motora, emocional e social para potencializar{" "}
                  <br />
                  resultados de forma segura e humanizada.
                </p>
                <div>
                  <Card className="w-fit">
                    <CardContent className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                      <div>
                        <h4 className="whitespace-nowrap">
                          Postura & equilíbrio
                        </h4>
                      </div>
                      <div>
                        <h4 className="whitespace-nowrap">
                          Coordenação & marcha
                        </h4>
                      </div>
                      <div>
                        <h4 className="whitespace-nowrap">
                          Percepção corporal
                        </h4>
                      </div>
                      <div>
                        <h4 className="whitespace-nowrap">Força e controle</h4>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Equaotherapy;
