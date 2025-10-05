import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Award, Users } from "lucide-react";

export default function About(){
  const qualifications = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Formação Acadêmica",
      description:
        "Pós-graduada em Neurofuncional (IMIP – Instituto Integrado de Medicina)",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certificações",
      description:
        "Bobath Avançado + Integração Sensorial (em andamento, conclusão nov/2025)",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Abordagem Humanizada",
      description:
        "Tratamento individualizado focado no bem-estar da criança e no apoio à família.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experiência Clínica",
      description:
        "Mais de 4 anos atendendo crianças com necessidades neurológicas especiais.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Sobre <span className="text-primary">Naihara Santos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Sou Naihara Santos, fisioterapeuta especializada em neuropediatria,
            cristã, casada e mãe. Aos 40 anos, transformei minha missão de vida
            em profissão: cuidar de crianças com amor, técnica e esperança.
            Acredito que cada criança tem um potencial único, e meu trabalho é
            apoiar esse processo de desenvolvimento de forma humanizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((item, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 bg-[#a9bafc] rounded-lg p-4">
              <h3 className="text-3xl font-bold text-foreground">
                Minha <span className="text-pretty">Missão</span>
              </h3>
              <p className="text-[#031b46] leading-relaxed">
                Acredito que cada criança tem potencial único para se
                desenvolver. Meu trabalho é proporcionar o ambiente e as
                técnicas adequadas para que esse potencial seja descoberto e
                estimulado, sempre respeitando o ritmo individual de cada
                pequeno paciente.
              </p>
              <p className="text-[#031b46] leading-relaxed">
                Trabalho em estreita colaboração com as famílias, oferecendo não
                apenas tratamento especializado, mas também orientação e suporte
                emocional durante toda a jornada terapêutica.
              </p>
            </div>
            <div className="space-y-4">
              <div className=" rounded-lg p-4 bg-[#d3dbfe]">
                <h4 className="font-semibold text-primary mb-2">
                  Especialidades
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Paralisia Cerebral</li>
                  <li>• Atraso no Desenvolvimento Motor</li>
                  <li>• Síndromes Genéticas</li>
                  <li>• Distúrbios Neurológicos</li>
                </ul>
              </div>
              <div className=" rounded-lg p-4 bg-[#d3dbfe]">
                <h4 className="font-semibold text-pretty mb-2">
                  Técnicas Utilizadas
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Conceito Bobath</li>
                  <li>• Integração Sensorial</li>
                  <li>• Estimulação Precoce</li>
                  <li>• TheraTogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

