"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const subjects = ["Custom cake order", "General enquiry", "Catering / bulk order", "Feedback"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: layout only for now — no real submission yet.
    // We'll wire this up to an email/form service in the next pass.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-cream-200 bg-cream-50 p-10 text-center shadow-sm">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-pista-400/25 text-pista-500">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-choco-800">
          Thank you! 🎉
        </h3>
        <p className="mt-2 max-w-sm text-choco-500">
          Your message is ready to go. We'll be in touch soon — in the meantime,
          why not browse our menu?
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full px-5 py-2.5 text-sm font-bold text-choco-600 ring-2 ring-choco-300/60 transition-colors hover:bg-choco-700 hover:text-cream-50 hover:ring-choco-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-cream-200 bg-cream-50 p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required placeholder="Jane Mukamana" className={input} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+250 7XX XXX XXX" className={input} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={input} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What's this about?" htmlFor="subject">
          <select id="subject" name="subject" className={input} defaultValue={subjects[0]}>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Your message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your order, event date, flavours, guest count…"
            className={`${input} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-choco-700 px-6 py-3.5 text-sm font-bold text-cream-50 shadow-md transition-all hover:-translate-y-0.5 hover:bg-choco-800 hover:shadow-lg sm:w-auto"
      >
        <Send className="h-4 w-4" /> Send message
      </button>
      <p className="mt-3 text-xs text-choco-400">
        We typically reply within a day. For urgent orders, please call us directly.
      </p>
    </form>
  );
}

const input =
  "w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-choco-800 placeholder:text-choco-300 transition-colors focus:border-caramel-500 focus:outline-none focus:ring-2 focus:ring-caramel-400/40";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-choco-700">{label}</span>
      {children}
    </label>
  );
}
