
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavLink {
  name: string;
  url: string;
}

const links: NavLink[] = [
  { name: "Accueil", url: "#" },
  { name: "Qui suis-je ?", url: "#about" },
  { name: "Mes Accompagnements", url: "#services" },
  { name: "Témoignages", url: "#testimonials" },
  { name: "Ma Philosophie", url: "#philosophy" },
  { name: "Contact", url: "#contact" }
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-playfair font-semibold text-natural-text">
            Harmonie Naturelle
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                className="text-natural-text hover:text-natural-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <Button className="btn-primary ml-4">
              Prendre rendez-vous
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    className="text-natural-text hover:text-natural-terracotta transition-colors py-2 px-4 rounded-md hover:bg-natural-beige"
                  >
                    {link.name}
                  </a>
                ))}
                
                <Button className="btn-primary mt-4">
                  Prendre rendez-vous
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
