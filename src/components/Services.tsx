
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  benefits: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Naturopathie",
    shortDesc: "Une approche globale de la santé, utilisant les ressources naturelles pour renforcer votre vitalité.",
    longDesc: "La naturopathie est une approche holistique qui considère la personne dans sa globalité. Elle vise à stimuler les capacités d'auto-guérison du corps en utilisant des méthodes naturelles : alimentation adaptée, phytothérapie, aromathérapie, exercices physiques, gestion du stress et bien plus encore. Mon but est de vous aider à retrouver et maintenir votre équilibre vital.",
    icon: "🌿",
    benefits: [
      "Bilan de vitalité complet",
      "Conseils alimentaires personnalisés",
      "Accompagnement en phytothérapie et aromathérapie",
      "Techniques de gestion du stress",
      "Suivi personnalisé"
    ]
  },
  {
    id: 2,
    title: "Réflexologie",
    shortDesc: "Des techniques de pression sur les zones réflexes des pieds pour harmoniser le fonctionnement de l'organisme.",
    longDesc: "La réflexologie plantaire est une méthode thérapeutique qui utilise le toucher sur des points réflexes spécifiques situés sur les pieds. Chaque zone réflexe correspond à un organe ou une partie du corps. En stimulant ces points, je peux aider à débloquer les tensions, améliorer la circulation d'énergie et contribuer à restaurer l'équilibre naturel de votre corps.",
    icon: "👣",
    benefits: [
      "Soulagement du stress et de l'anxiété",
      "Amélioration de la circulation sanguine et lymphatique",
      "Stimulation des défenses immunitaires",
      "Harmonisation des fonctions organiques",
      "Détente profonde"
    ]
  },
  {
    id: 3,
    title: "Psychogestionnel",
    shortDesc: "Une approche qui associe la parole et le corps pour transformer vos schémas limitants.",
    longDesc: "Le psychogestionnel est une méthode innovante qui associe le dialogue et des techniques corporelles pour accéder aux mémoires cellulaires. Elle permet d'identifier et de transformer les schémas inconscients qui vous limitent. Je vous accompagne dans ce processus de libération émotionnelle pour vous aider à retrouver votre pouvoir personnel et votre autonomie face aux défis de la vie.",
    icon: "🧠",
    benefits: [
      "Libération des blocages émotionnels",
      "Transformation des schémas limitants",
      "Développement de nouvelles ressources",
      "Gain en autonomie et confiance en soi",
      "Amélioration des relations"
    ]
  }
];

const Services = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section className="bg-natural-beige section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">Mes Accompagnements</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          Je propose différentes approches complémentaires, adaptées à vos besoins spécifiques. 
          Chaque accompagnement est personnalisé pour vous aider à retrouver équilibre et harmonie.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card flex flex-col">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="section-subtitle">{service.title}</h3>
              <p className="mb-6 flex-grow">{service.shortDesc}</p>
              <Button 
                variant="outline" 
                className="border-natural-terracotta text-natural-terracotta hover:bg-natural-terracotta hover:text-white mt-auto"
                onClick={() => setOpenDialog(service.id)}
              >
                Découvrir
              </Button>
              
              <Dialog open={openDialog === service.id} onOpenChange={() => setOpenDialog(null)}>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-playfair">{service.title}</DialogTitle>
                    <DialogDescription className="text-natural-text">
                      <p className="my-4">{service.longDesc}</p>
                      <h4 className="font-semibold mt-6 mb-2">Bienfaits :</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                      <div className="mt-8 text-center">
                        <Button className="btn-primary">
                          Prendre rendez-vous
                        </Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
