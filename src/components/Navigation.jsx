import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, FileText } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'stack', label: 'Stack' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('inicio')}
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-emerald-600 to-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  YH
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-slate-900">Yony Hoyos</p>
                <p className="text-xs text-slate-500 -mt-1">Full Stack Engineer</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="https://github.com/yonyhome" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yony-hoyos-meza-55141b233/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="/cv/Yony_Hoyos_CV.pdf"
                download
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
              >
                <FileText size={18} />
                CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-20 right-0 left-0 mx-4 bg-white rounded-2xl shadow-2xl p-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-xl transition-all font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200 flex gap-2">
              <a 
                href="https://github.com/yonyhome" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-3 text-center bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                <Github size={20} className="mx-auto" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yony-hoyos-meza-55141b233/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-3 text-center bg-blue-50 hover:bg-blue-100 rounded-xl transition-all"
              >
                <Linkedin size={20} className="mx-auto text-blue-600" />
              </a>
              <a 
                href="/cv/Yony_Hoyos_CV.pdf"
                download
                className="flex-1 p-3 text-center bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all"
              >
                <FileText size={20} className="mx-auto text-emerald-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}