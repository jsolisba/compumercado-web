import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const waysToHelp = [
  {
    title: "Tienda y reparación",
    description:
      "Si necesitas un equipo, un componente, un accesorio o reparar tu computadora, puedes encontrarlo directamente en nuestra tienda.",
    href: "https://compumercado.shop/",
    link: "Visitar tienda",
    external: true,
  },
  {
    title: "Servicios tecnológicos",
    description:
      "Si el reto va más allá de un equipo, te ayudamos con infraestructura, cloud, ciberseguridad, soporte y soluciones para tu organización.",
    href: "/services",
    link: "Conocer servicios",
    external: false,
  },
];

const principles = [
  {
    title: "Escuchamos primero",
    description:
      "Antes de recomendar una tecnología queremos entender qué necesitas, qué problema tienes y qué quieres conseguir.",
  },
  {
    title: "Hablamos claro",
    description:
      "La tecnología no debería sentirse complicada. Explicamos las opciones de forma que puedas tomar una decisión con confianza.",
  },
  {
    title: "Resolvemos lo necesario",
    description:
      "Buscamos soluciones que tengan sentido para tu situación, sin agregar complejidad simplemente porque existe.",
  },
  {
    title: "Seguimos contigo",
    description:
      "Nuestro trabajo no termina cuando una solución queda instalada. Queremos que realmente funcione para ti.",
  },
];

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Nos cuentas qué necesitas, incluso si no sabes exactamente qué solución buscar.",
  },
  {
    number: "02",
    title: "Entendemos",
    description:
      "Analizamos el problema, el contexto y lo que realmente quieres conseguir.",
  },
  {
    number: "03",
    title: "Proponemos",
    description:
      "Te presentamos una alternativa clara y adecuada a tu necesidad.",
  },
  {
    number: "04",
    title: "Acompañamos",
    description:
      "Te ayudamos a ponerla en marcha y seguimos disponibles cuando nos necesites.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-950 text-white">
          <Container>
            <div className="max-w-4xl py-20 lg:py-28">
              <div className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Sobre CompuMercado
              </div>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Tecnología que entiende a las personas.
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Creemos que la tecnología debe ayudarte a hacer las cosas
                mejor, no hacerlas más complicadas. Por eso buscamos entender
                primero lo que necesitas y después encontrar la solución que
                realmente tenga sentido.
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Qué hacemos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Una sola empresa para diferentes necesidades tecnológicas.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                A veces necesitas una computadora. Otras veces necesitas que
                toda la tecnología de tu empresa funcione mejor. En ambos
                casos, queremos ser el lugar al que puedas acudir.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {waysToHelp.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    {item.description}
                  </p>

                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
                    >
                      {item.link}
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="mt-7 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
                    >
                      {item.link}
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Cómo trabajamos
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                Primero entendemos. Después resolvemos.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                No necesitas conocer todos los términos técnicos para trabajar
                con nosotros. Tú nos cuentas qué quieres lograr o qué está
                fallando y nosotros nos encargamos de traducirlo en una
                solución.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-neutral-200 bg-white p-7"
                >
                  <div className="text-sm font-bold text-blue-600">
                    {step.number}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-neutral-950">
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

        <Section>
          <Container>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Lo que nos importa
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
                La tecnología importa. La confianza también.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-8"
                >
                  <h3 className="text-xl font-bold text-neutral-950">
                    {principle.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <section className="bg-blue-600 text-white">
          <Container>
            <div className="py-20 text-center lg:py-24">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                ¿Tienes algo que resolver?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                No necesitas tener la solución definida. Cuéntanos qué está
                pasando y conversemos sobre cómo podemos ayudarte.
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
