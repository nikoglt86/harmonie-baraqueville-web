
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <div className="mb-8">
              <h3 className="section-subtitle">Prenons contact</h3>
              <p className="mb-4">
                Pour toute question ou prise de rendez-vous, n'hésitez pas à me contacter.
                Je vous répondrai dans les meilleurs délais.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-natural-terracotta" />
                  <span>Cabinet à Baraqueville, Aveyron</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-natural-terracotta" />
                  <span>06 XX XX XX XX</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-natural-terracotta" />
                  <span>contact@harmonie-naturelle.fr</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11470.148982469838!2d2.425831369921633!3d44.27942411513304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b27513ba0933ed%3A0x406f69c2f3d91d0!2s12160%20Baraqueville!5e0!3m2!1sfr!2sfr!4v1680257381559!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle">Formulaire de contact</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">
                    Nom
                  </label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom"
                    className="bg-natural-beige/50 border-natural-terracotta/20" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="Votre email"
                    className="bg-natural-beige/50 border-natural-terracotta/20"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium">
                  Sujet
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Sujet de votre message"
                  className="bg-natural-beige/50 border-natural-terracotta/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Votre message" 
                  rows={6}
                  className="bg-natural-beige/50 border-natural-terracotta/20"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
