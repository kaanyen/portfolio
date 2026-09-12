import { testimonials } from "@/lib/data";

// Renders nothing until there is at least one real quote in lib/data.ts.
export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <h2 className="headline-md mb-10">
          What people
          <br />
          <span className="text-grey">say</span>
        </h2>
        <div className="quotes">
          {testimonials.map((item) => (
            <figure key={item.name} className="quote">
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <span className="quote-name">{item.name}</span>
                <span className="quote-role">
                  {item.role}, {item.org}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
