
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">Qui suis-je ?</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-6">
            Naturopathe certifiée, je suis passionnée par les approches naturelles de santé et le bien-être global. 
            Formée à l'École de Naturopathie Traditionnelle, j'ai complété mon parcours avec des spécialisations en réflexologie plantaire 
            et psychogestionnel pour offrir un accompagnement véritablement holistique.
          </p>
          
          <p className="mb-6">
            Mon parcours personnel de guérison et de transformation m'a conduite à ces pratiques, et aujourd'hui 
            je mets toute mon expertise et ma bienveillance au service de votre équilibre et votre épanouissement.
          </p>
          
          <div className="mt-8">
            <Button className="btn-secondary">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
