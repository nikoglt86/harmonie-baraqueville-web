
import React from 'react';

const Philosophy = () => {
  return (
    <section className="bg-natural-green/20 section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center">Ma Philosophie</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <p className="mb-4 text-lg italic text-center font-playfair text-natural-terracotta">
              "Chaque personne est unique et mérite un accompagnement adapté à ses besoins spécifiques"
            </p>
            
            <p className="mb-4">
              Je crois profondément en la sagesse du corps et en sa capacité innée à retrouver l'équilibre. 
              Ma philosophie repose sur une approche holistique qui considère l'être humain dans sa globalité : 
              corps, esprit, émotions et environnement.
            </p>
            
            <p className="mb-4">
              L'écoute attentive et la bienveillance sont au cœur de ma pratique. Je m'engage à créer un espace 
              sécurisant où vous pouvez vous exprimer librement, sans jugement. Mon rôle n'est pas de vous dire 
              quoi faire, mais de vous accompagner pour révéler vos propres ressources.
            </p>
            
            <p>
              Je considère que chaque symptôme est un message du corps qu'il faut apprendre à décoder plutôt qu'à 
              faire taire. Ensemble, nous chercherons les causes profondes de vos déséquilibres pour travailler sur 
              l'origine plutôt que sur les manifestations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
