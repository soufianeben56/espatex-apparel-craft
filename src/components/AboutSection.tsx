
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-espatex-dark mb-6 text-center">About Us</h2>
          <div className="bg-espatex-light p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded over two decades ago in the vibrant city of Tangier, ESPATEX has established itself as a leader in the apparel manufacturing industry. With over 25 years of experience, we've built our reputation on a foundation of quality, reliability, and innovative production techniques.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our state-of-the-art manufacturing facility specializes in cut and sew apparel, knitting mills, and women's and children's undergarments. We combine traditional craftsmanship with modern technology to deliver exceptional garments that meet the highest standards of quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ESPATEX, we believe in building long-lasting relationships with our clients. From concept to delivery, we work closely with both international and national brands to bring their vision to life with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
