
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-natural-beige py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/78224245-5977-4565-b647-04b5ff1827e0.png" 
                alt="Sophie Martin - Praticienne en naturopathie" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in-delayed">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 text-natural-text">
              Sophie Martin
            </h1>
            <h2 className="text-xl md:text-2xl font-playfair text-natural-terracotta mb-4">
              Naturopathie, Réflexologie & Psychogestionnel
            </h2>
            <p className="text-lg mb-6 italic">
              "Révélez votre potentiel de bien-être grâce à un accompagnement holistique et personnalisé"
            </p>
            <p className="mb-8">
              Je vous accompagne vers un mieux-être global en combinant naturopathie, réflexologie plantaire et psychogestionnel. Mon approche personnalisée vous aide à retrouver l'équilibre naturel de votre corps et de votre esprit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Prendre rendez-vous
              </Button>
              <Button variant="outline" className="border-natural-terracotta text-natural-terracotta hover:bg-natural-terracotta hover:text-white">
                Découvrir mes approches
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
