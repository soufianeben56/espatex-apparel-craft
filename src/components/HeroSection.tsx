
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-espatex-light pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-espatex-dark mb-6 leading-tight">
            Over 25 Years of Excellence in Apparel Manufacturing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            From Tangier to the world — delivering quality garments with precision
          </p>
          <Button 
            size="lg" 
            className="bg-espatex-dark hover:bg-opacity-90 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
