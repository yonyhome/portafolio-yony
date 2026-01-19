import React, { useState } from 'react';
import { ExternalLink, Github, Rocket, Users, Star, TrendingUp, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Lexagen",
      tagline: "Plataforma Legal con IA Generativa",
      description: "Democratizando el acceso a servicios legales mediante inteligencia artificial, permitiendo a usuarios crear PQRS, tutelas y derechos de petición de forma automatizada y personalizada.",
      fullDescription: "Lexagen es una plataforma innovadora que utiliza modelos de lenguaje avanzados (LLMs) para generar documentos legales personalizados. La solución integra LangChain para orquestación de prompts, FastAPI para el backend escalable, y React para una interfaz intuitiva. El sistema procesa lenguaje natural del usuario y genera documentos legales estructurados y formalmente correctos.",
      image: "/images/projects/lexagen/lexagen-1.jpg",
      images: [
        "/images/projects/lexagen/lexagen-1.jpg",
        "/images/projects/lexagen/lexagen-2.jpg",
        "/images/projects/lexagen/lexagen-3.jpg",
        "/images/projects/lexagen/lexagen-4.jpg",
        "/images/projects/lexagen/lexagen-5.jpg",
        "/images/projects/lexagen/lexagen-6.jpg"

      ],
      metrics: [
        { label: "Usuarios Activos", value: "500+", icon: Users },
        { label: "Documentos Generados", value: "1,200+", icon: TrendingUp },
        { label: "Rating Satisfacción", value: "4.7/5", icon: Star }
      ],
      tech: ["Python", "LangChain", "React", "FastAPI", "PostgreSQL", "IA Generativa"],
      link: "https://lexagen.org/",
      github: null,
      featured: true,
      color: "purple"
    },
    {
      name: "Sistema IA Conversacional UNINORTE",
      tagline: "Chatbot Universitario 24/7 con RAG",
      description: "Chatbot inteligente desarrollado con LangChain y Chainlit para automatizar consultas académicas, administrativas y de servicios institucionales de estudiantes universitarios.",
      fullDescription: "Sistema conversacional basado en IA que integra información institucional de múltiples fuentes usando RAG (Retrieval Augmented Generation). La arquitectura incluye vectorización de documentos con embeddings, búsqueda semántica, y generación de respuestas contextuales. Implementado con Chainlit para la interfaz conversacional y LangChain para la orquestación del flujo de IA.",
      image: "/images/projects/sistema-ia-uninorte/ia-1.jpg",
      images: [
        "/images/projects/sistema-ia-uninorte/ia-1.jpg",
        "/images/projects/sistema-ia-uninorte/ia-2.jpg",
        "/images/projects/sistema-ia-uninorte/ia-3.jpg",
        "/images/projects/sistema-ia-uninorte/ia-4.jpg",
        "/images/projects/sistema-ia-uninorte/ia-5.jpg",
        "/images/projects/sistema-ia-uninorte/ia-6.jpg",
        "/images/projects/sistema-ia-uninorte/ia-7.jpg",
        "/images/projects/sistema-ia-uninorte/ia-8.jpg",
        "/images/projects/sistema-ia-uninorte/ia-9.jpg"

      ],
      metrics: [
        { label: "Consultas/Mes", value: "500+", icon: TrendingUp },
        { label: "Satisfacción", value: "80%", icon: Star },
        { label: "Tiempo Respuesta", value: "< 3s", icon: Rocket }
      ],
      tech: ["Python", "LangChain", "Chainlit", "NLP", "RAG", "Vector DB"],
      link: null,
      github: null,
      featured: true,
      color: "blue"
    },
    {
      name: "App Móvil Universitaria",
      tagline: "Modernización Institucional React Native",
      description: "Actualización completa de la aplicación móvil institucional de UNINORTE, mejorando la experiencia de 10,000+ estudiantes en servicios académicos y administrativos.",
      fullDescription: "Rediseño y desarrollo completo de la aplicación móvil institucional utilizando React Native y TypeScript. La app incluye módulos de consulta de notas, horarios, noticias institucionales, eventos, servicios universitarios y notificaciones push. Implementación de Redux para gestión de estado, integración con APIs REST institucionales, y optimización de rendimiento para garantizar fluidez en dispositivos de gama media.",
      image: "/images/projects/app-movil-uninorte/app-1.jpg",
      images: [
        "/images/projects/app-movil-uninorte/app-1.jpg",
        "/images/projects/app-movil-uninorte/app-2.jpg",
        "/images/projects/app-movil-uninorte/app-3.jpg",
        "/images/projects/app-movil-uninorte/app-4.jpg"
      ],
      metrics: [
        { label: "Usuarios Activos", value: "10K+", icon: Users },
        { label: "Rating Stores", value: "4.2/5", icon: Star },
        { label: "Engagement Diario", value: "65%", icon: TrendingUp }
      ],
      tech: ["React Native", "TypeScript", "Redux", "REST APIs", "Push Notifications"],
      link: null,
      github: null,
      featured: true,
      color: "emerald"
    }
  ];

  const colorMap = {
    purple: {
      gradient: "from-purple-500 to-indigo-600",
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200"
    },
    blue: {
      gradient: "from-blue-500 to-cyan-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200"
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-600",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200"
    }
  };

  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const colors = colorMap[project.color];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between z-10 rounded-t-3xl">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-1">{project.name}</h2>
              <p className={`font-semibold ${colors.text}`}>{project.tagline}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <X size={24} className="text-slate-600" />
            </button>
          </div>

          <div className="p-8">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative rounded-2xl overflow-hidden mb-4 bg-slate-100 aspect-video">
                <img 
                  src={project.images[currentImageIndex]}
                  alt={`${project.name} - Screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-video ${
                      currentImageIndex === idx 
                        ? `ring-4 ring-${project.color}-500` 
                        : 'opacity-60 hover:opacity-100'
                    } transition-all`}
                  >
                    <img 
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80';
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Descripción Detallada</h3>
              <p className="text-slate-700 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Metrics */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Resultados e Impacto</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className={`${colors.bg} rounded-2xl p-6 border ${colors.border}`}>
                      <Icon className={colors.text} size={32} />
                      <p className="text-3xl font-bold text-slate-900 mt-3 mb-1">{metric.value}</p>
                      <p className="text-sm text-slate-600 font-medium">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={`px-4 py-2 ${colors.bg} ${colors.text} rounded-xl font-semibold border ${colors.border}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.link || project.github) && (
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
                  >
                    Ver Proyecto <ExternalLink size={18} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
                  >
                    <Github size={18} /> Código
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="proyectos" className="py-24 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(79,70,229,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full mb-6 border border-purple-200">
            <Rocket className="text-purple-600" size={18} />
            <span className="text-sm font-semibold text-purple-700">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones tecnológicas con impacto real y resultados medibles
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const colors = colorMap[project.color];
            return (
              <div 
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 hover:border-transparent"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 shadow-lg">
                      ⭐ DESTACADO
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm font-semibold">Ver detalles</span>
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${colors.gradient} group-hover:bg-clip-text transition-all">
                    {project.name}
                  </h3>
                  <p className={`text-sm font-semibold ${colors.text} mb-3`}>
                    {project.tagline}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Mini Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-slate-200">
                    {project.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div key={i} className="text-center">
                          <Icon className={`${colors.text} mx-auto mb-1`} size={20} />
                          <p className="text-sm font-bold text-slate-900">{metric.value}</p>
                          <p className="text-xs text-slate-500">{metric.label.split(' ')[0]}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-lg text-xs font-semibold`}>
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">¿Interesado en colaborar en un proyecto?</p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all"
          >
            Hablemos de tu idea
            <Rocket size={20} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}