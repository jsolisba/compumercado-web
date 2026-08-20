const footerLinks = [
  {
    name: "Tienda",
    href: "https://compumercado.shop/",
    external: true,
  },
  {
    name: "Servicios",
    href: "/services",
  },
  {
    name: "Soluciones",
    href: "/solutions",
  },
  {
    name: "Nosotros",
    href: "/about",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-xl font-bold tracking-tight text-neutral-950">
              Compu<span className="text-blue-600">Mercado</span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
              Tecnología para personas y empresas. Desde equipos y reparación
              hasta infraestructura, nube, ciberseguridad y servicios
              administrados.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-neutral-950">
              Navegación
            </h2>

            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-600 transition-colors hover:text-blue-600"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-blue-600"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-neutral-950">
              ¿Necesitas ayuda?
            </h2>

            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Cuéntanos qué necesitas y te ayudamos a encontrar la solución
              adecuada.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Hablemos →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} CompuMercado. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
