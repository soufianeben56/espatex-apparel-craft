
import React from 'react';
import { Users } from 'lucide-react';

const ClientsSection = () => {
  return (
    <section id="clients" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-espatex-dark mb-12 text-center">Our Clients</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Users className="h-24 w-24 text-espatex-dark" />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
            Trusted by national and international brands
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            For over 25 years, ESPATEX has proudly served a diverse portfolio of clients, 
            from emerging local brands to established international names in the fashion and apparel industry.
          </p>
          <div className="p-6 bg-espatex-light rounded-lg">
            <p className="italic text-gray-700">
              "Our commitment to quality, innovation, and reliability has made us the manufacturing partner of choice for brands that value excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
