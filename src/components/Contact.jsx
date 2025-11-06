import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Validación
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Por favor completa todos los campos' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Aquí configurarás EmailJS después
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado con éxito! Te responderé pronto 🚀' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Hubo un error. Escríbeme directamente a yonyhome99@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "yonyhome99@gmail.com",
      href: "mailto:yonyhome99@gmail.com",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+57 302 459 3883",
      href: "https://wa.me/573024593883",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Barranquilla, Colombia",
      href: null,
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yonyhome",
      color: "slate"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yony-hoyos-meza-55141b233/",
      color: "blue"
    }
  ];

  return (
    <section id="contacto" className="relative py-24 px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <MessageCircle className="text-emerald-400" size={18} />
            <span className="text-sm font-semibold text-white">Conectemos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Listo para Crear Algo Increíble?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance, posiciones full-time y colaboraciones. 
            Hablemos sobre tu próxima gran idea.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <a
                    key={idx}
                    href={method.href || '#'}
                    target={method.href ? "_blank" : undefined}
                    rel={method.href ? "noopener noreferrer" : undefined}
                    className={`group block bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all ${method.href ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400 mb-1">{method.label}</p>
                        <p className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                      {method.href && (
                        <Send className="text-slate-400 group-hover:text-white transition-colors" size={20} />
                      )}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Tiempo de Respuesta</h3>
                  <p className="text-slate-300 text-sm">
                    Respondo todos los mensajes en <span className="text-emerald-400 font-semibold">menos de 24 horas</span>. 
                    Para consultas urgentes, contáctame por WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Sígueme en:</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:border-white/40 transition-all"
                    >
                      <Icon className="text-slate-300 group-hover:text-white transition-colors" size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíame un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <div className={`p-4 rounded-xl border-2 ${
                  formStatus.type === 'success'
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {formStatus.type === 'success' ? (
                      <CheckCircle2 className="text-emerald-600" size={20} />
                    ) : (
                      <MessageCircle className="text-red-600" size={20} />
                    )}
                    <p className={`font-medium ${
                      formStatus.type === 'success' ? 'text-emerald-700' : 'text-red-700'
                    }`}>
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-600">
                O escríbeme directamente por{' '}
                <a
                  href="https://wa.me/573024593883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-semibold hover:text-emerald-700"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Yony Hoyos Meza · Full Stack Engineer
          </p>
          <p className="text-slate-500 text-sm">
            Hecho con ❤️ usando React, Tailwind CSS y mucho café ☕
          </p>
        </div>
      </div>
    </section>
  );
}