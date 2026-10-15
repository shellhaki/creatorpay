import { CampaignRecord } from "./components/campaign-record";
import { WaitlistForm } from "./components/waitlist-form";

const problems = [
  {
    title: "Results are unclear",
    body: "A post goes live. The views come in. But which registrations, leads and sales did it actually drive?",
  },
  {
    title: "Work is fragmented",
    body: "Briefs in email, drafts in WhatsApp, numbers in screenshots, payments in a spreadsheet nobody trusts.",
  },
  {
    title: "Pay is hard to verify",
    body: "Brands can't justify spend. Creators can't prove value. Nobody shares one record of what was agreed.",
  },
];

const steps = [
  { name: "Define", body: "Objectives, deliverables, attribution and reward rules, set before anyone joins." },
  { name: "Manage", body: "Invite creators you already work with. Share briefs. Collect submissions." },
  { name: "Track", body: "A unique link per creator. Clicks and supported conversion events recorded." },
  { name: "Verify", body: "Duplicates, out-of-window and unsupported events are checked against the rules." },
  { name: "Reward", body: "Fixed fees and performance rewards calculated separately, with the working shown." },
  { name: "Settle", body: "Approvals, funding and payout status, visible to both sides." },
  { name: "Learn", body: "Compare creators on the same metrics and plan the next campaign better." },
];

const audiences = [
  {
    who: "Businesses",
    line: "Know what your creators deliver, not just what they post.",
    points: [
      "Set campaign rules before creators participate",
      "Bring the creators you already work with",
      "Measure outcomes where real evidence exists",
      "Stop reconciling screenshots and exports",
    ],
  },
  {
    who: "Creators",
    line: "See the deal, the results and the money in one place.",
    points: [
      "Read deliverables, rules and pay before you accept",
      "Get your own tracking link and results",
      "See exactly how each reward was calculated",
      "Track pending, approved and paid amounts",
    ],
    note: "Always free for creators.",
  },
  {
    who: "Agencies",
    line: "Run every client campaign through one workflow.",
    points: [
      "Separate workspaces for each client",
      "Comparable reports across campaigns",
      "Briefs, review and reporting in one place",
      "Less time chasing proof in chat threads",
    ],
  },
];

const faqs = [
  {
    q: "Do my customers need a CreatorPay account?",
    a: "No. A consumer clicks the creator's link and lands on your page or store. Nobody outside the campaign signs up for anything.",
  },
  {
    q: "Can I bring creators I already work with?",
    a: "Yes, and we expect most businesses to. CreatorPay is built for running your existing creator relationships properly, not for forcing you into a marketplace.",
  },
  {
    q: "Can a campaign combine a fixed fee and a sales bonus?",
    a: "Yes. Fixed deliverable fees and performance rewards are separate components, each with its own eligibility and approval rules.",
  },
  {
    q: "How do you know a sale came from a creator?",
    a: "Through evidence the business provides: an integration, an API event, a discount code, or another accepted method. A click alone does not prove a purchase, and the record says which outcomes are verified.",
  },
  {
    q: "Can rules change after a campaign launches?",
    a: "Changes are versioned and disclosed. Accepted terms and rewards already earned can't be silently rewritten.",
  },
  {
    q: "Is this only for Nigeria?",
    a: "Nigeria is our first market. We'll expand once the product works well for businesses and creators here.",
  },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <rect width="24" height="24" rx="7" fill="currentColor" />
        <path d="M7 12.5l3 3 7-7" fill="none" stroke="#4263EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">CreatorPay</span>
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.12em] text-blue">{children}</p>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="text-ink" aria-label="CreatorPay home">
            <Wordmark />
          </a>
          <div className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#who" className="hover:text-ink">Who it&apos;s for</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </div>
          <a
            href="#join"
            className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
          >
            Get early access
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="ledger-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-28">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink-soft">
                <span className="size-1.5 rounded-full bg-blue" />
                Early access · Launching in Nigeria
              </p>
              <h1 className="mt-6 font-serif text-[3.25rem] leading-[0.98] tracking-[-0.02em] text-balance sm:text-7xl lg:text-[5.5rem]">
                Make creator marketing <em className="text-blue">accountable.</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft text-pretty">
                CreatorPay connects the deal you agreed with a creator to the work they delivered, the
                results you can verify, and the reward they earned. One shared record for both sides.
              </p>
              <div id="join" className="mt-9 scroll-mt-28">
                <WaitlistForm />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <CampaignRecord />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-line bg-card">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-balance sm:text-5xl">
              Creators post. Then everyone argues about what happened.
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {problems.map((p, i) => (
                <div key={p.title} className="bg-card p-7">
                  <p className="font-mono text-sm text-muted">0{i + 1}</p>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 leading-7 text-ink-soft">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="how" className="scroll-mt-16 bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#91a7ff]">How it works</p>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-balance sm:text-5xl">
                  One connected workflow, from agreement to payout.
                </h2>
              </div>
              <p className="max-w-sm leading-7 text-white/60">
                Every step feeds the next, so the reward at the end can always be traced back to the
                terms at the start.
              </p>
            </div>

            <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.name} className="group bg-ink p-6 transition-colors hover:bg-[#162036]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="text-white/25 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="mt-8 font-serif text-3xl">{s.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{s.body}</p>
                </li>
              ))}
              <li className="flex flex-col justify-end bg-blue p-6">
                <p className="text-sm leading-6 text-white/80">The result</p>
                <p className="mt-1 font-serif text-2xl leading-tight">
                  An auditable chain from terms to payout.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Audiences */}
        <section id="who" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <SectionLabel>Who it&apos;s for</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-balance sm:text-5xl">
              Built for the people on both sides of the deal.
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {audiences.map((a) => (
                <article
                  key={a.who}
                  className="flex flex-col rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgb(16_24_40/0.04)]"
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{a.who}</h3>
                  <p className="mt-4 font-serif text-2xl leading-snug">{a.line}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6 text-[15px] text-ink-soft">
                    {a.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-blue" aria-hidden="true">
                          <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {a.note && (
                    <p className="mt-auto pt-6 text-sm font-medium text-blue">{a.note}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 border-t border-line bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.01em] sm:text-5xl">
                Straight answers.
              </h2>
              <p className="mt-4 max-w-sm leading-7 text-ink-soft">
                We&apos;d rather tell you what CreatorPay won&apos;t do than promise what it can&apos;t.
              </p>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[17px] font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl leading-7 text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-6 sm:px-6">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-white sm:px-12 md:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-blue/30 blur-3xl"
            />
            <div className="relative grid items-end gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.01em] text-balance sm:text-6xl">
                  Run your next creator campaign on the record.
                </h2>
                <p className="mt-5 max-w-md leading-7 text-white/60">
                  We&apos;re working closely with a small group of design partners first. Join the list
                  and we&apos;ll be in touch.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <WaitlistForm tone="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:px-6">
        <Wordmark className="text-ink" />
        <p>© 2026 CreatorPay. Waitlist is a demo.</p>
      </footer>
    </>
  );
}
