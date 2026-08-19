import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-neutral-900">
            Tecnología empresarial para empresas que no pueden detenerse.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Infraestructura, nube, ciberseguridad, servicios administrados y
            tecnología empresarial desde un solo lugar.
          </p>
        </section>
      </main>
    </>
  );
}