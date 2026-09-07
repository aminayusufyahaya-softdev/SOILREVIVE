import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  Globe,
  Users,
  Tractor,
  Menu,
  X,
  ChevronDown,
  Check,
  CloudSun,
  Award,
  Database,
  Wifi,
  Scan,
  Camera
} from 'lucide-react';

import { SUPPORTED_LANGUAGES } from '../data/languages';

interface NavbarProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
  selectedLang: string;
  onSelectLang: (lang: string) => void;
  onOpenClimateAlert?: () => void;
  onOpenPassport?: () => void;
  onOpenScanner?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenModal,
  selectedLang,
  onSelectLang,
  onOpenClimateAlert,
  onOpenPassport,
  onOpenScanner
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = SUPPORTED_LANGUAGES;

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
          ? 'bg-[#06180e]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#21351e]'
          : 'bg-[#081d11]/85 backdrop-blur-md shadow-md py-3.5 border-b border-[#1f321c]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-[#1b2b18] border border-emerald-600/40 flex items-center justify-center text-white shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="text-xl font-extrabold font-display tracking-tight flex items-center gap-1 text-white">
                SOIL<span className="text-emerald-400">REVIVE</span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded font-bold ml-1 bg-emerald-950 text-amber-300 border border-amber-600/40">
                  NG
                </span>
              </span>
              <p className="text-[10px] font-medium tracking-wide leading-none text-emerald-300/70 hidden sm:block">
                Digital Soil Health Platform
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold transition-colors relative py-1 text-slate-200 hover:text-emerald-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all after:bg-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Interactive Modules Shortcuts */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Live Proximal Scanner Button */}
            <button
              onClick={onOpenScanner}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-600/20"
              title="Launch Live Proximal Soil Scanner"
            >
              <Scan className="w-3.5 h-3.5 animate-pulse" />
              <span>Proximal Scan</span>
            </button>

            <button
              onClick={onOpenPassport}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                scrolled
                  ? 'bg-blue-950/80 border-blue-500/40 text-blue-300 hover:bg-blue-900'
                  : 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100'
              }`}
              title="Open Digital Soil Passport Suite"
            >
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Soil Passport</span>
            </button>

            <button
              onClick={onOpenClimateAlert}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                scrolled
                  ? 'bg-teal-950/80 border-teal-500/40 text-teal-300 hover:bg-teal-900'
                  : 'bg-teal-50 border-teal-300 text-teal-700 hover:bg-teal-100'
              }`}
              title="Open Climate & Irrigation Alerts"
            >
              <CloudSun className="w-3.5 h-3.5 text-teal-400" />
              <span>Climate Alerts</span>
            </button>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center space-x-1.5 py-2 px-3 rounded-lg border text-xs font-bold transition-all shadow-sm ${
                  scrolled
                    ? 'border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 hover:border-slate-600'
                    : 'border-slate-300 bg-slate-100/90 text-slate-800 hover:bg-slate-200 hover:border-slate-400'
                }`}
                aria-label="Select Language"
              >
                <Globe className={`w-3.5 h-3.5 ${scrolled ? 'text-emerald-400' : 'text-soil-primary'}`} />
                <span className="uppercase">{selectedLang}</span>
                <ChevronDown className={`w-3 h-3 ${scrolled ? 'text-slate-400' : 'text-slate-500'}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute right-0 mt-2 w-56 rounded-xl shadow-2xl border py-1 z-50 overflow-hidden max-h-72 overflow-y-auto ${
                      scrolled
                        ? 'bg-slate-900 border-slate-800 text-white'
                        : 'bg-white border-slate-200 text-slate-900'
                    }`}
                  >
                    <div className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border-b flex items-center justify-between ${
                      scrolled ? 'text-slate-400 border-slate-800' : 'text-slate-400 border-slate-100'
                    }`}>
                      <span>Multilingual AI Voices</span>
                      <span className="text-emerald-500 font-bold">13 Languages</span>
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onSelectLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                          scrolled
                            ? selectedLang === lang.code
                              ? 'bg-emerald-950/80 font-bold text-emerald-300'
                              : 'hover:bg-slate-800 text-slate-200'
                            : selectedLang === lang.code
                              ? 'bg-emerald-50 font-bold text-soil-primary'
                              : 'hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{lang.flag}</span>
                          <div>
                            <span className={`font-semibold block leading-tight ${scrolled ? 'text-slate-100' : 'text-slate-900'}`}>{lang.name}</span>
                            <span className={`text-[10px] ${scrolled ? 'text-slate-400' : 'text-slate-500'}`}>{lang.native}</span>
                          </div>
                        </div>
                        {selectedLang === lang.code && (
                          <Check className={`w-4 h-4 ${scrolled ? 'text-emerald-400' : 'text-soil-primary'}`} />
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
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl transition-all text-xs font-bold shadow-sm bg-[#0e2c19]/80 border border-emerald-800/60 text-emerald-200 hover:bg-[#164227] hover:text-white"
            >
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Local Farmer</span>
            </button>

            <button
              onClick={() => onOpenModal('enterprise')}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl transition-all text-xs font-bold shadow-md bg-[#082012] hover:bg-emerald-600 text-emerald-100 hover:text-white border border-emerald-800/80 hover:border-emerald-500"
            >
              <Tractor className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enterprise Suite</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenScanner}
              className="p-2 rounded-lg bg-emerald-600 text-white"
              title="Scan Soil"
            >
              <Scan className="w-4 h-4" />
            </button>

            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`p-2 rounded-lg border ${
                scrolled
                  ? 'border-slate-700 bg-slate-800 text-slate-100'
                  : 'border-slate-300 bg-slate-100 text-slate-800'
              }`}
            >
              <Globe className={`w-4 h-4 ${scrolled ? 'text-emerald-400' : 'text-soil-primary'}`} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none ${
                scrolled
                  ? 'border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700'
                  : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
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
            className={`md:hidden border-b px-4 pt-2 pb-6 space-y-4 shadow-xl ${
              scrolled
                ? 'bg-slate-900 border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-1 border-b ${
                    scrolled
                      ? 'text-slate-200 hover:text-emerald-400 border-slate-800'
                      : 'text-slate-800 hover:text-soil-primary border-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Direct Feature Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenScanner) onOpenScanner();
                }}
                className="flex items-center justify-center space-x-1 py-2.5 px-2 rounded-xl font-bold text-xs bg-emerald-600 text-white shadow-md"
              >
                <Scan className="w-3.5 h-3.5" />
                <span>Scan Soil</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenPassport) onOpenPassport();
                }}
                className="flex items-center justify-center space-x-1 py-2.5 px-2 rounded-xl font-bold text-xs bg-blue-950/80 border border-blue-500/40 text-blue-300"
              >
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>Passport</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenClimateAlert) onOpenClimateAlert();
                }}
                className="flex items-center justify-center space-x-1 py-2.5 px-2 rounded-xl font-bold text-xs bg-teal-950/80 border border-teal-500/40 text-teal-300"
              >
                <CloudSun className="w-3.5 h-3.5 text-teal-400" />
                <span>Climate</span>
              </button>
            </div>

            <div className="pt-3 border-t border-[#1e341b] flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('local');
                }}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl font-bold text-xs bg-[#0e2c19] text-emerald-200 border border-emerald-800/60"
              >
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Local Farmer</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('enterprise');
                }}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl font-bold text-xs shadow-md bg-[#082012] hover:bg-emerald-600 text-emerald-100 hover:text-white border border-emerald-800/80 hover:border-emerald-500 transition-all"
              >
                <Tractor className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Suite</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
