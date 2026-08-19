import Link from "next/link";

export default function EnglishComingSoon() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          CompuMercado
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          English version coming soon.
        </h1>

        <p className="mt-5 text-neutral-400">
          We are preparing the English version of our website.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Volver al sitio
        </Link>
      </div>
    </main>
  );
}
