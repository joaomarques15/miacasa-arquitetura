import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

type Category = "Todos" | "Residencial" | "Comercial" | "Interiores";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "Todos">;
  description: string;
}

const projects: Project[] = [
  { id: 1, title: "Residência Lago Guaíba", category: "Residencial", description: "Projeto residencial com vista para o lago, integrando ambientes internos e externos com grandes aberturas e materiais naturais." },
  { id: 2, title: "Escritório Criativo", category: "Comercial", description: "Espaço de coworking com design contemporâneo, priorizando iluminação natural e áreas colaborativas." },
  { id: 3, title: "Apartamento Moinhos", category: "Interiores", description: "Reforma completa de apartamento no bairro Moinhos de Vento, com ambientes integrados e marcenaria sob medida." },
  { id: 4, title: "Casa de Campo Gramado", category: "Residencial", description: "Residência de veraneio em Gramado com arquitetura contemporânea e integração com a natureza." },
  { id: 5, title: "Clínica Estética", category: "Comercial", description: "Projeto de interiores para clínica estética, unindo funcionalidade e sofisticação no atendimento." },
  { id: 6, title: "Living Integrado", category: "Interiores", description: "Projeto de living integrado com cozinha gourmet, utilizando tons neutros e texturas naturais." },
  { id: 7, title: "Sobrado Três Figueiras", category: "Residencial", description: "Sobrado moderno com fachada em concreto aparente e jardim vertical." },
  { id: 8, title: "Restaurante Contemporâneo", category: "Comercial", description: "Projeto gastronômico com cozinha aberta, iluminação cenográfica e ambientação acolhedora." },
];

const categories: Category[] = ["Todos", "Residencial", "Comercial", "Interiores"];

const Projetos = () => {
  const [filter, setFilter] = useState<Category>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Portfólio</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Projetos
            </h1>
            <p className="text-secondary-foreground/60 mt-4 max-w-lg">
              Conheça nossos projetos de arquitetura e design de interiores.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider font-medium transition-colors border ${
                    filter === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(project)}
                  className="group block w-full text-left relative overflow-hidden aspect-[4/3] bg-secondary/20 border border-border hover:border-primary/30 transition-all"
                >
                  <div className="absolute inset-0 bg-secondary/70 group-hover:bg-secondary/50 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary/80 text-xs uppercase tracking-widest mb-1">{project.category}</p>
                    <h3 className="text-secondary-foreground font-heading text-xl font-semibold">{project.title}</h3>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selected?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="aspect-video bg-secondary/20 border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Galeria de imagens do projeto</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-2">{selected?.category}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{selected?.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projetos;
