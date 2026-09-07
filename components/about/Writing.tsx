import { writing } from "@/lib/data";

export function Writing() {
  return (
    <section className="section pt-0" id="writing">
      <div className="container">
        <h2 className="headline-md mb-8">Publication</h2>
        {writing.map((paper) => (
          <a
            key={paper.href}
            href={paper.href}
            target="_blank"
            rel="noreferrer"
            className="block max-w-3xl rounded-[var(--radius)] bg-bg-d p-8"
          >
            <p className="text-sm uppercase tracking-wide text-burgundy">
              {paper.venue}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-none">
              {paper.title}
            </h3>
            <p className="mt-4 text-grey">{paper.authors}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
