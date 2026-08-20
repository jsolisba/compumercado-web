import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const services = [
  {
    title: "Administración de servidores",
    description:
      "Administración y mantenimiento de servidores Linux, Windows y plataformas empresariales.",
  },
  {
    title: "Monitoreo",
    description:
      "Supervisión de disponibilidad, rendimiento y estado de los servicios críticos de tu infraestructura.",
  },
  {
    title: "Backups",
    description:
      "Diseño, configuración y supervisión de estrategias de respaldo para proteger información importante.",
  },
  {
    title: "Mantenimiento",
    description:
      "Actualizaciones, revisión de configuraciones, mantenimiento preventivo y mejora continua.",
  },
  {
    title: "Soporte TI",
    description:
      "Acompañamiento técnico para resolver incidentes y mantener operativa tu infraestructura.",
  },
  {
    title: "Administración Cloud",
    description:
      "Gestión y optimización de recursos cloud para mantener una infraestructura estable y eficiente.",
  },
];

const problems = [
  "No tienes personal especializado para administrar servidores",
  "Te enteras de los problemas cuando los usuarios ya están afectados",
  "Los backups existen pero nadie verifica que realmente funcionen",
  "Las actualizaciones y tareas de mantenimiento se acumulan",
  "Tu infraestructura depende demasiado de una sola persona",
  "Necesitas soporte técnico sin contratar un equipo interno completo",
];

const benefits = [
  "Mayor continuidad de tus servicios",
  "Monitoreo de los componentes críticos",
  "Backups supervisados y documentados",
  "Mantenimiento preventivo",
  "Acceso a experiencia especializada",
  "Menor dependencia de una sola persona interna",
];

const process = [
  {
    number: "01",
    title: "Conocemos tu entorno",
    description:
      "Revisamos servidores, aplicaciones, redes, backups y servicios que forman parte de tu operación.",
  },
  {
    number: "02",
    title: "Definimos prioridades",
    description:
      "Identificamos qué debe monitorearse, mantenerse y protegerse de acuerdo con la importancia para tu negocio.",
  },
  {
    number: "03",
    title: "Implementamos",
    description:
      "Configuramos monitoreo, backups, mantenimiento y los controles necesarios.",
  },
  {
    number: "04",
    title: "Acompañamos continuamente",
    description:
      "Mantenemos una operación constante y atendemos las necesidades que aparecen con el tiempo.",
  },
];

const faqs = [
  {
    question: "¿Necesito contratar un equipo completo?",
    answer:
      "No. Podemos complementar a tu equipo existente o encargarnos de determinadas funciones de infraestructura según tus necesidades.",
  },
  {
    question: "¿Pueden administrar servidores que ustedes no instalaron?",
    answer:
      "Sí. Podemos comenzar evaluando la infraestructura existente y definir qué tareas de administración y mantenimiento podemos asumir.",
  },
  {
    question: "¿Los servicios pueden contratarse mensualmente?",
    answer:
      "Sí. Podemos diseñar esquemas de soporte y administración recurrentes de acuerdo con el tamaño y las necesidades de cada empresa.",
  },
  {
    question: "¿Qué pasa si ocurre una emergencia?",
    answer:
      "El alcance y los tiempos de atención dependerán del esquema de soporte contratado. Podemos definir estos niveles en la propuesta de servicio.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-950 text-white">
          <Container>
            <div className="grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
              <div className="max-w-3xl">
                <div className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
                  Servicios administrados
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  Tu tecnología funcionando. Tu equipo concentrado en el
                  negocio.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Administramos, monitoreamos y mantenemos tu infraestructura
                  tecnológica para que puedas concentrarte en hacer crecer tu
                  empresa.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Solicitar una evaluación
                  </Link>

                  <a
                    href="https://wa.me/"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Podemos complementar tu equipo o asumir la administración de
                  determinados servicios.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      Operación continua
                    </div>

                    <div className="mt-8 space-y-4">
                      {[
                        "Monitoreo",
                        "Backups",
                        "Mantenimiento",
                        "Soporte",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-5"
                        >
                          <span className="font-medium">{item}</span>

                          <span className="text-sm text-blue-400">
                            Supervisado
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Problem */}
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  El problema
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                  Cuando nadie está pendiente de la infraestructura, los
                  problemas terminan llegando al negocio.
                </h2>
              </div>

              <div>
                <div className="grid gap-4">
                  {problems.map((problem) => (
                    <div
                      key={problem}
                      className="flex gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                        !
                      </div>

                      <p className="font-medium leading-7 text-neutral-700">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Services */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Qué administramos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Servicios para mantener tu infraestructura bajo control.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Podemos trabajar sobre toda tu infraestructura o encargarnos
                únicamente de los componentes donde necesitas apoyo.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-neutral-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Recurring value */}
        <Section>
          <Container>
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12 lg:p-16">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Soporte continuo
                  </div>

                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                    No necesitas esperar a que algo falle para pedir ayuda.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-neutral-600">
                    Una estrategia de administración continua permite detectar
                    problemas, mantener sistemas actualizados y cuidar los
                    componentes críticos antes de que una falla afecte a los
                    usuarios.
                  </p>
                </div>

                <div className="grid gap-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-4 rounded-xl bg-neutral-50 p-5"
                    >
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                        ✓
                      </div>

                      <p className="font-medium text-neutral-800">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Process */}
        <Section className="bg-neutral-950 text-white">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Cómo trabajamos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Convertimos la administración en un proceso continuo.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Primero entendemos tu entorno. Después definimos qué debemos
                supervisar y mantenemos una operación organizada.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <div className="text-3xl font-bold text-blue-400">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-blue-600 px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                  Hablemos de tu infraestructura
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  ¿Necesitas ayuda para administrar tu tecnología?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  Cuéntanos qué infraestructura tienes actualmente, qué
                  servicios necesitas mantener y dónde estás teniendo
                  dificultades. Podemos evaluar el entorno y proponerte una
                  forma de trabajar.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    Solicitar una evaluación
                  </Link>

                  <a
                    href="https://wa.me/"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Preguntas frecuentes
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950">
                Algunas preguntas frecuentes.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <h3 className="text-lg font-bold text-neutral-950">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
