import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Contact } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return <section id="contact" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-espatex-dark mb-12 text-center">Contact Us</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-espatex-light p-8 rounded-lg shadow-sm">
            <div className="flex justify-center mb-8">
              <Contact className="h-12 w-12 text-espatex-dark" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-espatex-dark">Get in Touch</h3>
                <p className="text-gray-700 mb-4">
                  Have a question or interested in our services? Fill out the form, and we'll get back to you as soon as possible.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +212 539 351 274
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@espatex.biz
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full" />
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full" />
                </div>
                <div>
                  <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full h-32" />
                </div>
                <Button type="submit" className="w-full bg-espatex-dark hover:bg-opacity-90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
