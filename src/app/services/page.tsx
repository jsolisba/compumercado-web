import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const problems = [
  {
    title: "Mi equipo no funciona como debería",
    description:
      "Necesitas reparar, mantener, actualizar o mejorar un equipo de cómputo.",
    action: "Ir a la tienda",
    href: "https://compumercado.shop/",
    external: true,
  },
  {
    title: "Necesito infraestructura o Cloud",
    description:
      "Necesitas servidores, nube, redes, virtualización o una infraestructura más estable.",
    action: "Ver soluciones Cloud",
    href: "/cloud",
  },
  {
    title: "Me preocupa la seguridad",
    description:
      "Quieres proteger tus sistemas, información, accesos y dispositivos.",
    action: "Ver soluciones de seguridad",
    href: "/security",
  },
  {
    title: "Necesito alguien que se encargue",
    description:
      "Quieres soporte, monitoreo, backups y administración continua sin tener que hacerlo todo internamente.",
    action: "Ver servicios administrados",
    href: "/services",
    current: true,
  },
  {
    title: "Necesito tecnología para mi empresa",
    description:
      "Buscas equipos, software, licencias o una solución tecnológica para tu negocio.",
    action: "Conocer nuestras soluciones",
    href: "/technology",
  },
];

const steps = [
  {
    number: "01",
    title: "Nos cuentas qué está pasando",
    description:
      "No necesitas conocer la tecnología ni explicar el problema con términos técnicos.",
  },
  {
    number: "02",
    title: "Entendemos tu situación",
    description:
      "Revisamos lo que tienes, qué necesitas y qué está afectando tu operación.",
  },
  {
    number: "03",
    title: "Te proponemos una solución",
    description:
      "Te explicamos qué recomendamos y por qué, de una forma clara y directa.",
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
            <div className="mx-auto max-w-4xl py-24 text-center lg:py-32">
              <div className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Soluciones tecnológicas
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                ¿Tienes un problema con tu tecnología?
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Cuéntanos qué está pasando. Te ayudamos a encontrar una
                solución, desde un equipo que necesita reparación hasta una
                infraestructura empresarial que necesita mantenerse
                funcionando.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                >
                  Cuéntanos tu problema
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
                WhatsApp: +506 7015 4363
              </p>
            </div>
          </Container>
        </section>

        {/* Problems */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                ¿En qué podemos ayudarte?
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Empieza por el problema. Nosotros te ayudamos con la solución.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                No necesitas saber exactamente qué servicio necesitas. Elige
                el problema que más se parece a tu situación.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <article
                  key={problem.title}
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-950">
                      {problem.title}
                    </h3>

                    <p className="mt-4 leading-7 text-neutral-600">
                      {problem.description}
                    </p>
                  </div>

                  {problem.external ? (
                    <a
                      href={problem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      {problem.action}
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={problem.href}
                      className="mt-8 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      {problem.action}
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  )}
                </article>
              ))}
            </div>

            {/* Store WhatsApp */}
            <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <h3 className="font-bold text-neutral-950">
                  ¿Necesitas ayuda con un equipo?
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Para compras, reparaciones y equipos de cómputo, también
                  puedes contactar directamente a nuestra tienda.
                </p>
              </div>

              <a
                href="https://wa.me/50688757678"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex shrink-0 items-center justify-center rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-blue-300 hover:text-blue-600 sm:mt-0"
              >
                WhatsApp Tienda · +506 8875 7678
              </a>
            </div>
          </Container>
        </Section>

        {/* Human approach */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Sin complicaciones
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                  No necesitas ser técnico para trabajar con nosotros.
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  Puedes explicarnos el problema con tus propias palabras.
                  Nuestro trabajo es entender qué necesitas y convertirlo en
                  una solución tecnológica que tenga sentido para ti.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Así empezamos
                </div>

                <div className="mt-8 space-y-7">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="font-bold text-neutral-950">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section>
          <Container>
            <div className="rounded-3xl bg-blue-600 px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-16">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                  Hablemos
                </div>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  Cuéntanos qué necesitas.
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-100">
                  No importa si sabes exactamente qué necesitas o simplemente
                  sabes que algo no está funcionando como debería. Empecemos
                  por entender el problema.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                  >
                    Cuéntanos tu problema
                  </Link>

                  <a
                    href="https://wa.me/50670154363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    WhatsApp · +506 7015 4363
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
