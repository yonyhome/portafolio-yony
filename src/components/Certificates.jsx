import React from 'react';
import { Award, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    { name: "TypeScript", org: "Platzi", year: "2023", category: "Frontend" },
    { name: "RESTful APIs y Microservicios", org: "Platzi", year: "2023", category: "Backend" },
    { name: "React JS", org: "Platzi", year: "2022", category: "Frontend" },
    { name: "Java Avanzado", org: "Platzi", year: "2022", category: "Backend" },
    { name: "Kubernetes", org: "Platzi", year: "2023", category: "DevOps" },
    { name: "Docker", org: "Platzi", year: "2023", category: "DevOps" },
    { name: "Oracle Database SQL", org: "Platzi", year: "2022", category: "Database" },
    { name: "Node.js", org: "Platzi", year: "2022", category: "Backend" },
    { name: "Python Profesional", org: "Platzi", year: "2024", category: "Backend" },
    { name: "HTML & CSS Profesional", org: "Platzi", year: "2021", category: "Frontend" },
    { name: "Marcos Ágiles (Scrum)", org: "Platzi", year: "2022", category: "Metodología" },
    { name: "SOAP Web Services", org: "Platzi", year: "2022", category: "Backend" }
  ];

  const categoryColors = {
    Frontend: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    Backend: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    DevOps: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    Database: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    Metodología: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
  };

  const categories = [...new Set(certificates.map(cert => cert.category))];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full mb-6 border border-orange-200">
            <GraduationCap className="text-orange-600" size={18} />
            <span className="text-sm font-semibold text-orange-700">Aprendizaje Continuo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Certificaciones Profesionales
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Formación continua en las tecnologías más demandadas del mercado
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Award className="text-white" size={28} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">12</div>
            <div className="text-sm text-slate-600 font-medium">Certificaciones</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="text-white" size={28} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">5</div>
            <div className="text-sm text-slate-600 font-medium">Categorías</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">Platzi</div>
            <div className="text-sm text-slate-600 font-medium">Plataforma</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Award className="text-white" size={28} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">2021-2024</div>
            <div className="text-sm text-slate-600 font-medium">Período</div>
          </div>
        </div>

        {/* Certificates by Category */}
        <div className="space-y-8">
          {categories.map((category, catIdx) => {
            const colors = categoryColors[category];
            const categoryCerts = certificates.filter(cert => cert.category === category);
            
            return (
              <div key={catIdx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`px-4 py-2 ${colors.bg} rounded-xl border ${colors.border}`}>
                    <span className={`text-sm font-bold ${colors.text}`}>{category}</span>
                  </div>
                  <div className="h-px flex-1 bg-slate-200"></div>
                  <span className="text-sm text-slate-500 font-medium">{categoryCerts.length} certificados</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryCerts.map((cert, idx) => (
                    <div 
                      key={idx}
                      className={`group relative bg-gradient-to-br ${colors.bg} rounded-2xl p-5 border ${colors.border} hover:shadow-lg transition-all duration-300 overflow-hidden`}
                    >
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="relative flex items-start gap-4">
                        <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border ${colors.border}`}>
                          <Award className={colors.text} size={24} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all">
                            {cert.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="font-semibold">{cert.org}</span>
                            <span className="text-slate-400">•</span>
                            <span>{cert.year}</span>
                          </div>
                        </div>

                        <CheckCircle2 className={`${colors.text} flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity`} size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-indigo-600 rounded-3xl p-8 text-center text-white shadow-2xl">
          <Award className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-3">Verificación de Certificados</h3>
          <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
            Todos los certificados son verificables. Consulta el CV completo para ver los códigos QR y enlaces de verificación oficiales.
          </p>
          <a 
            href="/cv/Yony_Hoyos_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            <ExternalLink size={18} />
            Descargar CV Completo
          </a>
        </div>
      </div>
    </section>
  );
}