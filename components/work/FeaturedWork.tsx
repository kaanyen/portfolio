import Link from "next/link";
import { featuredProjects } from "@/lib/data";
import { WorkShelf } from "@/components/work/WorkShelf";

export function FeaturedWork() {
  return (
    <section className="section" id="works">
      <div className="container">
        <div className="section-head">
          <h2 className="headline-md">
            Featured
            <br />
            <span className="text-grey">work</span>
          </h2>
          <div className="intro">
            <p>
              Primary projects from the current CV: agent platforms, research,
              and shipped products.
            </p>
          </div>
        </div>
        <WorkShelf projects={featuredProjects()} />
        <Link href="/works" className="see-more-inline">
          See more work
        </Link>
      </div>
    </section>
  );
}
