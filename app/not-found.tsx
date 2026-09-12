import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero">
      <div className="container">
        <p className="text-grey">404</p>
        <h1 className="headline-md mt-3 max-w-[16ch]">Nothing ships here.</h1>
        <p className="mt-6 max-w-[42ch] text-xl leading-snug">
          That page moved or never existed.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Link href="/works">All work →</Link>
          <Link href="/">Home →</Link>
        </div>
      </div>
    </main>
  );
}
