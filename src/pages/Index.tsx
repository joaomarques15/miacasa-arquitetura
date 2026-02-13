import { Link } from "react-router-dom";
import { ArrowRight, Ruler, HardHat, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const BRIEFING_URL = "https://refresher.com.br/SXpyZXZxMWlMV0c2LzJTU3lETGREdz09/briefing";

const highlights = [
  {
    icon: Ruler,
    title: "Projetos",
    description: "Do conceito ao detalhamento, criamos espaços que traduzem a identidade de cada cliente.",
    link: "/projetos",
  },
  {
    icon: HardHat,
    title: "Obras e Reformas",
    description: "Acompanhamento técnico completo da execução, garantindo qualidade e prazo.",
    link: "/obras",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada projeto é único. Oferecemos atenção individual do briefing à entrega das chaves.",
    link: "/empresa",
  },
];

const portfolioItems = [
  { id: 1, title: "Residência Lago", category: "Residencial" },
  { id: 2, title: "Escritório Moderno", category: "Comercial" },
  { id: 3, title: "Apartamento Centro", category: "Interiores" },
  { id: 4, title: "Casa de Campo", category: "Residencial" },
];

const testimonials = [
  {
    name: "Ana Carolina S.",
    text: "A MIA CASA transformou completamente nosso apartamento. O cuidado com cada detalhe fez toda a diferença.",
  },
  {
    name: "Roberto M.",
    text: "Profissionalismo e criatividade do início ao fim. Recomendo de olhos fechados!",
  },
  {
    name: "Juliana P.",
    text: "O acompanhamento da obra foi impecável. Entregaram no prazo e além das expectativas.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
                Arquitetura & Execução
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-secondary-foreground leading-tight mb-6">
                Projetamos espaços que contam a sua história
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-secondary-foreground/70 text-lg mb-10 leading-relaxed max-w-lg">
                Do sonho ao projeto, do projeto à obra. Atendimento completo e personalizado em Porto Alegre e região.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body"
                >
                  <a href={BRIEFING_URL} target="_blank" rel="noopener noreferrer">
                    Faça seu Briefing
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  <Link to="/projetos">Ver Projetos</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">O que fazemos</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">Soluções Completas</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <Link
                  to={item.link}
                  className="group block p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <item.icon className="text-primary mb-6" size={36} strokeWidth={1.5} />
                  <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Saiba mais <ArrowRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Portfólio</p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold">Nossos Projetos</h2>
              </div>
              <Link
                to="/projetos"
                className="hidden md:inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <Link to="/projetos" className="group block relative overflow-hidden aspect-[3/4]">
                  <div className="absolute inset-0 bg-secondary/80 group-hover:bg-secondary/60 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary/80 text-xs uppercase tracking-widest mb-1">{item.category}</p>
                    <h3 className="text-secondary-foreground font-heading text-xl font-semibold">{item.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium"
            >
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Depoimentos</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">O que dizem nossos clientes</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="p-8 border border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <p className="text-sm font-semibold">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
