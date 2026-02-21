import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-miacasa-new.png";

const BRIEFING_URL = "https://refresher.com.br/SXpyZXZxMWlMV0c2LzJTU3lETGREdz09/briefing";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Transforme seu sonho em projeto
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-lg mx-auto font-light">
            Responda nosso briefing e dê o primeiro passo para o espaço dos seus sonhos.
          </p>
          <Button
            asChild
            className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body"
          >
            <a href={BRIEFING_URL} target="_blank" rel="noopener noreferrer">
              Faça seu Briefing
            </a>
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="MIA CASA" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Arquitetura e Construção — Projetos, administração, construção e interiores em Itupeva e região.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-secondary-foreground/60 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/empresa" className="text-secondary-foreground/60 hover:text-primary transition-colors">A Empresa</Link></li>
              <li><Link to="/projetos" className="text-secondary-foreground/60 hover:text-primary transition-colors">Projetos</Link></li>
              <li><Link to="/obras" className="text-secondary-foreground/60 hover:text-primary transition-colors">Obras e Reformas</Link></li>
              <li><Link to="/servicos" className="text-secondary-foreground/60 hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="text-secondary-foreground/60 hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/5511973515180" className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors">
                  <Phone size={16} />
                  <span>(11) 9.7351-5180</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/60">
                <Mail size={16} />
                <span>kaiochinarelli@gmail.com</span>
              </li>
              <li>
                <a
                  href="https://instagram.com/miacasa.arq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  <Instagram size={16} />
                  <span>@miacasa.arq</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/60 mt-2">
                <span className="text-xs leading-relaxed">Av. Guanabara, 131 - Sala A<br />Jd. São Vicente - Itupeva - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} MIA CASA Arquitetura e Construção. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
