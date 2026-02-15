import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Building2,
  HardHat,
  RefreshCw,
  Paintbrush,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const BRIEFING_URL =
  "https://refresher.com.br/SXpyZXZxMWlMV0c2LzJTU3lETGREdz09/briefing";

const services = [
  {
    icon: Search,
    title: "Consultoria de Viabilidade",
    description:
      "Análise técnica de terrenos e estudos de viabilidade construtiva para embasar suas decisões de investimento com segurança.",
  },
  {
    icon: Building2,
    title: "Projeto para Investidores",
    description:
      "Projetos arquitetônicos otimizados para retorno financeiro — loteamentos, edifícios residenciais e empreendimentos comerciais.",
  },
  {
    icon: HardHat,
    title: "Acompanhamento de Obra",
    description:
      "Gestão técnica focada em controle de custos, cronograma e qualidade, protegendo seu investimento do início ao fim.",
  },
  {
    icon: RefreshCw,
    title: "Retrofit e Renovação",
    description:
      "Revitalização de imóveis existentes para valorização patrimonial, modernizando estruturas e atualizando padrões construtivos.",
  },
  {
    icon: Paintbrush,
    title: "Interiores para Locação",
    description:
      "Design de interiores estratégico para maximizar o valor de aluguel e a atratividade do seu imóvel no mercado.",
  },
  {
    icon: FileCheck,
    title: "Regularização e Documentação",
    description:
      "Aprovação de projetos em prefeitura, laudos técnicos, regularização de imóveis e toda a documentação necessária para seu investimento.",
  },
];

const differentials = [
  {
    value: "100+",
    label: "Projetos entregues",
  },
  {
    value: "8+",
    label: "Anos de experiência",
  },
  {
    value: "100%",
    label: "Compromisso com prazos",
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
              Investimento
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Serviços para Investidores
            </h1>
            <p className="text-secondary-foreground/60 mt-4 max-w-lg">
              Soluções de arquitetura voltadas para quem busca rentabilidade,
              valorização patrimonial e segurança no investimento imobiliário.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
                O que oferecemos
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">
                Nossos Serviços
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="group p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                  <service.icon
                    className="text-primary mb-6"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {differentials.map((item, i) => (
                <div key={item.label} className="p-6">
                  <p className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-2">
                    {item.value}
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">
                Vamos conversar
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                Potencialize seu investimento
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Quer investir em imóveis com a orientação de quem entende de
                arquitetura e construção? Preencha nosso briefing e receba uma
                análise personalizada para o seu projeto.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body"
                >
                  <a
                    href={BRIEFING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faça seu Briefing
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body"
                >
                  <Link to="/contato">
                    Fale Conosco <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
