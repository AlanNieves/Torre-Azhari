"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("¡Gracias! Nos pondremos en contacto contigo pronto.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitMessage("Hubo un error. Por favor intenta de nuevo.");
      }
    } catch (error) {
      setSubmitMessage("Error al enviar el formulario. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#1e1e1e] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-light text-white lg:text-5xl">
            Conversemos sobre tu próxima inversión
          </h2>
          <p className="mb-12 text-base text-gray-400">
            Si quieres conocer más sobre nuestros proyectos, recibir información personalizada o
            agendar una cita, déjanos tus datos y uno de nuestros asesores se pondrá en contacto
            contigo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-light tracking-wider text-white"
              >
                NOMBRE *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Escribe aquí..."
                className="w-full rounded-xl border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-light tracking-wider text-white"
              >
                CORREO *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Escribe aquí..."
                className="w-full rounded-xl border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-light tracking-wider text-white"
              >
                TELÉFONO *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+52"
                className="w-full rounded-xl border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-light tracking-wider text-white"
              >
                MENSAJE
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Escribe aquí..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#2a2a2a] px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full rounded-full bg-white px-8 py-4 text-sm font-light tracking-wider text-black transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </motion.button>

            {/* Success/Error Message */}
            {submitMessage && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm ${
                  submitMessage.includes("error") || submitMessage.includes("Hubo")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {submitMessage}
              </motion.p>
            )}

            <p className="text-center text-xs text-gray-500">
              Al enviar este formulario, aceptas que almacenaremos tus datos para gestionar tu
              consulta de acuerdo con nuestra política de privacidad.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
