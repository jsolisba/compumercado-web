import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const capabilities = [
  {
    title: "Cloud público",
    description:
      "Diseñamos y desplegamos infraestructura sobre Azure y AWS de acuerdo con las necesidades reales de tu empresa.",
  },
  {
    title: "Servidores e infraestructura",
    description:
      "Implementamos y administramos servidores Linux, Windows, Docker y plataformas empresariales.",
  },
  {
    title: "Kubernetes",
    description:
      "Diseñamos y operamos plataformas Kubernetes para aplicaciones que necesitan escalabilidad y alta disponibilidad.",
  },
  {
    title: "Infraestructura como código",
    description:
      "Automatizamos la infraestructura utilizando Terraform para conseguir entornos reproducibles y fáciles de mantener.",
  },
  {
    title: "Infraestructura híbrida",
    description:
      "Integramos servidores locales con servicios cloud para aprovechar las ventajas de ambos entornos.",
  },
  {
    title: "Migraciones",
    description:
      "Planificamos y ejecutamos migraciones de servidores, aplicaciones y servicios reduciendo riesgos e interrupciones.",
  },
];

const benefits = [
  "Infraestructura diseñada para las necesidades reales de tu negocio",
  "Mayor estabilidad y disponibilidad de tus sistemas",
  "Seguridad desde el diseño de la infraestructura",
  "Reducción de tareas manuales mediante automatización",
  "Visibilidad sobre el rendimiento y estado de tus plataformas",
  "Una arquitectura preparada para crecer contigo",
];

const process = [
  {
    number: "01",
    title: "Entendemos tu situación",
    description:
      "Analizamos tu infraestructura actual, tus aplicaciones, necesidades y objetivos.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Proponemos una arquitectura adecuada a tus requerimientos técnicos y presupuesto.",
  },
  {
    number: "03",
    title: "Implementamos",
    description:
      "Construimos y configuramos la infraestructura siguiendo buenas prácticas de seguridad y operación.",
  },
  {
    number: "04",
    title: "Acompañamos la operación",
    description:
      "Podemos continuar con monitoreo, mantenimiento, soporte y evolución de la plataforma.",
  },
];

const faqs = [
  {
    question: "¿Trabajan solamente con Azure?",
    answer:
      "No. Podemos trabajar con Azure, AWS y entornos híbridos. La tecnología se selecciona según las necesidades y objetivos de cada empresa.",
  },
  {
    question: "¿Pueden trabajar con infraestructura que ya tenemos?",
    answer:
      "Sí. Podemos evaluar y mejorar infraestructura existente sin necesidad de reemplazarla completamente.",
  },
  {
    question: "¿Pueden migrar mis servidores a la nube?",
    answer:
      "Sí. Analizamos las aplicaciones y dependencias existentes, diseñamos la estrategia de migración y ejecutamos el proceso de forma planificada.",
  },
  {
    question: "¿También ofrecen administración después de la implementación?",
    answer:
      "Sí. Podemos acompañar la operación mediante soporte, monitoreo, mantenimiento y administración de la infraestructura.",
  },
];

export default function CloudPage() {
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
                  Cloud e infraestructura
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  Infraestructura tecnológica preparada para hacer crecer tu
                  empresa.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Diseñamos, implementamos y administramos infraestructura
                  cloud y empresarial segura, estable y preparada para las
                  necesidades de tu negocio.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Solicitar una evaluación
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Cuéntanos qué necesitas y evaluamos la mejor alternativa para
                  tu empresa.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      Nuestra experiencia
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {["Azure", "AWS", "Kubernetes", "Terraform"].map(
                        (technology) => (
                          <div
                            key={technology}
                            className="rounded-xl border border-white/10 bg-white/5 p-5"
                          >
                            <p className="font-semibold">{technology}</p>
                            <p className="mt-2 text-sm text-slate-400">
                              Diseño e implementación
                            </p>
                          </div>
                        ),
                      )}
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
                  Una infraestructura que funciona hoy no siempre está
                  preparada para mañana.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-neutral-600">
                <p>
                  Servidores difíciles de mantener, aplicaciones que crecen
                  más rápido que la infraestructura, procesos manuales y falta
                  de visibilidad pueden convertirse rápidamente en problemas
                  para una empresa.
                </p>

                <p>
                  Nuestro trabajo es convertir esa complejidad en una
                  plataforma tecnológica estable, segura y administrable.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Capabilities */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Qué hacemos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Soluciones de infraestructura de principio a fin.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Desde un servidor individual hasta plataformas cloud y
                Kubernetes, diseñamos la solución de acuerdo con la realidad
                de tu empresa.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <h3 className="text-xl font-bold text-neutral-950">
                    {capability.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Benefits */}
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  El resultado
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                  Tecnología que trabaja para tu negocio.
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Una buena infraestructura no debería convertirse en una
                  preocupación constante. Debe permitir que tu equipo se
                  concentre en hacer crecer la empresa.
                </p>
              </div>

              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 rounded-xl border border-neutral-200 p-5"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      ✓
                    </div>

                    <p className="font-medium text-neutral-800">{benefit}</p>
                  </div>
                ))}
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
                De la situación actual a una infraestructura mejor.
              </h2>
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

        {/* Commercial CTA */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-blue-600 px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                  Empecemos
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  ¿Necesitas mejorar la infraestructura de tu empresa?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  Cuéntanos qué tienes actualmente, qué problema estás
                  enfrentando y hacia dónde quieres llegar. Evaluaremos tu
                  situación y te propondremos el siguiente paso.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    Solicitar una evaluación
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
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
                Algunas preguntas que recibimos.
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
