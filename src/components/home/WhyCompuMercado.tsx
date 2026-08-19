import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const advantages = [
  {
    title: "Experiencia real",
    description:
      "Experiencia práctica en cloud, infraestructura, DevOps, bases de datos y ciberseguridad.",
  },
  {
    title: "Un solo aliado tecnológico",
    description:
      "Hardware, software, cloud, seguridad y servicios administrados bajo una misma relación.",
  },
  {
    title: "Enfoque proactivo",
    description:
      "Buscamos prevenir problemas, mejorar la estabilidad y reducir riesgos antes de que impacten tu operación.",
  },
  {
    title: "Soporte humano",
    description:
      "Hablas con especialistas que entienden la tecnología y el contexto de tu negocio.",
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
            No solo implementamos tecnología. Nos hacemos responsables de que
            funcione.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Queremos ser el equipo tecnológico en el que puedas confiar para
            mantener tu operación segura, estable y preparada para crecer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
            >
              <h3 className="text-xl font-bold text-neutral-950">
                {advantage.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
