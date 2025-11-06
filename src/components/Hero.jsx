import React from 'react';
import { ArrowRight, Sparkles, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-20">
        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-emerald-500/10 border border-emerald-100">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Sparkles size={16} className="text-emerald-600" />
                Disponible para proyectos
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Construyo
                <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Productos Digitales
                </span>
                que Escalan
              </h1>

              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                <span className="font-semibold text-slate-900">Full Stack Engineer</span> con 5+ años 
                creando soluciones escalables con <span className="font-semibold text-emerald-600">React</span>, 
                <span className="font-semibold text-green-600"> Node.js</span>, 
                <span className="font-semibold text-blue-600"> Python</span> y 
                <span className="font-semibold text-cyan-600"> Docker</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-slate-600 font-medium">Años Experiencia</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-slate-600 font-medium">Proyectos</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-sm text-slate-600 font-medium">Usuarios</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
              >
                Hablemos del proyecto
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:shadow-xl border-2 border-slate-200 hover:border-slate-300 transition-all"
              >
                Ver mi trabajo
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-slate-500 font-medium">Encuéntrame en:</span>
              <div className="flex gap-2">
                <a 
                  href="https://github.com/yonyhome" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white rounded-xl transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/yony-hoyos-meza-55141b233/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-xl transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:yonyhome99@gmail.com"
                  className="p-3 bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white rounded-xl transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:ml-auto">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-indigo-400/20 to-purple-400/20 rounded-[3rem] rotate-6 blur-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-[3rem] opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-100 to-white p-2 rounded-[2.5rem] shadow-2xl">
                <img 
                  src="./yony.png"
                  alt="Yony Hoyos Meza"
                  className="w-full rounded-[2rem] shadow-xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-emerald-600" size={24} />
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Ubicación</p>
                      <p className="text-sm font-bold text-slate-900">Barranquilla, CO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element - Years */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">5+</p>
                <p className="text-xs text-slate-600 font-medium">Años</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}