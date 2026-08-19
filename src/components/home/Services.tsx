import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Nuestras soluciones
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Todo lo que tu empresa necesita para operar su tecnología.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Diseñamos, implementamos y administramos soluciones tecnológicas
            adaptadas a la realidad de cada empresa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-full flex-col">
                <h3 className="text-2xl font-bold text-neutral-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700"
                  >
                    Conocer la solución
                    <span
                      aria-hidden="true"
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
