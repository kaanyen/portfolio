import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import { site } from "@/lib/site";
import { KingMark } from "@/components/icons/KingMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="mb-4 flex items-center gap-2 text-youth text-xl">
            <KingMark className="king-mark-lg" />
            {site.name}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-youth mb-3 uppercase">Practice</p>
          <ul className="space-y-2 text-sm">
            <li>Agent platforms</li>
            <li>Full-stack products</li>
            <li>Computer vision &amp; NLP</li>
            <li>Secure architecture</li>
          </ul>
        </div>
        <div>
          <p className="text-youth mb-3 uppercase">Featured</p>
          <ul className="space-y-2 text-sm">
            {featuredProjects()
              .slice(0, 5)
              .map((project) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className="text-youth mb-3 uppercase">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.cv} target="_blank" rel="noreferrer">
                CV (PDF)
              </a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>©{new Date().getFullYear()} {site.fullName}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
