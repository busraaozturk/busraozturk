/**
 * Purely decorative "developer" composition for the hero's right rail — a dotted
 * grid, a mock browser window, a fake code snippet, and a few accent marks.
 * Carries no content; safe to simplify or drop later.
 */
export function HeroGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[460px] w-full ${className}`} aria-hidden="true">
      <div
        className="absolute top-[8%] left-[6%] h-20 w-[120px] opacity-70"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="absolute top-[14%] right-[4%] font-heading text-xs tracking-[0.1em] text-body">01</div>
      <div className="absolute top-[26%] right-[14%] font-mono text-[22px] tracking-[2px] text-primary">
        {"</>"}
      </div>
      <div className="absolute top-[22%] right-[2%] text-base leading-[1.4] tracking-[2px] text-body">⋮</div>

      <div className="absolute top-[22%] left-[18%] h-[48%] w-[56%] border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-3 py-2 text-xs text-body">
          <span>●●●</span>
          <span>−</span>
        </div>
      </div>

      <div className="absolute top-[40%] left-[34%] w-[52%] border border-border bg-bg px-[18px] py-4 font-mono text-[13px] leading-[1.6] text-title">
        const ui = () =&gt; {"{"}
        <br />
        &nbsp;&nbsp;return (
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;interface /&gt;
        <br />
        &nbsp;&nbsp;);
        <br />
        {"}"};
      </div>

      <div className="absolute top-[44%] left-[4%] font-serif text-3xl text-primary">{"{"}</div>
      <div className="absolute top-[56%] left-[4%] font-serif text-3xl text-primary">{"}"}</div>
      <div className="absolute top-[48%] left-[9%] w-[24%] border-t border-dotted border-border" />
      <div className="absolute top-[60%] left-[9%] w-[24%] border-t border-dotted border-border" />
      <div className="absolute top-[68%] left-[41%] size-2 bg-primary" />
      <div className="absolute top-[60%] left-[74%] size-2 bg-primary" />
      <div className="absolute top-[76%] right-[6%] size-2.5 border border-border" />
      <div className="absolute top-[78%] left-[24%] text-xs tracking-[2px] text-body">●●●</div>
    </div>
  );
}
