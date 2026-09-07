import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="page-hero">
      <div className="container grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="headline-md">
            Start a
            <br />
            conversation.
          </h1>
          <p className="mt-6 max-w-[30ch] text-xl leading-snug">
            For roles or collaborations involving agent platforms, payments,
            clinical systems, or research engineering, write directly. I am
            based in Accra.
          </p>
          <ul className="mt-8 space-y-2">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/kwekuanyen
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
