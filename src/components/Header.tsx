
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-playfair font-semibold text-natural-text">
              Harmonie Naturelle
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-natural-terracotta" />
              <span>Baraqueville, Aveyron</span>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-natural-terracotta" />
              <span>06 XX XX XX XX</span>
            </div>
            
            <Button className="btn-primary whitespace-nowrap">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
