import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const obras = [
  { id: 1, title: "Reforma Apartamento Centro", status: "Concluído" },
  { id: 2, title: "Construção Residência Ipanema", status: "Concluído" },
  { id: 3, title: "Reforma Comercial Bela Vista", status: "Em andamento" },
  { id: 4, title: "Ampliação Casa Tristeza", status: "Concluído" },
  { id: 5, title: "Reforma Cozinha Moinhos", status: "Concluído" },
  { id: 6, title: "Construção Sobrado Petrópolis", status: "Em andamento" },
];

const Obras = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Execução</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Obras e Reformas
            </h1>
            <p className="text-secondary-foreground/60 mt-4 max-w-lg">
              Acompanhamento técnico completo, do canteiro de obra à entrega da chave na mão.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {obras.map((obra, i) => (
              <ScrollReveal key={obra.id} delay={i * 0.05}>
                <div className="group relative overflow-hidden border border-border">
                  <div className="aspect-[4/3] bg-secondary/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Foto da obra</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading text-lg font-semibold">{obra.title}</h3>
                    </div>
                    <span className={`text-xs uppercase tracking-wider font-medium ${
                      obra.status === "Em andamento" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {obra.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Tours Virtuais</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">Veja nossos vídeos</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((v, i) => (
              <ScrollReveal key={v} delay={i * 0.1}>
                <div className="aspect-video bg-secondary/20 border border-border flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Player de vídeo / Embed Reels</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Obras;
