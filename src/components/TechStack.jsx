import React from 'react';
import { Code2, Database, Container, Globe, Server, Layers, Cpu, Cloud } from 'lucide-react';

export default function TechStack() {
  const primaryStack = [
    {
      name: "React",
      description: "UI Development",
      icon: Globe,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      years: "4 años",
      proficiency: 95
    },
    {
      name: "Node.js",
      description: "Backend APIs",
      icon: Server,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      years: "4 años",
      proficiency: 90
    },
    {
      name: "Python",
      description: "IA & Backend",
      icon: Code2,
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50",
      years: "3 años",
      proficiency: 85
    },
    {
      name: "Docker",
      description: "DevOps",
      icon: Container,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      years: "2 años",
      proficiency: 80
    }
  ];

  const secondaryTech = [
    { name: "TypeScript", category: "Language", icon: Code2 },
    { name: "Java", category: "Language", icon: Code2 },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "Flutter", category: "Mobile", icon: Layers },
    { name: "React Native", category: "Mobile", icon: Layers },
    { name: "LangChain", category: "AI/ML", icon: Cpu },
    { name: "Kubernetes", category: "DevOps", icon: Cloud },
    { name: "REST APIs", category: "Backend", icon: Server },
    { name: "Microservicios", category: "Architecture", icon: Layers }
  ];

  return (
    <section id="stack" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <Cpu className="text-emerald-600" size={18} />
            <span className="text-sm font-semibold text-emerald-700">Stack Tecnológico</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Tecnologías que Domino
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experiencia comprobada en tecnologías modernas para construir soluciones escalables y eficientes
          </p>
        </div>

        {/* Primary Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {primaryStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{tech.name}</h3>
                    <p className="text-sm text-slate-600 font-medium">{tech.description}</p>
                    <p className="text-xs text-slate-500">{tech.years} de experiencia</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Proficiencia</span>
                      <span className="font-semibold">{tech.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${tech.gradient} rounded-full transition-all duration-1000`}
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Technologies */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Layers className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Tecnologías Adicionales</h3>
              <p className="text-slate-600">Herramientas y frameworks complementarios</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {secondaryTech.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={idx}
                  className="group bg-white hover:bg-gradient-to-br hover:from-emerald-50 hover:to-indigo-50 rounded-xl p-4 border border-slate-200 hover:border-emerald-300 transition-all duration-300 cursor-default"
                >
                  <Icon className="text-slate-400 group-hover:text-emerald-600 mb-3 transition-colors" size={24} />
                  <p className="font-semibold text-slate-900 mb-1">{tech.name}</p>
                  <p className="text-xs text-slate-500">{tech.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2">
              14+
            </div>
            <p className="text-slate-600 font-medium">Tecnologías Principales</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-slate-600 font-medium">Años Experiencia</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-slate-600 font-medium">Aprendizaje Continuo</p>
          </div>
        </div>
      </div>
    </section>
  );
}