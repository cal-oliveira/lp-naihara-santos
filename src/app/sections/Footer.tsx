import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Naihara <span className="text-primary-glow">Santos</span>
            </h3>
            <p className="text-background/80 leading-relaxed">
              Fisioterapeuta especializada em neuropediatria, dedicada ao
              desenvolvimento motor e neurológico de crianças com amor e
              profissionalismo.
            </p>
            <div className="flex items-center text-primary-glow">
              <Heart className="h-4 w-4 mr-2" />
              <span className="text-sm">Cuidando com carinho desde 2024</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-glow">
              Especialidades
            </h4>
            <ul className="space-y-2 text-background/80">
              <li>• Fisioterapia</li>
              <li>• Neuropediatria</li>
              <li>• Equoterapia</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-glow">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Phone className="h-4 w-4 mr-3 text-primary-glow" />
                <span>(48) 919188-5845</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-3 text-primary-glow" />
                <span>clinicainfantilneurosinapse@gmail.com</span>
              </div>
              <div className="flex items-center text-background/80">
                <MapPin className="h-4 w-4 mr-3 text-primary-glow" />
                <span>Florianópolis - SC</span>
              </div>
            </div>
            {/* <div className="pt-4">
              <p className="text-sm text-background/60">
                Seg - Sex: 8h às 18h
                <br />
                Sáb: 8h às 14h
              </p>
            </div> */}
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Naihara Santos - Fisioterapia Neuropediátrica. Todos os
            direitos reservados.
          </p>
          <p className="text-background/60 text-sm mt-2">
            CRF-SC: 123123123 | CNPJ: 000.0000.00-00
          </p>
        </div>
        <div className="border-t border-gray-950 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-300 text-sm">
            <a href="https://calebe-oliveira.vercel.app/" target="_blank">
              <span className="text-white-700">Developed by</span>{" "}
              <span className="font-bold">Calebe Oliviera</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
