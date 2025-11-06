import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Universidad del Norte",
      role: "Ingeniero de Proyecto",
      period: "Mar 2024 - Presente",
      location: "Barranquilla, Colombia",
      type: "Full-time",
      description: "Liderando desarrollo de proyectos de innovación tecnológica en el departamento de TIC",
      achievements: [
        {
          text: "Desarrollo de sistemas IA con Python y LangChain",
          metric: "500+ consultas/mes automatizadas"
        },
        {
          text: "Actualización app móvil React Native",
          metric: "10K+ usuarios activos"
        },
        {
          text: "Implementación de infraestructura Docker",
          metric: "60% reducción en despliegues"
        }
      ],
      tech: ["Python", "LangChain", "React Native", "Docker", "Ubuntu", "IA"],
      current: true,
      color: "emerald"
    },
    {
      company: "Kinnova",
      role: "Desarrollador Móvil",
      period: "Mar 2023 - Ene 2024",
      location: "Barranquilla, Colombia",
      type: "Full-time",
      description: "Desarrollo de aplicaciones móviles multiplataforma para diversos clientes",
      achievements: [
        {
          text: "Desarrollo y publicación de aplicaciones Flutter",
          metric: "5+ apps en stores"
        },
        {
          text: "Rating promedio en tiendas oficiales",
          metric: "4.5+ estrellas"
        },
        {
          text: "Implementación de testing automatizado",
          metric: "40% mejora en calidad"
        }
      ],
      tech: ["Flutter", "Dart", "Firebase", "iOS", "Android", "BLoC"],
      color: "blue"
    },
    {
      company: "MinTIC",
      role: "Docente de Flutter",
      period: "Jul - Dic 2022",
      location: "Remoto",
      type: "Part-time",
      description: "Formación especializada en desarrollo móvil para programas del gobierno",
      achievements: [
        {
          text: "Formación de estudiantes en dos cohortes",
          metric: "50+ estudiantes"
        },
        {
          text: "Tasa de aprobación en proyectos finales",
          metric: "85% éxito"
        },
        {
          text: "Desarrollo de currículo y material didáctico",
          metric: "100% satisfacción"
        }
      ],
      tech: ["Flutter", "Dart", "Mobile", "Enseñanza"],
      color: "purple"
    },
    {
      company: "Sophos Solutions",
      role: "Junior Fullstack Developer",
      period: "Ene - Jun 2022",
      location: "Barranquilla, Colombia",
      type: "Full-time",
      description: "Desarrollo de servicios internos y participación en programa de formación",
      achievements: [
        {
          text: "Optimización de servicios Java + React",
          metric: "35% mejora en performance"
        },
        {
          text: "Desarrollo de microservicios RESTful",
          metric: "API robusta"
        },
        {
          text: "Implementación de patrones de diseño",
          metric: "Clean code certified"
        }
      ],
      tech: ["Java", "React", "Spring Boot", "SQL", "Microservicios"],
      color: "orange"
    }
  ];

  const colorMap = {
    emerald: {
      badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-500"
    },
    blue: {
      badge: "bg-blue-100 text-blue-700 border-blue-200",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      border: "border-blue-500"
    },
    purple: {
      badge: "bg-purple-100 text-purple-700 border-purple-200",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      border: "border-purple-500"
    },
    orange: {
      badge: "bg-orange-100 text-orange-700 border-orange-200",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      border: "border-orange-500"
    }
  };

  return (
    <section id="experiencia" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-6">
            <Briefcase className="text-indigo-600" size={18} />
            <span className="text-sm font-semibold text-indigo-700">Trayectoria</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            5+ años construyendo productos que impactan a miles de usuarios
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-indigo-200 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const colors = colorMap[exp.color];
              return (
                <div key={idx} className={`relative ${idx % 2 === 0 ? 'lg:pr-[50%] lg:pl-0' : 'lg:pl-[50%] lg:pr-0'}`}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2">
                    <div className={`w-6 h-6 bg-gradient-to-br ${colors.gradient} rounded-full ring-4 ring-white shadow-lg`}></div>
                  </div>

                  <div className={`lg:${idx % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${colors.border}">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h3>
                          <p className="text-lg font-semibold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-3">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={16} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={16} />
                              {exp.location}
                            </span>
                            <span className={`px-3 py-1 ${colors.badge} rounded-full font-medium border`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        {exp.current && (
                          <div className="px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-full text-sm font-bold shadow-lg">
                            Actual
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-gradient-to-r ${colors.bgGradient} rounded-xl">
                            <CheckCircle2 className="text-${exp.color}-600 mt-0.5 flex-shrink-0" size={20} />
                            <div className="flex-1">
                              <p className="text-slate-700 font-medium mb-1">{achievement.text}</p>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="text-${exp.color}-600" size={16} />
                                <span className="text-sm font-bold text-${exp.color}-600">{achievement.metric}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-6 border-t border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 mb-3">TECNOLOGÍAS USADAS</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">4</div>
            <p className="text-slate-600 font-medium">Empresas</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
            <p className="text-slate-600 font-medium">Años</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <p className="text-slate-600 font-medium">Proyectos</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
            <p className="text-slate-600 font-medium">Usuarios</p>
          </div>
        </div>
      </div>
    </section>
  );
}