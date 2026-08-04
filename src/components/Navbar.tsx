import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, Globe, Users, Tractor, Menu, X, ChevronDown, Check } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
  selectedLang: string;
  onSelectLang: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenModal,
  selectedLang,
  onSelectLang
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ha', name: 'Hausa', native: 'Harshen Hausa' },
    { code: 'yo', name: 'Yoruba', native: 'Èdè Yorùbá' },
    { code: 'ig', name: 'Igbo', native: 'Asụsụ Igbo' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dual-Path Suite', href: '#dual-path' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Feature Grid', href: '#features' },
    { name: 'User Journeys', href: '#stories' },
    { name: 'Trust & Science', href: '#partners' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-soil-primary to-emerald-800 flex items-center justify-center text-white shadow-md shadow-soil-primary/20 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="text-xl font-extrabold font-display tracking-tight text-slate-900 flex items-center gap-1">
                SOIL<span className="text-soil-primary">REVIVE</span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-100 text-soil-primary font-bold ml-1">
                  NG
                </span>
              </span>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide leading-none hidden sm:block">
                Digital Soil Health Platform
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-soil-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-soil-primary hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 py-2 px-3 rounded-lg border border-slate-200 bg-white/80 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-soil-primary" />
                <span className="uppercase">{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Select Regional Voice / Text
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onSelectLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <span className="font-semibold text-slate-800 block">{lang.name}</span>
                          <span className="text-[10px] text-slate-400">{lang.native}</span>
                        </div>
                        {selectedLang === lang.code && (
                          <Check className="w-4 h-4 text-soil-primary" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <button
              onClick={() => onOpenModal('local')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-soil-primary/20 bg-emerald-50 text-soil-primary hover:bg-soil-primary hover:text-white transition-all text-xs font-semibold shadow-sm"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Local Farmer</span>
            </button>

            <button
              onClick={() => onOpenModal('enterprise')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-soil-primary hover:bg-soil-primaryHover text-white transition-all text-xs font-semibold shadow-md shadow-soil-primary/20"
            >
              <Tractor className="w-3.5 h-3.5" />
              <span>Enterprise Suite</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-700 bg-white"
            >
              <Globe className="w-4 h-4 text-soil-primary" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 hover:text-soil-primary py-1 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('local');
                }}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-emerald-50 text-soil-primary font-semibold text-xs border border-soil-primary/20"
              >
                <Users className="w-4 h-4" />
                <span>Join Local Farmer</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('enterprise');
                }}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-soil-primary text-white font-semibold text-xs shadow-md"
              >
                <Tractor className="w-4 h-4" />
                <span>Enterprise Suite</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
