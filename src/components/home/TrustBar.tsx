const capabilities = [
  "Cloud e infraestructura",
  "Ciberseguridad",
  "Servicios administrados",
  "Tecnología empresarial",
];

export default function TrustBar() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="text-sm font-semibold tracking-wide text-neutral-600"
            >
              {capability}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
