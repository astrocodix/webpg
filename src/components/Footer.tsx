import { ChevronRight, Phone, Mail, MapPin, WhatsApp } from 'lucide-react';

export function Footer() {
  const contactInfo = [
    { country: 'USA', phone: '+1 757 957 7502', wa: 'https://wa.me/17579577502' },
    { country: 'Egypt', phone: '+20 10 24957628', wa: 'https://wa.me/201024957628' },
    { country: 'Kuwait', phone: '+965 50705124', wa: 'https://wa.me/96550705124' },
  ];

  return (
    <footer className="bg-[#05070A] border-t border-[#1F2937] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FBBF24] rounded-lg flex items-center justify-center">
                <span className="text-[#0A0F1E] font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Astro Codix</span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-6">
              Enterprise technology solutions specializing in Odoo ERP, Custom Software, and Digital Transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">LinkedIn</a>
              <a href="#" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Twitter</a>
              <a href="#" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">GitHub</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/odoo" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Odoo ERP Solutions</a></li>
              <li><a href="/services/software" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Custom Software</a></li>
              <li><a href="/services/apps" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Web & Mobile Apps</a></li>
              <li><a href="/services/transformation" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="/products/astro-erp" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Astro ERP</a></li>
              <li><a href="/products/astro-gold" className="text-[#CBD5E1] hover:text-[#FBBF24] transition-colors">Astro Gold</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.country} className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FBBF24] mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-white font-medium">{info.country}</p>
                    <p className="text-sm text-[#94A3B8]">{info.phone}</p>
                    <a href={info.wa} target="_blank" rel="noopener noreferrer" className="text-sm text-[#6366F1] hover:underline flex items-center gap-1 mt-1">
                      <WhatsApp className="w-3 h-3" /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F2937] text-center text-[#6B7280] text-sm">
          &copy; {new Date().getFullYear()} Astro Codix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
