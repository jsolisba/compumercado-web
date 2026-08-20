import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CTAButtons from "@/components/home/CTAButtons";

export default function CTA() {
  return (
    <Section className="bg-neutral-950">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Estamos para ayudarte
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ¿No sabes exactamente qué necesitas?
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Cuéntanos qué está pasando. Nosotros te ayudamos a entender el
            problema y encontrar una solución que tenga sentido para ti.
          </p>

          <CTAButtons />

          <p className="mt-6 text-sm text-neutral-400">
            También puedes visitar nuestra tienda para comprar o reparar tus
            equipos.
          </p>
        </div>
      </Container>
    </Section>
  );
}
