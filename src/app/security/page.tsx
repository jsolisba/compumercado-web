import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const solutions = [
  {
    title: "Evaluación de seguridad",
    description:
      "Revisamos tu infraestructura, accesos, configuraciones y controles para identificar riesgos y oportunidades de mejora.",
  },
  {
    title: "Hardening",
    description:
      "Fortalecemos servidores, sistemas y servicios reduciendo configuraciones inseguras y superficies de ataque innecesarias.",
  },
  {
    title: "Seguridad Cloud",
    description:
      "Revisamos y fortalecemos la seguridad de tus recursos y servicios en plataformas cloud.",
  },
  {
    title: "Gestión de accesos",
    description:
      "Ayudamos a implementar controles adecuados para usuarios, privilegios, autenticación y acceso a recursos.",
  },
  {
    title: "Monitoreo",
    description:
      "Implementamos mecanismos de monitoreo para detectar comportamientos anómalos y problemas de seguridad.",
  },
  {
    title: "Protección de infraestructura",
    description:
      "Aplicamos buenas prácticas de seguridad en servidores, redes, aplicaciones y plataformas empresariales.",
  },
];

const risks = [
  "Servidores expuestos innecesariamente a Internet",
  "Usuarios con privilegios superiores a los necesarios",
  "Sistemas sin actualizaciones o controles adecuados",
  "Falta de visibilidad sobre eventos de seguridad",
  "Configuraciones inseguras en servicios cloud",
  "Backups que no han sido correctamente protegidos o probados",
];

const benefits = [
  "Identificar riesgos antes de que se conviertan en incidentes",
  "Reducir la superficie de ataque de tu infraestructura",
  "Mejorar el control sobre usuarios y accesos",
  "Fortalecer servidores y servicios críticos",
  "Obtener mayor visibilidad sobre tu infraestructura",
  "Establecer una estrategia de seguridad acorde con tu empresa",
];

const process = [
  {
    number: "01",
    title: "Evaluamos",
    description:
      "Entendemos tu infraestructura, aplicaciones, usuarios y principales riesgos.",
  },
  {
    number: "02",
    title: "Identificamos riesgos",
    description:
      "Detectamos configuraciones, accesos y componentes que requieren atención.",
  },
  {
    number: "03",
    title: "Priorizamos",
    description:
      "Clasificamos las mejoras según impacto, riesgo y prioridad para el negocio.",
  },
  {
    number: "04",
    title: "Fortalecemos",
    description:
      "Implementamos las mejoras y controles necesarios de forma planificada.",
  },
];

const faqs = [
  {
    question: "¿Necesito tener un departamento de seguridad?",
    answer:
      "No. Podemos ayudarte a evaluar y mejorar la seguridad de tu infraestructura aunque no tengas un equipo especializado interno.",
  },
  {
    question: "¿Pueden revisar servidores que ya tenemos?",
    answer:
      "Sí. Podemos evaluar servidores y servicios existentes y proponer mejoras sin necesidad de reemplazar toda la infraestructura.",
  },
  {
    question: "¿Trabajan con infraestructura Cloud?",
    answer:
      "Sí. Podemos evaluar configuraciones y controles de seguridad en entornos cloud y plataformas empresariales.",
  },
  {
    question: "¿La evaluación incluye un reporte?",
    answer:
      "Podemos entregar los hallazgos identificados, prioridades y recomendaciones para definir un plan de mejora.",
  },
];

export default function SecurityPage() {
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
                  Ciberseguridad
                </div>

                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  Reduce los riesgos de seguridad antes de que se conviertan
                  en problemas.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                  Evaluamos, fortalecemos y monitoreamos tu infraestructura
                  tecnológica para ayudarte a proteger sistemas, accesos y
                  datos empresariales.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Solicitar evaluación
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Una revisión inicial puede ayudarte a entender dónde están
                  tus principales riesgos.
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      Áreas de protección
                    </div>

                    <div className="mt-8 space-y-4">
                      {[
                        "Infraestructura",
                        "Identidades y accesos",
                        "Cloud",
                        "Servidores",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                            ✓
                          </div>

                          <span className="font-medium">{item}</span>
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
                  Muchas empresas descubren sus problemas de seguridad cuando
                  ya es demasiado tarde.
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-neutral-600">
                <p>
                  Una contraseña comprometida, un servidor expuesto o una
                  configuración incorrecta pueden convertirse en un problema
                  serio para la operación de una empresa.
                </p>

                <p>
                  La seguridad no consiste solamente en instalar herramientas.
                  También requiere configurar correctamente la infraestructura,
                  controlar los accesos y mantener visibilidad sobre lo que
                  está ocurriendo.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Common risks */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Riesgos frecuentes
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                ¿Sabes qué tan expuesta está tu infraestructura?
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Estos son algunos de los problemas que podemos ayudarte a
                identificar y corregir.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {risks.map((risk) => (
                <div
                  key={risk}
                  className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                    !
                  </div>

                  <p className="font-medium text-neutral-800">{risk}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Solutions */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Qué hacemos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Seguridad aplicada a la infraestructura real de tu empresa.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Trabajamos sobre los componentes que realmente sostienen tu
                operación tecnológica.
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

        {/* Benefits */}
        <Section className="bg-neutral-950 text-white">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  El resultado
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Una infraestructura más difícil de comprometer y más fácil
                  de controlar.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Nuestro objetivo es ayudarte a construir controles de
                  seguridad prácticos que puedan mantenerse a largo plazo.
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
                Seguridad basada en prioridades.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                No todas las empresas necesitan las mismas herramientas. Por
                eso empezamos entendiendo el entorno y priorizando los riesgos
                que realmente pueden afectar al negocio.
              </p>
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
                  Evaluación inicial
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  ¿Quieres saber dónde están los principales riesgos de tu
                  infraestructura?
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  Cuéntanos cómo está construida actualmente tu infraestructura
                  y qué te preocupa. Podemos ayudarte a identificar prioridades
                  y definir un plan de mejora.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    Solicitar evaluación
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
