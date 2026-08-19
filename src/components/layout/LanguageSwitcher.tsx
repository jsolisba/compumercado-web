import Link from "next/link";

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center rounded-lg border border-neutral-200 bg-white p-1">
      <Link
        href="/"
        aria-label="Cambiar idioma a español"
        className="rounded-md bg-neutral-100 px-2.5 py-1.5 text-xs font-semibold text-neutral-900"
      >
        ES
      </Link>

      <Link
        href="/en"
        aria-label="Change language to English"
        className="rounded-md px-2.5 py-1.5 text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
      >
        EN
      </Link>
    </div>
  );
}
