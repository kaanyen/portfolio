"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "sent" | "error" | "unconfigured";
  message: string;
  // Pre-filled mailto link, offered when the note couldn't be sent from here.
  mailto?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendNote(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim().slice(0, 200);
  const from = String(formData.get("from") ?? "").trim().slice(0, 320);
  const body = String(formData.get("body") ?? "").trim().slice(0, 5000);

  // Hidden field real visitors never fill in. Pretend success so bots move on.
  if (formData.get("company")) {
    return { status: "sent", message: "Thanks, your note is on its way." };
  }

  if (!name || !EMAIL.test(from) || !body) {
    return {
      status: "error",
      message: "Please add your name, a valid email address and a message.",
    };
  }

  const subject = `Portfolio note from ${name}`;
  const text = `${body}\n\n— ${name} <${from}>`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return {
      status: "unconfigured",
      message: "The form can't send from here yet. Your note is ready in your mail app instead.",
      mailto,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // onboarding@resend.dev works without a verified domain, but only
        // delivers to the Resend account's own address.
        from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? site.email],
        reply_to: from,
        subject,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch (error) {
    console.error("Contact form send failed", error);
    return {
      status: "error",
      message: "That didn't send. You can still reach me through your mail app.",
      mailto,
    };
  }

  return { status: "sent", message: "Thanks, your note is on its way. I'll reply by email." };
}
