"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CallOnWhatsApp } from "../utils/functions";

export default function CTA(){
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
    <section id="cta" className="py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 h-screen">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos juntos apoiar o desenvolvimento do seu filho 💙
          </p>
        </div>

        <div className="w-fit mx-auto">
          <Button onClick={CallOnWhatsApp} size="lg" className="w-fit">
            Agendar consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

