import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm text-sky-400">
          <span className="text-slate-500">$ </span>ping this-page
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">404: Request timed out</h1>
        <p className="mt-4 text-lg text-slate-400">This page doesn&apos;t exist, but I can still help.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-medium text-white"
        >
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
