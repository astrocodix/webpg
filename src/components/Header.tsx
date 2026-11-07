import { ComponentProps } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface NavLinkProps extends ComponentProps<'a'> {
  active?: boolean;
}

export function NavLink({ children, href, active, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors duration-300 ${
        active ? 'text-[#FBBF24]' : 'text-[#CBD5E1] hover:text-[#FBBF24]'
      }`}
      {...props}
    >
      {children}
    </a>
  );
}

export function LanguageSwitcher({ dir, setDir }: { dir: 'ltr' | 'rtl'; setDir: (d: 'ltr' | 'rtl') => void }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setDir('ltr')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          dir === 'ltr' ? 'bg-[#6366F1] text-white' : 'text-[#CBD5E1] hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setDir('rtl')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          dir === 'rtl' ? 'bg-[#6366F1] text-white' : 'text-[#CBD5E1] hover:text-white'
        }`}
      >
        AR
      </button>
    </div>
  );
}

export function Header() {
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  return (
    <header className="bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#1F2937] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FBBF24] rounded-lg flex items-center justify-center">
              <span className="text-[#0A0F1E] font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Astro Codix</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/" active={true}>Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/odoo">Odoo ERP</NavLink>
            <NavLink href="/software">Custom Software</NavLink>
            <NavLink href="/apps">Web & Mobile</NavLink>
            <NavLink href="/transformation">Digital Transformation</NavLink>
            <NavLink href="/industries">Industries</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher dir={dir} setDir={setDir} />
            <a href="tel:+17579577502" className="btn-gold hidden md:block">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Note: In Astro, React components need to be island components
export default function HeaderIsland() {
  return <Header />;
}
