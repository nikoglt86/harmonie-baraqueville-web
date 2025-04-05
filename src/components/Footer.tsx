
import React from 'react';
import { Facebook, Instagram, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-natural-terracotta/10 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Harmonie Naturelle</h3>
            <p className="mb-4">
              Accompagnement en naturopathie, réflexologie et psychogestionnel à Baraqueville.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-natural-terracotta hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-natural-terracotta hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@harmonie-naturelle.fr" className="text-natural-terracotta hover:opacity-80 transition-opacity">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-natural-terracotta transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#" className="hover:text-natural-terracotta transition-colors">Qui suis-je ?</a>
              </li>
              <li>
                <a href="#" className="hover:text-natural-terracotta transition-colors">Mes accompagnements</a>
              </li>
              <li>
                <a href="#" className="hover:text-natural-terracotta transition-colors">Ma philosophie</a>
              </li>
              <li>
                <a href="#" className="hover:text-natural-terracotta transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span>9h - 19h</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi:</span>
                <span>Sur rendez-vous</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche:</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-natural-terracotta/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2023 Harmonie Naturelle. Tous droits réservés.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-natural-terracotta transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-natural-terracotta transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
