// Illustrative product mock for the hero. Names and numbers are sample data.

const rows = [
  {
    step: "Terms",
    title: "Hybrid reward",
    detail: "₦150,000 fixed fee + ₦2,000 per verified order · 7-day window",
  },
  {
    step: "Work",
    title: "2 of 2 deliverables approved",
    detail: "Instagram reel · TikTok video",
  },
  {
    step: "Evidence",
    title: "54 orders verified",
    detail: "1,284 clicks · 61 reported · 7 rejected (duplicate, outside window)",
  },
];

export function CampaignRecord() {
  return (
    <div className="relative w-full max-w-[460px]">
      {/* Back card for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 -bottom-3 top-6 rounded-3xl border border-line bg-card/70"
      />
      <figure
        aria-label="Example campaign record"
        className="relative overflow-hidden rounded-3xl border border-line bg-card shadow-[0_1px_2px_rgb(16_24_40/0.04),0_24px_48px_-24px_rgb(16_24_40/0.25)]"
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-blue-soft font-serif text-lg text-blue">
              T
            </div>
            <div>
              <p className="text-sm font-medium leading-5">Tolu A. · Harmattan Launch</p>
              <p className="font-mono text-xs text-muted">cpay.link/tolu-hl</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink-soft">
            <span className="pulse-dot size-1.5 rounded-full bg-ok" />
            Live
          </span>
        </header>

        <ol className="relative px-5 pt-2">
          {/* Vertical chain line */}
          <span aria-hidden="true" className="absolute bottom-6 left-[29px] top-6 w-px bg-line" />
          {rows.map((row, i) => (
            <li
              key={row.step}
              className="row-in relative flex gap-4 py-3"
              style={{ animationDelay: `${150 + i * 140}ms` }}
            >
              <span className="relative z-10 mt-1 grid size-[18px] shrink-0 place-items-center rounded-full border border-line bg-card">
                <span className="size-1.5 rounded-full bg-ink" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{row.step}</p>
                <p className="text-sm font-medium">{row.title}</p>
                <p className="text-[13px] leading-5 text-muted">{row.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div
          className="row-in mx-5 mb-5 mt-1 rounded-2xl bg-ink p-4 text-white"
          style={{ animationDelay: "620ms" }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">Reward</p>
            <p className="font-mono text-xs text-white/60">150,000 + 54 × 2,000</p>
          </div>
          <p className="mt-1 font-serif text-4xl leading-tight">₦258,000</p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
            <span className="rounded-full bg-white/10 px-2.5 py-1">Approved</span>
            <span className="rounded-full bg-white/10 px-2.5 py-1">Funded</span>
            <span className="rounded-full bg-blue px-2.5 py-1 font-medium">Payout scheduled</span>
          </div>
        </div>
      </figure>
    </div>
  );
}
