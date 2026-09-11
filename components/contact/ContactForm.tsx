"use client";

import { useActionState } from "react";
import { sendNote, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendNote, initialState);

  if (state.status === "sent") {
    return (
      <div className="contact-form" role="status">
        <p className="text-xl leading-snug">{state.message}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={formAction}>
      <input type="text" name="name" placeholder="Name" aria-label="Name" required />
      <input type="email" name="from" placeholder="Email" aria-label="Email" required />
      <textarea
        name="body"
        rows={6}
        placeholder="What should we ship?"
        aria-label="Message"
        required
      />
      <input
        type="text"
        name="company"
        className="form-trap"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />
      <button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send a note"}
      </button>
      {state.message ? (
        <p className="form-status" role="alert">
          {state.message}
          {state.mailto ? (
            <>
              {" "}
              <a href={state.mailto}>Open in mail app →</a>
            </>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}
