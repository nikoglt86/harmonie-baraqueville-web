
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    text: "Les séances de naturopathie avec Sophie ont complètement transformé ma relation à mon corps et à mon alimentation. Ses conseils personnalisés m'ont aidée à retrouver de l'énergie et à améliorer mon sommeil. Je me sens enfin écoutée et comprise.",
    profession: "Enseignante"
  },
  {
    id: 2,
    name: "Pierre D.",
    text: "Après des années de stress chronique, j'ai consulté Sophie pour des séances de réflexologie. Les résultats ont dépassé mes attentes. Non seulement je me sens plus détendu, mais j'ai aussi constaté une amélioration de ma digestion et de mon système immunitaire.",
    profession: "Entrepreneur"
  },
  {
    id: 3,
    name: "Céline M.",
    text: "L'accompagnement en psychogestionnel m'a permis de comprendre et de dépasser des blocages émotionnels que je traînais depuis des années. Sophie crée un espace sécurisant où j'ai pu explorer mes ressentis sans jugement. Un vrai chemin de libération.",
    profession: "Thérapeute"
  },
  {
    id: 4,
    name: "Thomas R.",
    text: "Je souffrais de troubles digestifs chroniques depuis des années. Grâce au programme personnalisé de naturopathie élaboré par Sophie, j'ai enfin retrouvé un confort digestif et une qualité de vie que je n'espérais plus.",
    profession: "Ingénieur"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Ce qu'ils en disent</h2>
        
        <div className="my-12">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-natural-terracotta/20 bg-natural-beige/50">
                      <CardContent className="p-6">
                        <div className="text-xl text-natural-terracotta mb-4">"</div>
                        <p className="italic mb-4">{testimonial.text}</p>
                        <div className="mt-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-natural-text/70">{testimonial.profession}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-6">
              <CarouselPrevious className="relative right-0 left-0 top-0 translate-y-0" />
              <CarouselNext className="relative right-0 left-0 top-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
