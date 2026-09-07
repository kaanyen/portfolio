"use client";

import { FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("from") ?? "");
    const body = String(data.get("body") ?? "");
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const text = encodeURIComponent(`${body}\n\n— ${name} <${from}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${text}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="from" placeholder="Email" required />
      <textarea name="body" rows={6} placeholder="What should we ship?" required />
      <button type="submit">Send a note</button>
    </form>
  );
}
