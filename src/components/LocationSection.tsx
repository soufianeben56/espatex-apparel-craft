
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="bg-espatex-light section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-espatex-dark mb-12 text-center">Our Location</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="w-full md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-espatex-dark mr-2" />
                <h3 className="text-xl font-semibold text-espatex-dark">Find Us</h3>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong><br />
                Al Majd Industrial Zone,<br />
                Lot No. 809, Tangier,<br />
                Morocco
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong><br />
                +212 539 351 274
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[300px] bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9697457565384!2d-5.793343184746594!3d35.72726298018431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf30c518d%3A0x76bfec86ebfb996d!2sZone%20Industrielle%20Al%20Majd%2C%20Tangier%2C%20Morocco!5e0!3m2!1sen!2sus!4v1651835429082!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ESPATEX location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
