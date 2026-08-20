import Link from "next/link";
import { navigation } from "@/data/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-950"
          aria-label="CompuMercado - Inicio"
        >
          Compu<span className="text-blue-600">Mercado</span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-blue-600"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />

          <a
            href="https://compumercado.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            Comprar
          </a>

          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile navigation */}
        <details className="relative lg:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-neutral-200 text-neutral-800 transition-colors hover:bg-neutral-50"
            aria-label="Abrir menú"
          >
            <span className="sr-only">Menú</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>

          <div className="absolute right-0 top-14 w-72 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl">
            <nav
              aria-label="Navegación móvil"
              className="flex flex-col"
            >
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-3 border-t border-neutral-200 pt-3">
              <div className="flex items-center justify-between gap-3">
                <LanguageSwitcher />

                <a
                  href="https://compumercado.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800"
                >
                  Comprar
                </a>
              </div>

              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Cotizar
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
