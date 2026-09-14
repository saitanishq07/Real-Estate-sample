import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Compass, PhoneCall, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Plot Explorer', path: '/plot-explorer' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Location', path: '/location' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-alabaster-50/90 backdrop-blur-xl shadow-lg py-3 border-b border-alabaster-200'
          : 'bg-gradient-to-b from-dark-950/85 via-dark-950/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                isScrolled
                  ? 'bg-brand-900 text-gold-400 border-gold-500/40 shadow-sm'
                  : 'bg-brand-900/90 text-gold-400 border-gold-500/40 shadow-glow-gold'
              }`}
            >
              <Compass className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span
                className={`font-serif text-2xl font-bold tracking-wider leading-none block ${
                  isScrolled ? 'text-brand-900' : 'text-white'
                }`}
              >
                VISTARA
              </span>
              <span
                className={`text-[9px] tracking-[0.3em] uppercase font-semibold block mt-0.5 ${
                  isScrolled ? 'text-gold-600' : 'text-gold-300'
                }`}
              >
                ESTATES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-black/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-full relative flex items-center gap-1.5 ${
                    isScrolled
                      ? isActive
                        ? 'bg-brand-900 text-gold-300 shadow-sm'
                        : 'text-slate-700 hover:text-brand-900 hover:bg-alabaster-200/60'
                      : isActive
                      ? 'bg-gold-500 text-brand-950 font-bold shadow-glow-gold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && !isScrolled && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-900" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/site-visit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-400 hover:bg-gold-500 text-brand-950 transition-all duration-300 shadow-md hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0 border border-gold-300"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-950" />
              <span>Book Site Visit</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-xl lg:hidden transition-colors border ${
              isScrolled
                ? 'text-brand-900 border-alabaster-200 hover:bg-alabaster-100'
                : 'text-white border-white/20 hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-alabaster-50/98 backdrop-blur-2xl border-b border-alabaster-200 shadow-2xl py-6 px-6 max-h-[85vh] overflow-y-auto animate-fade-in text-dark-900">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-900 text-gold-300'
                      : 'text-slate-800 hover:bg-alabaster-100 hover:text-brand-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-gold-400" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-alabaster-200 flex flex-col gap-3">
              <Link
                to="/site-visit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold bg-gold-400 text-brand-950 hover:bg-gold-500 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit</span>
              </Link>

              <a
                href="tel:+919000000000"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold border border-brand-900/20 text-brand-900 hover:bg-alabaster-100"
              >
                <PhoneCall className="w-4 h-4 text-gold-600" />
                <span>Sales: +91 90000 00000</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
