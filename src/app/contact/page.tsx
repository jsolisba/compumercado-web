import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const options = [
  {
    title: "Necesito ayuda con mi tecnología",
    description:
      "Servidores, redes, cloud, seguridad, backups, soporte o cualquier problema que esté afectando tu operación.",
    action: "Hablar con un especialista",
    href: "https://wa.me/50670154363",
    external: true,
  },
  {
    title: "Quiero comprar o reparar equipo",
    description:
      "Computadoras, componentes, periféricos, equipos empresariales o reparación de equipo de cómputo.",
    action: "Ir a la tienda",
    href: "https://compumercado.shop/",
    external: true,
  },
  {
    title: "No estoy seguro de qué necesito",
    description:
      "Cuéntanos qué quieres lograr o qué problema estás teniendo. Nosotros te ayudamos a encontrar el camino.",
    action: "Escribir por WhatsApp",
    href: "https://wa.me/50670154363",
    external: true,
  },
];

const services = [
  "Cloud e infraestructura",
  "Servidores y hardware",
  "Ciberseguridad",
  "Servicios administrados",
  "Backup y continuidad",
  "Otro",
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
                Contacto
              </div>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
                ¿Tienes un problema de tecnología?
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                Cuéntanos qué está pasando. Si podemos ayudarte, encontraremos
                la mejor forma de hacerlo. Y si no sabes exactamente qué
                necesitas, también podemos empezar por ahí.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact options */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                ¿Por dónde empezamos?
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                Elige lo que más se parezca a lo que necesitas.
              </h2>

              <p className="mt-5 text-lg leading-8 text-neutral-600">
                No necesitas conocer el nombre técnico del problema. Solo
                cuéntanos qué necesitas resolver.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {options.map((option) => (
                <article
                  key={option.title}
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-neutral-950">
                    {option.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-neutral-600">
                    {option.description}
                  </p>

                  <a
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={
                      option.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-7 inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    {option.action}
                    <span
                      aria-hidden="true"
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Form */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Cuéntanos
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                  ¿Prefieres dejarnos los detalles?
                </h2>

                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  Déjanos tu información y explícanos qué necesitas. No hace
                  falta que utilices términos técnicos.
                </p>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                  <p className="font-semibold text-neutral-950">
                    ¿Necesitas una respuesta más rápida?
                  </p>

                  <p className="mt-2 leading-7 text-neutral-600">
                    Escríbenos directamente por WhatsApp.
                  </p>

                  <a
                    href="https://wa.me/50670154363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex font-semibold text-blue-600 hover:text-blue-700"
                  >
                    WhatsApp →
                  </a>
                </div>
              </div>

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
                      ¿En qué podemos ayudarte?
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
                      htmlFor="message"
                      className="text-sm font-semibold text-neutral-900"
                    >
                      ¿Qué necesitas resolver?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Cuéntanos qué está pasando, qué necesitas o qué quieres lograr..."
                      className="mt-2 w-full resize-y rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
                  >
                    Enviar consulta
                  </button>

                  <p className="text-center text-xs leading-5 text-neutral-500">
                    Sin compromiso. Primero entendemos tu necesidad.
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
                También puedes escribirnos
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Hablemos directamente.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Para servicios y soporte, escríbenos por WhatsApp. Para
                compras y reparaciones, también puedes contactar directamente
                con nuestra tienda.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <a
                  href="https://wa.me/50670154363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition-all hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                >
                  <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Servicios y soporte
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Hablar con un especialista
                  </h3>

                  <p className="mt-4 text-sm text-slate-400">
                    WhatsApp · +506 7015-4363
                  </p>

                  <span className="mt-5 inline-flex font-semibold text-blue-400">
                    Escribir por WhatsApp →
                  </span>
                </a>

                <a
                  href="https://wa.me/50688757678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition-all hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10"
                >
                  <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                    Tienda
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Comprar o reparar equipo
                  </h3>

                  <p className="mt-4 text-sm text-slate-400">
                    WhatsApp · +506 8875-7678
                  </p>

                  <span className="mt-5 inline-flex font-semibold text-blue-400">
                    Contactar tienda →
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
