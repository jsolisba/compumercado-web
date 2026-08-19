import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="bg-slate-950">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 px-8 py-16 text-white shadow-2xl sm:px-12 lg:px-16 lg:py-20">
          
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
              Hablemos de tu proyecto
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              ¿Tu tecnología está lista para el próximo desafío?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Cuéntanos qué necesitas. Analizamos tu situación y te
              proponemos una solución acorde con tu empresa, presupuesto y
              objetivos.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Hablar con un Ingeniero
              </Link>

              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Sin compromiso inicial.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
