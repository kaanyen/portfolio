import Link from "next/link";
import { writing } from "@/lib/data";
import { CopyCitation } from "@/components/about/CopyCitation";

export function Writing() {
  return (
    <section className="section pt-0" id="writing">
      <div className="container">
        <h2 className="headline-md mb-8">Publication</h2>
        {writing.map((paper) => {
          // Bold my name in the author list.
          const [before, after] = paper.authors.split(paper.you);
          return (
            <article key={paper.href} className="pub">
              <div className="pub-main">
                <p className="pub-venue">{paper.venue}</p>
                <h3 className="pub-title">{paper.title}</h3>
                <p className="pub-authors">
                  {before}
                  <strong>{paper.you}</strong>
                  {after}
                </p>
                <div className="pub-actions">
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-button pub-button-primary"
                  >
                    Read the paper ↗
                  </a>
                  <CopyCitation bibtex={paper.bibtex} />
                  {paper.caseStudy ? (
                    <Link href={`/work/${paper.caseStudy}`} className="pub-link">
                      How we ran it →
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="pub-finding">
                <span className="pub-finding-value">{paper.finding.value}</span>
                <span className="pub-finding-label">{paper.finding.label}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
