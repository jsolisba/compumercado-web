import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const solutions = [
  {
    title: "Mi empresa necesita una infraestructura más estable",
    description:
      "Servidores lentos, sistemas que se caen, crecimiento sin planificación o una infraestructura que ya no responde a las necesidades del negocio.",
    solution:
      "Diseñamos y mejoramos infraestructura física, virtual y cloud para que tus sistemas sean más estables, seguros y preparados para crecer.",
    href: "/cloud",
    action: "Ver infraestructura y cloud",
  },
  {
    title: "Quiero proteger mi información y mis sistemas",
    description:
      "Preocupaciones por accesos no autorizados, pérdida de información, configuraciones inseguras o riesgos que no sabes cómo identificar.",
    solution:
      "Evaluamos tu entorno, fortalecemos la seguridad y ayudamos a reducir los riesgos que pueden afectar la operación de tu empresa.",
    href: "/security",
    action: "Ver soluciones de seguridad",
  },
  {
    title: "No quiero preocuparme por la tecnología todos los días",
    description:
      "Tu equipo necesita soporte, mantenimiento, monitoreo o alguien que se encargue de que la tecnología simplemente funcione.",
    solution:
      "Nos encargamos de administrar y dar seguimiento a tus servicios tecnológicos para que puedas concentrarte en tu negocio.",
    href: "/services",
    action: "Ver servicios administrados",
  },
  {
    title: "Necesito equipos o tecnología para mi negocio",
    description:
      "Computadoras, servidores, componentes, software o equipamiento para comenzar, renovar o hacer crecer tu operación.",
    solution:
      "Puedes comprar directamente desde nuestra tienda y contar con nuestro apoyo para encontrar el equipo adecuado para lo que necesitas.",
    href: "https://compumercado.shop/",
    action: "Visitar tienda",
    external: true,
  },
  {
    title: "Tengo un proyecto y no sé por dónde empezar",
    description:
      "Sabes lo que quieres conseguir, pero no tienes claro qué tecnología necesitas, cómo implementarla o cuánto debería costar.",
    solution:
      "Conversamos contigo, entendemos el objetivo y te ayudamos a convertir la necesidad en un plan tecnológico claro.",
    href: "/contact",
    action: "Hablar con nosotros",
  },
  {
    title: "Mi tecnología ya no acompaña el crecimiento del negocio",
    description:
      "La empresa creció, pero los sistemas, equipos o procesos tecnológicos se quedaron atrás.",
    solution:
      "Analizamos el entorno actual y proponemos mejoras que permitan crecer sin agregar complejidad innecesaria.",
    href: "/contact",
    action: "Cuéntanos tu situación",
  },
];

const process = [
  {
    number: "01",
    title: "Nos cuentas el problema",
    description:
      "No necesitas saber qué tecnología necesitas. Explícanos qué está pasando o qué quieres conseguir.",
  },
  {
    number: "02",
    title: "Entendemos tu situación",
    description:
      "Revisamos el contexto, las necesidades y las prioridades antes de recomendar una solución.",
  },
  {
    number: "03",
    title: "Te proponemos un camino",
    description:
      "Definimos una solución clara, realista y alineada con lo que necesitas.",
  },
  {
    number: "04",
    title: "Lo hacemos realidad",
    description:
      "Implementamos, acompañamos y, cuando corresponde, seguimos administrando la solución contigo.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-950 text-white">
          <Container>
            <div className="max-w-4xl py-20 lg:py-28">
              <div className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Soluciones
              </div>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Cuéntanos qué necesitas. Nosotros buscamos cómo resolverlo.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                No tienes que conocer de servidores, cloud o ciberseguridad
                para trabajar con nosotros. Puedes comenzar simplemente
                contándonos qué problema tienes.
              </p>
            </div>
          </Container>
        </section>

        {/* Solutions */}
        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                ¿Qué necesitas resolver?
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Diferentes problemas. Un equipo que puede ayudarte.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Estas son algunas de las situaciones en las que podemos
                ayudarte. Si tu problema no aparece aquí, igualmente
                podemos conversar.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {solutions.map((solution) => (
                <article
                  key={solution.title}
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold leading-tight text-neutral-950">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {solution.description}
                  </p>

                  <div className="mt-6 rounded-xl bg-neutral-50 p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Cómo podemos ayudarte
                    </div>

                    <p className="mt-2 leading-7 text-neutral-700">
                      {solution.solution}
                    </p>
                  </div>

                  <div className="mt-auto pt-7">
                    {solution.external ? (
                      <a
                        href={solution.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
                      >
                        {solution.action}
                        <span aria-hidden="true" className="ml-2">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <a
                        href={solution.href}
                        className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
                      >
                        {solution.action}
                        <span
                          aria-hidden="true"
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Process */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Cómo trabajamos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                No necesitas tener la respuesta antes de contactarnos.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Nuestro trabajo comienza entendiendo tu situación. A partir
                de ahí definimos contigo qué tiene sentido hacer.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <div className="text-sm font-bold text-blue-600">
                    {step.number}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-neutral-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Store connection */}
        <Section>
          <Container>
            <div className="grid gap-10 rounded-3xl bg-neutral-950 p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  También tenemos tienda
                </div>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿Lo que necesitas es un equipo?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Nuestra tienda ya está funcionando. Puedes comprar equipos,
                  componentes y accesorios directamente en
                  compumercado.shop.
                </p>
              </div>

              <div className="lg:text-right">
                <a
                  href="https://compumercado.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-white px-6 py-3.5 font-semibold text-neutral-950 transition-colors hover:bg-neutral-100"
                >
                  Visitar tienda
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <section className="bg-blue-600 text-white">
          <Container>
            <div className="py-20 text-center lg:py-24">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                ¿No encuentras tu problema aquí?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                No importa. Cuéntanos qué necesitas, qué está fallando o qué
                quieres conseguir. Empezamos desde ahí.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-lg bg-white px-6 py-3.5 font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
                >
                  Hablemos
                </a>

                <a
                  href="https://wa.me/50670154363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
