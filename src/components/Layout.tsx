import { ChevronRight, Phone, Mail, MapPin, WhatsApp } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children, dir = 'ltr' }: { children: React.ReactNode; dir?: 'ltr' | 'rtl' }) {
  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-12">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/17579577502" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-floating"
        aria-label="Contact via WhatsApp"
      >
        <WhatsApp className="w-6 h-6" />
      </a>
    </div>
  );
}
