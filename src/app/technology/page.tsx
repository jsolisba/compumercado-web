import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const solutions = [
  {
    title: "Servidores empresariales",
    description:
      "Suministro de servidores para aplicaciones empresariales, virtualización, bases de datos, almacenamiento y cargas de trabajo críticas.",
  },
  {
    title: "Almacenamiento",
    description:
      "Soluciones de storage para centralizar información, respaldos, aplicaciones y datos empresariales.",
  },
  {
    title: "Networking",
    description:
      "Switches, routers, firewalls y equipamiento de red para construir una infraestructura confiable y segura.",
  },
  {
    title: "Equipamiento empresarial",
    description:
      "Computadoras, estaciones de trabajo, periféricos y otros equipos necesarios para la operación de tu empresa.",
  },
  {
    title: "Software y licenciamiento",
    description:
      "Software y licencias para complementar la infraestructura tecnológica de tu organización.",
  },
  {
    title: "Infraestructura especializada",
    description:
      "Equipamiento diseñado para virtualización, servidores de aplicaciones, bases de datos y otros requerimientos específicos.",
  },
];

const services = [
  {
    title: "Asesoría",
    description:
      "Te ayudamos a identificar qué infraestructura necesitas antes de realizar una compra.",
  },
  {
    title: "Dimensionamiento",
    description:
      "Analizamos capacidad, crecimiento y requerimientos para recomendar una solución adecuada.",
  },
  {
    title: "Cotización",
    description:
      "Buscamos y cotizamos las alternativas que mejor se ajusten a tus necesidades y presupuesto.",
  },
  {
    title: "Implementación",
    description:
      "Podemos instalar, configurar e integrar el equipamiento adquirido con tu infraestructura existente.",
  },
];

const benefits = [
  "Recomendaciones basadas en tus necesidades reales",
  "Evita comprar infraestructura sobredimensionada o insuficiente",
  "Una solución que contempla crecimiento futuro",
  "Posibilidad de integrar hardware y servicios profesionales",
  "Soporte técnico para la implementación",
  "Un único punto de contacto para tu proyecto tecnológico",
];

const process = [
  {
    number: "01",
    title: "Cuéntanos qué necesitas",
    description:
      "Indícanos qué quieres comprar, qué problema necesitas resolver o qué proyecto estás planificando.",
  },
  {
    number: "02",
    title: "Analizamos tu necesidad",
    description:
      "Revisamos los requerimientos técnicos, capacidad, presupuesto y crecimiento esperado.",
  },
  {
    number: "03",
    title: "Preparamos la propuesta",
    description:
      "Buscamos las alternativas disponibles y te presentamos una propuesta de acuerdo con tu proyecto.",
  },
  {
    number: "04",
    title: "Entregamos e implementamos",
    description:
      "Además del suministro, podemos ayudarte con instalación, configuración e integración.",
  },
];

const faqs = [
  {
    question: "¿Puedo solicitar solamente un servidor?",
    answer:
      "Sí. Puedes solicitar una cotización puntual de un servidor, workstation, storage, networking o cualquier otro equipo empresarial.",
  },
  {
    question: "¿Pueden recomendarme qué servidor necesito?",
    answer:
      "Sí. Podemos partir de tus necesidades de aplicaciones, usuarios, almacenamiento y crecimiento para recomendar una configuración adecuada.",
  },
  {
    question: "¿Venden únicamente hardware?",
    answer:
      "No necesariamente. Podemos combinar el suministro de hardware con servicios de instalación, configuración, migración, seguridad, backup y administración.",
  },
  {
    question: "¿Trabajan con infraestructura existente?",
    answer:
      "Sí. Podemos diseñar la nueva infraestructura teniendo en cuenta los servidores, redes, aplicaciones y servicios que ya tienes.",
  },
];

export default function TechnologyPage() {
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
                  Tecnología empresarial
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  La infraestructura que tu empresa necesita para operar y
                  crecer.
                </h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
  Encuentra servidores, storage, networking, computadoras y
  equipamiento empresarial en nuestra tienda. Si necesitas una
  solución específica, también podemos ayudarte a dimensionarla,
  adquirirla e implementarla.
</p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Solicitar cotización
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Cuéntanos qué necesitas y te ayudamos a encontrar la
                  solución adecuada.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      Soluciones
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {[
                        "Servidores",
                        "Storage",
                        "Networking",
                        "Workstations",
                      ].map((technology) => (
                        <div
                          key={technology}
                          className="rounded-xl border border-white/10 bg-white/5 p-5"
                        >
                          <p className="font-semibold">{technology}</p>
<p className="mt-2 text-sm text-slate-400">
  Disponible para compra y proyectos empresariales
</p>
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
                  Comprar tecnología no debería convertirse en una apuesta.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-neutral-600">
                <p>
                  Elegir un servidor, storage o equipo empresarial requiere
                  entender capacidad, compatibilidad, rendimiento, crecimiento
                  y presupuesto.
                </p>

                <p>
                  Una mala decisión puede terminar en infraestructura
                  insuficiente, costos innecesarios o problemas de operación.
                </p>

                <p>
                  En CompuMercado te ayudamos a tomar una decisión técnica
                  antes de realizar la inversión.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Solutions */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Qué podemos suministrar
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Tecnología para diferentes necesidades empresariales.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                No necesitas conocer exactamente qué equipo comprar. Podemos
                partir de tu necesidad y ayudarte a definir la solución.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-neutral-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {solution.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Services */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Más que vender hardware
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Podemos acompañar todo el proyecto.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                La compra de infraestructura es solamente una parte de la
                solución. También podemos ayudarte a implementarla y ponerla
                en operación.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
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

        {/* Benefits */}
        <Section className="bg-neutral-950 text-white">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Nuestra propuesta
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  La tecnología debe ajustarse al negocio, no al revés.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Nuestro objetivo es ayudarte a invertir correctamente,
                  evitando configuraciones innecesarias y pensando también en
                  las necesidades futuras de tu empresa.
                </p>
              </div>

              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-400">
                      ✓
                    </div>

                    <p className="font-medium text-slate-200">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Process */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Cómo trabajamos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Desde la necesidad hasta la infraestructura funcionando.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7"
                >
                  <div className="text-3xl font-bold text-blue-600">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-neutral-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
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
                  Solicita una cotización
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  ¿Necesitas servidores o tecnología para tu empresa?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  Cuéntanos qué necesitas, qué aplicación vas a utilizar, qué
                  cantidad de usuarios tienes o qué problema quieres resolver.
                  Te ayudaremos a definir la infraestructura adecuada.
                </p>
<div className="mt-9 flex flex-col gap-4 sm:flex-row">
  <a
    href="https://compumercado.shop/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
  >
    Ver productos
    <span aria-hidden="true" className="ml-2">
      ↗
    </span>
  </a>

  <Link
    href="/contact"
    className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
  >
    Solicitar cotización
  </Link>
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
                Antes de solicitar una cotización.
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
