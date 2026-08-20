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
      "Diseñamos y operamos plataformas Kubernetes para aplicaciones que necesitan escalabilidad y disponibilidad.",
  },
  {
    title: "Infraestructura como código",
    description:
      "Automatizamos la infraestructura utilizando Terraform para conseguir entornos reproducibles y fáciles de mantener.",
  },
  {
    title: "Infraestructura híbrida",
    description:
      "Integramos servidores locales con servicios cloud cuando necesitas aprovechar ambos entornos.",
  },
  {
    title: "Migraciones",
    description:
      "Planificamos y ejecutamos migraciones de servidores, aplicaciones y servicios reduciendo riesgos e interrupciones.",
  },
];

const benefits = [
  "Infraestructura alineada con las necesidades reales de tu negocio",
  "Mayor estabilidad y disponibilidad de tus sistemas",
  "Seguridad considerada desde el diseño",
  "Menos tareas manuales mediante automatización",
  "Mayor visibilidad sobre el estado de tus plataformas",
  "Una arquitectura preparada para crecer contigo",
];

const process = [
  {
    number: "01",
    title: "Entendemos tu situación",
    description:
      "Revisamos lo que tienes actualmente, qué está funcionando, qué te preocupa y hacia dónde quieres llevar tu operación.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos una arquitectura adecuada a tus necesidades técnicas, presupuesto y crecimiento esperado.",
  },
  {
    number: "03",
    title: "Implementamos",
    description:
      "Construimos y configuramos la infraestructura siguiendo buenas prácticas de seguridad, automatización y operación.",
  },
  {
    number: "04",
    title: "Te acompañamos",
    description:
      "Si lo necesitas, continuamos con monitoreo, mantenimiento, soporte y evolución de la plataforma.",
  },
];

const faqs = [
  {
    question: "¿Tengo que migrar todo a la nube?",
    answer:
      "No. Primero evaluamos tu situación. En algunos casos la mejor alternativa puede ser cloud, infraestructura local o una combinación de ambas.",
  },
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
      "Sí. Analizamos las aplicaciones y dependencias existentes, diseñamos una estrategia y ejecutamos la migración de forma planificada.",
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
                  Una infraestructura que te permita trabajar tranquilo y
                  crecer con tu empresa.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Diseñamos, implementamos y administramos infraestructura
                  cloud y empresarial para que tus sistemas sean más estables,
                  seguros y fáciles de mantener.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Cuéntanos qué necesitas
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  No necesitas saber exactamente qué tecnología necesitas.
                  Podemos ayudarte a definirla.
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
                  Lo que suele pasar
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                  La infraestructura puede crecer hasta convertirse en un
                  problema.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-neutral-600">
                <p>
                  Servidores difíciles de mantener, aplicaciones que crecen
                  más rápido que la infraestructura, procesos manuales y falta
                  de visibilidad pueden terminar afectando la operación.
                </p>

                <p>
                  También es común tener infraestructura que funciona, pero
                  que nadie quiere tocar por miedo a provocar una interrupción.
                </p>

                <p>
                  Ahí es donde podemos ayudarte: entendemos lo que tienes,
                  identificamos qué necesita mejorar y construimos una
                  infraestructura que puedas administrar con mayor confianza.
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
                Qué podemos hacer
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Desde un servidor hasta una plataforma completa.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                No todas las empresas necesitan la misma infraestructura.
                Partimos de tu situación y construimos una solución acorde con
                tu realidad.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
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
                  Tecnología que deja de ser una preocupación constante.
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Una buena infraestructura debería darle estabilidad a tu
                  empresa y permitir que tu equipo se concentre en el negocio,
                  no en apagar incendios tecnológicos.
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
                No empezamos por la tecnología. Empezamos por entenderte.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Antes de recomendar una plataforma, queremos entender qué
                necesitas resolver y qué impacto tiene para tu empresa.
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

        {/* Commercial CTA */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-blue-600 px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                  Empecemos
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  ¿Hay algo en tu infraestructura que te preocupa?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  Cuéntanos qué tienes actualmente, qué problema estás
                  enfrentando o qué quieres mejorar. No necesitas tener la
                  solución definida; podemos ayudarte a encontrar el siguiente
                  paso.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    Cuéntanos tu situación
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
                    target="_blank"
                    rel="noopener noreferrer"
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
