import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const reasons = [
  {
    title: "Hablamos tu idioma",
    description:
      "No necesitas ser experto en tecnología. Te explicamos qué está pasando, qué opciones tienes y cuál tiene más sentido para ti.",
  },
  {
    title: "Resolvemos, no complicamos",
    description:
      "Buscamos soluciones prácticas que funcionen en el mundo real, desde un equipo que necesita reparación hasta infraestructura empresarial.",
  },
  {
    title: "Experiencia que se aplica",
    description:
      "Trabajamos con infraestructura, cloud, servidores, redes, seguridad y plataformas empresariales. Esa experiencia la ponemos al servicio de cada proyecto.",
  },
  {
    title: "Un aliado cuando lo necesitas",
    description:
      "Puedes acudir a nosotros para comprar o reparar un equipo, resolver un problema o planificar la tecnología que tu empresa necesita.",
  },
];

export default function WhyCompuMercado() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            ¿Por qué CompuMercado?
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Tecnología entendible, soluciones que funcionan.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            No importa si sabes mucho o poco de tecnología. Queremos que
            entiendas el problema y tengas claro cómo podemos ayudarte.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-neutral-950">
                {reason.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
