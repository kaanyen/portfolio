import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, isStill, projectStills, projects } from "@/lib/data";
import { WorkCover } from "@/components/work/WorkCover";
import { WorkImage } from "@/components/work/WorkImage";

type Props = {
  params: Promise<{ slug: string }>;
};

// "Intern at X since June 2026. I work across…" → "Intern at X since June 2026."
function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const stills = projectStills(project);
  const hero = isStill(project.image) ? project.image : stills[0];
  const gallery = stills.filter((src) => src !== hero);
  const links = [
    project.href
      ? {
          href: project.href,
          label: project.href.includes("pdf")
            ? "Read the paper ↗"
            : "Visit the live site ↗",
        }
      : null,
    project.repo ? { href: project.repo, label: "View the code ↗" } : null,
  ].filter((link): link is { href: string; label: string } => link !== null);
  const extraTools = project.stack.length - 4;

  return (
    <main className="page-hero">
      <div className="container">
        <p className="text-grey">
          {project.year} · {project.category}
        </p>
        <h1 className="headline-md mt-3 max-w-[16ch]">{project.title}</h1>
        <p className="mt-6 max-w-[42ch] text-xl leading-snug">{project.summary}</p>
        {project.privateNote ? (
          <p className="mt-3 text-sm text-grey">{project.privateNote}</p>
        ) : null}

        {project.metric ? (
          <div className="case-metric">
            <span className="case-metric-value">{project.metric.value}</span>
            <span className="case-metric-label">{project.metric.label}</span>
          </div>
        ) : null}

        {/* The answer first: role, result and tools before the long read. */}
        <dl className="case-glance">
          {project.role ? (
            <div>
              <dt>My role</dt>
              <dd>{firstSentence(project.role)}</dd>
            </div>
          ) : null}
          <div>
            <dt>Result</dt>
            <dd>{firstSentence(project.outcome)}</dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>
              {project.stack.slice(0, 4).join(", ")}
              {extraTools > 0 ? ` +${extraTools} more` : ""}
            </dd>
          </div>
        </dl>

        {links.length ? (
          <div className="case-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="case-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <div className="work-media mt-10">
          {hero ? (
            <WorkImage
              src={hero}
              sizes="(min-width: 1280px) 1240px, 100vw"
              eager
            />
          ) : (
            <WorkCover project={project} />
          )}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-[52ch]">
            <section className="case-section">
              <h2 className="case-label">Problem</h2>
              <p className="text-lg leading-relaxed">{project.problem}</p>
            </section>
            {project.role ? (
              <section className="case-section">
                <h2 className="case-label">My role</h2>
                <p className="text-lg leading-relaxed">{project.role}</p>
              </section>
            ) : null}
            <section className="case-section">
              <h2 className="case-label">What I built</h2>
              <ul className="list-disc space-y-2 pl-5">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="case-section">
              <h2 className="case-label">Outcome</h2>
              <p className="text-lg leading-relaxed">{project.outcome}</p>
            </section>
          </div>
          <aside>
            <p className="text-youth mb-3 uppercase">Stack</p>
            <div className="stack-list">
              {project.stack.map((item) => (
                <Link
                  key={item}
                  href={`/works?skill=${encodeURIComponent(item)}`}
                  className="stack-link"
                  title={`Projects that use ${item}`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/works">All work →</Link>
            </div>
          </aside>
        </div>

        {gallery.length ? (
          <div className="gallery mt-12">
            {gallery.map((src) => (
              <WorkImage
                key={src}
                src={src}
                sizes="(min-width: 800px) 50vw, 100vw"
                captioned
              />
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}
