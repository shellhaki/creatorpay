"use client";

import { useId, useState, useSyncExternalStore } from "react";

// Demo only: nothing is sent anywhere. Signups live in this browser's localStorage.
const STORAGE_KEY = "creatorpay-waitlist-demo";
const CHANGE_EVENT = "creatorpay-waitlist-change";
const BASE_POSITION = 214;

type Role = "business" | "agency" | "creator";

const ROLES: { value: Role; label: string }[] = [
  { value: "business", label: "Business" },
  { value: "agency", label: "Agency" },
  { value: "creator", label: "Creator" },
];

type Entry = { email: string; role: Role; position: number };

function readRaw(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): Entry[] {
  try {
    return raw ? (JSON.parse(raw) as Entry[]) : [];
  } catch {
    return [];
  }
}

function readEntries(): Entry[] {
  return parse(readRaw());
}

// Both forms on the page subscribe, so signing up in one updates the other.
function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function writeEntries(entries: Entry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Storage blocked (private mode etc). Nothing to persist.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function WaitlistForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("business");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  const entry = parse(raw).at(-1) ?? null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);
    // Fake network latency so the demo feels real.
    await new Promise((resolve) => setTimeout(resolve, 900));

    const entries = readEntries();
    const existing = entries.find((e) => e.email === value);
    const next = existing ?? {
      email: value,
      role,
      position: BASE_POSITION + entries.length + 1,
    };
    // Re-joining moves the existing entry to the end so it becomes the shown one.
    writeEntries([...entries.filter((e) => e.email !== value), next]);
    setSubmitting(false);
  }

  function reset() {
    writeEntries([]);
    setEmail("");
  }

  async function copyLink() {
    const url = `${window.location.origin}/?ref=${entry?.position ?? ""}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const dark = tone === "dark";

  if (entry) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`w-full max-w-md rounded-2xl border p-5 ${
          dark ? "border-white/15 bg-white/5" : "border-line bg-card shadow-[0_1px_2px_rgb(16_24_40/0.04),0_8px_24px_-12px_rgb(16_24_40/0.12)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <p className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>
            You&apos;re on the list
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ok/10 px-2.5 py-1 text-xs font-medium text-ok">
            <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
              <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Confirmed
          </span>
        </div>
        <p className={`mt-3 font-serif text-5xl leading-none ${dark ? "text-white" : "text-ink"}`}>
          #{entry.position}
        </p>
        <p className={`mt-3 text-sm leading-6 ${dark ? "text-white/70" : "text-ink-soft"}`}>
          We&apos;ll write to <span className="font-medium">{entry.email}</span> when{" "}
          {entry.role === "creator" ? "a business invites you to a campaign" : "design-partner spots open"}.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyLink}
            className={`h-9 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${
              dark ? "bg-white text-ink hover:bg-white/90" : "bg-ink text-white hover:bg-ink-soft"
            }`}
          >
            {copied ? "Link copied" : "Copy referral link"}
          </button>
          <button
            type="button"
            onClick={reset}
            className={`text-sm underline-offset-4 hover:underline ${dark ? "text-white/60" : "text-muted"}`}
          >
            Reset demo
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
      <fieldset className="mb-3">
        <legend className="sr-only">I am joining as</legend>
        <div
          className={`inline-flex rounded-full p-1 text-sm ${
            dark ? "bg-white/10" : "bg-ink/[0.05]"
          }`}
        >
          {ROLES.map((r) => {
            const active = role === r.value;
            return (
              <label
                key={r.value}
                className={`cursor-pointer rounded-full px-3.5 py-1.5 font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue ${
                  active
                    ? dark
                      ? "bg-white text-ink"
                      : "bg-card text-ink shadow-[0_1px_2px_rgb(16_24_40/0.08)]"
                    : dark
                      ? "text-white/70 hover:text-white"
                      : "text-muted hover:text-ink"
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-role`}
                  value={r.value}
                  checked={active}
                  onChange={() => setRole(r.value)}
                  className="sr-only"
                />
                {r.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div
        className={`flex items-center gap-1.5 rounded-full border p-1.5 transition-shadow focus-within:ring-4 ${
          dark
            ? "border-white/15 bg-white/5 focus-within:ring-white/10"
            : "border-line bg-card shadow-[0_1px_2px_rgb(16_24_40/0.04)] focus-within:border-blue focus-within:ring-blue/15"
        } ${error ? "border-red-500" : ""}`}
      >
        <label htmlFor={`${id}-email`} className="sr-only">
          Work email
        </label>
        <input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder={role === "creator" ? "you@email.com" : "you@company.com"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`h-10 min-w-0 flex-1 bg-transparent px-3.5 text-[15px] outline-none ${
            dark ? "text-white placeholder:text-white/40" : "text-ink placeholder:text-muted/70"
          }`}
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-blue px-5 text-sm font-medium text-white transition-[background-color,transform] hover:bg-[#3451d1] active:scale-[0.98] disabled:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
        >
          {submitting ? (
            <>
              <span className="size-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
              Joining
            </>
          ) : (
            "Join waitlist"
          )}
        </button>
      </div>
      <p
        id={`${id}-error`}
        aria-live="polite"
        className={`mt-2 min-h-5 px-4 text-sm ${error ? "text-red-500" : dark ? "text-white/50" : "text-muted"}`}
      >
        {error || "Free for creators. No card required."}
      </p>
    </form>
  );
}
