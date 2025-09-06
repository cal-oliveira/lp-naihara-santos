"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CTA = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "(11) 99999-9999",
      description: "WhatsApp disponível",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      content: "naihara.santos@email.com",
      description: "Resposta em até 24h",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      content: "São Paulo - SP",
      description: "Clínica e atendimento domiciliar",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      description: "Sáb: 8h às 14h",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estou aqui para esclarecer suas dúvidas e agendar a primeira
            consulta. Vamos conversar sobre como posso ajudar seu filho!
          </p>
        </div>

        {/* <div className="grid lg:grid-cols-3 gap-8"> */}
        <div className="w-fit mx-auto">
          {/* <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Agende sua Consulta
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entrarei em contato em breve.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Nome do Responsável
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Nome da Criança
                    </label>
                    <Input placeholder="Nome da criança" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Telefone/WhatsApp
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Idade da Criança
                    </label>
                    <Input placeholder="Ex: 3 anos" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Conte-me um pouco sobre a situação
                  </label>
                  <Textarea
                    placeholder="Descreva brevemente as necessidades da criança, diagnóstico (se houver) e suas principais preocupações..."
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full">
                  Agendar consulta
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda em ser contatado
                  pelos meios informados. Seus dados são tratados com total
                  confidencialidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
