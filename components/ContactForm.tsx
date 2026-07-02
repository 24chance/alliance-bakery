"use client";

import { useState, useRef, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";


const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORM_KEY ?? "";

const subjects = [
  "Custom cake order",
  "General enquiry",
  "Catering / bulk order",
  "Feedback",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    // Web3Forms expects JSON or FormData; we send JSON for clean control.
    const payload = {
      access_key: WEB3FORMS_KEY,
      // Customise the subject line that arrives in the inbox.
      subject: `Alliance Bakery - ${formData.get("subject") ?? "New message"}`,
      // "from_name" shows who sent it in the email client.
      from_name: (formData.get("name") as string) ?? "Website visitor",
      // Fields Web3Forms forwards verbatim:
      name:    formData.get("name"),
      phone:   formData.get("phone"),
      email:   formData.get("email"),
      enquiry: formData.get("subject"),
      message: formData.get("message"),
      // Botcheck honeypot - leave this false; Web3Forms ignores real humans.
      botcheck: false,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        // Web3Forms returns a message field explaining what went wrong.
        throw new Error(data.message ?? "Submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  // ── Success state ───────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-cream-200 bg-cream-50 p-10 text-center shadow-sm">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-pista-400/25 text-pista-500">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-choco-800">
          Message sent!
        </h3>
        <p className="mt-2 max-w-sm text-choco-500">
          Thanks for reaching out. We&apos;ll get back to you as soon as possible, 
          usually within the day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full px-5 py-2.5 text-sm font-bold text-choco-600 ring-2 ring-choco-300/60 transition-colors hover:bg-choco-700 hover:text-cream-50 hover:ring-choco-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-cream-200 bg-cream-50 p-6 shadow-sm sm:p-8"
    >
      {/* Web3Forms honeypot - hidden from real users, catches bots */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            placeholder="Jane Mukamana"
            className={inputCls}
            disabled={status === "loading"}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+250 7XX XXX XXX"
            className={inputCls}
            disabled={status === "loading"}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputCls}
            disabled={status === "loading"}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What&apos;s this about?" htmlFor="subject">
          <select
            id="subject"
            name="subject"
            className={inputCls}
            defaultValue={subjects[0]}
            disabled={status === "loading"}
          >
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
            className={`${inputCls} resize-none`}
            disabled={status === "loading"}
          />
        </Field>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-berry-400/40 bg-berry-400/10 px-4 py-3 text-sm text-berry-500">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE"
              ? "No access key set yet, add your Web3Forms key to components/ContactForm.tsx to activate sending."
              : errorMsg || "Something went wrong. Please try again or call us directly."}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-choco-700 px-6 py-3.5 text-sm font-bold text-cream-50 shadow-md transition-all hover:-translate-y-0.5 hover:bg-choco-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-choco-400">
        We typically reply within a day. For urgent orders, please call us directly.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border border-cream-300 bg-cream-50 px-4 py-3 text-choco-800 placeholder:text-choco-300 transition-colors focus:border-caramel-500 focus:outline-none focus:ring-2 focus:ring-caramel-400/40 disabled:opacity-60";

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
