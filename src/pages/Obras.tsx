import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ImageLightbox from "@/components/ImageLightbox";
import { properties, type Property } from "@/data/properties";
import { Button } from "@/components/ui/button";

const Obras = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openGallery = (property: Property, index = 0) => {
    setSelectedProperty(property);
    setLightboxIndex(index);
  };

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

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, i) => (
              <ScrollReveal key={property.id} delay={i * 0.05}>
                <div className="group relative overflow-hidden border border-border bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={property.cover}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-lg font-semibold">{property.title}</h3>
                      <span className={`text-xs uppercase tracking-wider font-medium ${
                        property.status === "Em andamento" ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {property.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs mb-4">{property.images.length} fotos</p>
                    <Button
                      onClick={() => openGallery(property)}
                      className="w-full rounded-none uppercase tracking-wider text-xs font-body"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={selectedProperty?.images ?? []}
        initialIndex={lightboxIndex}
        open={!!selectedProperty}
        onOpenChange={(open) => { if (!open) setSelectedProperty(null); }}
        title={selectedProperty?.title}
      />
    </Layout>
  );
};

export default Obras;
