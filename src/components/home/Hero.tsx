import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <Container>
        <div className="max-w-4xl py-20 lg:py-28">

          <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Tecnología empresarial
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            Tecnología empresarial para empresas que no pueden detenerse.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            Diseñamos, implementamos y administramos infraestructura,
            nube, ciberseguridad y plataformas empresariales para mantener
            tu negocio seguro, disponible y preparado para crecer.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">
              Hablar con un Ingeniero
            </Button>

            <Button href="/services" variant="secondary">
              Ver servicios
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}
