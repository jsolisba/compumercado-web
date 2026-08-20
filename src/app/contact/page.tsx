import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const services = [
  "Cloud e infraestructura",
  "Servidores y hardware",
  "Ciberseguridad",
  "Servicios administrados",
  "Backup y continuidad",
  "Otro",
];

const budgets = [
  "Menos de ₡250.000",
  "₡250.000 – ₡500.000",
  "₡500.000 – ₡1.000.000",
  "₡1.000.000 – ₡2.500.000",
  "Más de ₡2.500.000",
  "Aún no lo sé",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-950 text-white">
          <Container>
            <div className="max-w-4xl py-20 lg:py-24">
              <div className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Hablemos
              </div>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
                Cuéntanos qué necesitas para tu empresa.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                Ya sea que necesites tecnología, infraestructura, seguridad o
                soporte, cuéntanos qué estás buscando. Analizamos tu necesidad
                y te ayudamos a definir el siguiente paso.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact form */}
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
              {/* Intro */}
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  CompuMercado
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                  Hablemos de tu proyecto.
                </h2>

                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  Cuéntanos qué necesitas y nuestro equipo analizará la mejor
                  manera de ayudarte.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                    <h3 className="font-semibold text-neutral-950">
                      ¿Quieres comprar tecnología?
                    </h3>

                    <p className="mt-2 leading-7 text-neutral-600">
                      Si ya sabes qué equipo necesitas, puedes comprar
                      directamente desde nuestra tienda en línea.
                    </p>

                    <a
                      href="https://compumercado.shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Visitar tienda
                      <span aria-hidden="true" className="ml-2">
                        ↗
                      </span>
                    </a>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                    <h3 className="font-semibold text-neutral-950">
                      ¿No sabes exactamente qué necesitas?
                    </h3>

                    <p className="mt-2 leading-7 text-neutral-600">
                      No hay problema. Explícanos el objetivo o problema y
                      nosotros te ayudamos a definir la solución.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-9">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-neutral-900"
                      >
                        Nombre
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="text-sm font-semibold text-neutral-900"
                      >
                        Empresa
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-neutral-900"
                      >
                        Correo electrónico
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="nombre@empresa.com"
                        className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-neutral-900"
                      >
                        Teléfono / WhatsApp
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+506 8888-8888"
                        className="mt-2 w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="text-sm font-semibold text-neutral-900"
                    >
                      ¿Qué necesitas?
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="text-sm font-semibold text-neutral-900"
                    >
                      Presupuesto aproximado
                    </label>

                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>

                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>

                    <p className="mt-2 text-xs text-neutral-500">
                      Esta información nos ayuda a preparar una propuesta
                      adecuada.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-neutral-900"
                    >
                      Cuéntanos sobre tu necesidad
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Cuéntanos qué necesitas, qué problema quieres resolver o qué proyecto estás planificando..."
                      className="mt-2 w-full resize-y rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
                  >
                    Solicitar cotización
                  </button>

                  <p className="text-center text-xs leading-5 text-neutral-500">
                    Sin compromiso inicial.
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </Section>

        {/* Direct contact */}
        <Section className="bg-neutral-950 text-white">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Contacto directo
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Prefieres hablar directamente con nosotros?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Puedes escribirnos por WhatsApp o enviarnos un correo. Nuestro
                equipo te ayudará a encontrar el mejor camino.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <a
                  href="https://wa.me/50670154363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition-all hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                        WhatsApp
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        Hablar con nuestro equipo
                      </h3>
                    </div>

                    <span className="text-2xl text-blue-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-400">
                    Atención por WhatsApp
                  </p>
                </a>

                <a
                  href="mailto:info@compumercado.com"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition-all hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                        Email
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        Enviar una consulta
                      </h3>
                    </div>

                    <span className="text-2xl text-blue-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-400">
                    Respuesta desde nuestro equipo comercial
                  </p>
                </a>
              </div>

              <div className="mt-10">
                <a
                  href="https://compumercado.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  ¿Quieres comprar tecnología? Visitar tienda
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
