import Link from "next/link";
import { navigation } from "@/data/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-950"
          aria-label="CompuMercado - Inicio"
        >
          Compu<span className="text-blue-600">Mercado</span>
        </Link>

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

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <a
            href="https://compumercado.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-blue-300 hover:text-blue-600 sm:inline-flex"
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
      </div>
    </header>
  );
}
