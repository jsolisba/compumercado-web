import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Tecnología que resuelve problemas reales
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              ¿Tienes un problema con tu tecnología?
              <span className="block text-blue-600">
                Nosotros te ayudamos a resolverlo.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
              Desde equipos y reparación hasta infraestructura, cloud,
              seguridad y servicios administrados. Encontramos la solución
              que necesitas, sin importar qué tan técnico seas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">
                Necesito ayuda
              </Button>

              <Button href="/services" variant="secondary">
                Ver soluciones
              </Button>
            </div>

            <p className="mt-6 text-sm text-neutral-500">
              Personas, pequeños negocios y empresas.
            </p>
          </div>

          <div className="relative hidden min-h-[460px] lg:block">
            <div className="absolute inset-0 rounded-3xl bg-neutral-100" />

            <div className="absolute inset-6 rounded-2xl border border-neutral-200 bg-white shadow-xl">
              <div className="flex h-full items-center justify-center p-10">
                <div className="max-w-sm text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15h-11A2.5 2.5 0 0 1 4 12.5v-7Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 21h8M12 15v6"
                      />
                    </svg>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-neutral-950">
                    Una solución para cada necesidad
                  </h2>

                  <p className="mt-3 leading-7 text-neutral-600">
                    Equipos, reparación, infraestructura, nube, seguridad y
                    servicios tecnológicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
