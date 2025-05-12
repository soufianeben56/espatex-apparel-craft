
import React from 'react';
import { Shirt, Package, Factory } from 'lucide-react';

const services = [
  {
    icon: <Shirt className="h-12 w-12 mb-4 text-espatex-dark" />,
    title: "Cut & Sew Apparel",
    description: "Precision cutting and expert sewing for all types of garments with meticulous attention to detail and finishing."
  },
  {
    icon: <Package className="h-12 w-12 mb-4 text-espatex-dark" />,
    title: "Knitting Mills",
    description: "Advanced knitting technology producing high-quality fabrics and garments with consistent texture and finish."
  },
  {
    icon: <Factory className="h-12 w-12 mb-4 text-espatex-dark" />,
    title: "Private Label Production",
    description: "Complete private label manufacturing services from design assistance to production and packaging."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-espatex-light section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-espatex-dark mb-12 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-espatex-dark">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
