// Foundation viz — 3 variants the user can cycle via Tweaks
const { useEffect, useRef, useState } = React;

// ───── Variant 1: Ore → Molten typographic metaphor ─────
function FoundationOre({ accent }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr',
      alignItems: 'stretch', gap: 0,
      border: '1px solid var(--border)', borderRadius: 4,
      background: 'linear-gradient(180deg, var(--bg-elev), var(--bg))',
      overflow: 'hidden', minHeight: 280,
    }}>
      {/* Stage 1 — raw */}
      <div style={{ padding: '40px 28px', display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between' }}>
        <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-soft)' }}>STAGE 01 · RAW</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 10.5, lineHeight: 1.5, color: 'var(--fg-faint)' }}>
          <div style={{ padding: '6px 10px', border: '1px solid var(--border)', borderRadius: 3 }}>Note 14: Related-party transactions with subsidiary…</div>
          <div style={{ padding: '6px 10px', border: '1px solid var(--border)', borderRadius: 3 }}>ESG report § 4.2 — Scope 3 emissions methodology…</div>
          <div style={{ padding: '6px 10px', border: '1px solid var(--border)', borderRadius: 3, color: 'var(--fg-soft)' }}>Q3 management discussion of inventory build…</div>
          <div style={{ padding: '6px 10px', border: '1px solid var(--border)', borderRadius: 3 }}>SBV circular on capital adequacy…</div>
        </div>
        <div className="p-mono" style={{ fontSize: 10, color: 'var(--fg-faint)' }}>filings · footnotes · disclosures</div>
      </div>

      <ArrowSep />

      {/* Stage 2 — foundation */}
      <div style={{ padding: '40px 28px', display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between', background: 'color-mix(in oklab, var(--amber) 4%, var(--bg-elev))', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, var(--amber-soft), transparent 65%)', pointerEvents: 'none' }} />
        <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--amber)', position: 'relative' }}>STAGE 02 · FOUNDATION</div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, justifyContent: 'center', flex: 1 }}>
          <div style={{
            fontFamily: 'var(--font-serif)', fontSize: 56, lineHeight: 1, color: 'var(--fg)',
            textShadow: '0 0 40px var(--amber-glow)',
          }}>PROMVIS</div>
          <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--amber)' }}>·  REFINED  ·</div>
        </div>
        <div className="p-mono" style={{ fontSize: 10, color: 'var(--fg-mute)', position: 'relative' }}>structured · grounded · queryable</div>
      </div>

      <ArrowSep />

      {/* Stage 3 — product */}
      <div style={{ padding: '40px 28px', display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between' }}>
        <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-soft)' }}>STAGE 03 · PRODUCT</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ProductChip name="Oracle" status="Available" accent />
          <ProductChip name="Forge" status="Coming soon" />
          <ProductChip name="…" status="In the forge" muted />
        </div>
        <div className="p-mono" style={{ fontSize: 10, color: 'var(--fg-faint)' }}>shipped on the same foundation</div>
      </div>
    </div>
  );
}

function ArrowSep() {
  return (
    <div style={{ width: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', position: 'relative' }}>
      <div style={{ width: 1, height: '100%', background: 'linear-gradient(180deg, transparent, var(--amber-soft) 30%, var(--amber) 50%, var(--amber-soft) 70%, transparent)', position: 'absolute' }} />
      <svg width="22" height="22" viewBox="0 0 22 22" style={{ position: 'relative', color: 'var(--amber)' }}>
        <path d="M5 11h12M12 6l5 5-5 5" className="ic" />
      </svg>
    </div>
  );
}

function ProductChip({ name, status, accent, muted }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      padding: '10px 14px', border: '1px solid var(--border)', borderRadius: 3,
      background: accent ? 'color-mix(in oklab, var(--amber) 8%, transparent)' : 'transparent',
      borderColor: accent ? 'color-mix(in oklab, var(--amber) 40%, var(--border))' : 'var(--border)',
      opacity: muted ? 0.5 : 1,
    }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: 22, color: 'var(--fg)' }}>{name}</span>
      <span className="p-mono" style={{ fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent ? 'var(--amber)' : 'var(--fg-soft)' }}>{status}</span>
    </div>
  );
}

// ───── Variant 2: Three columns (raw fragments → tokens → products) ─────
function FoundationColumns() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
      <ColumnCard
        idx="01"
        label="RAW"
        title="Disclosure text"
        sub="What public companies actually say."
        body={(
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              '“…subject to Resolution 42/2017/QH14, the Company recognised…”',
              '“…Scope 3 emissions remain provisional pending supplier survey…”',
              '“…related-party loan extended through Q2 2025 at SOFR+250…”',
            ].map((t, i) => (
              <div key={i} className="p-mono" style={{
                fontSize: 10.5, lineHeight: 1.55, padding: '8px 10px',
                border: '1px solid var(--border)', borderRadius: 2,
                color: 'var(--fg-mute)', background: 'color-mix(in oklab, var(--bg) 50%, var(--bg-elev))',
              }}>{t}</div>
            ))}
          </div>
        )}
      />
      <ColumnCard
        idx="02"
        label="FOUNDATION"
        title="Refined into structure"
        sub="Read by LLMs. Indexed for retrieval."
        accent
        body={(
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {['entities', 'events', 'relations', 'narratives', 'metrics', 'citations'].map(t => (
              <div key={t} className="p-mono" style={{
                fontSize: 10.5, padding: '8px 10px', borderRadius: 2,
                border: '1px solid color-mix(in oklab, var(--amber) 24%, var(--border))',
                color: 'var(--amber)', textAlign: 'center',
                background: 'color-mix(in oklab, var(--amber) 5%, transparent)',
              }}>{t}</div>
            ))}
          </div>
        )}
      />
      <ColumnCard
        idx="03"
        label="PRODUCTS"
        title="Built on the foundation"
        sub="Every product. One layer."
        body={(
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ProductChip name="Oracle" status="Available" accent />
            <ProductChip name="Forge" status="Coming" />
            <ProductChip name="—" status="In the forge" muted />
          </div>
        )}
      />
    </div>
  );
}

function ColumnCard({ idx, label, title, sub, body, accent }) {
  return (
    <div style={{
      border: '1px solid var(--border)', borderRadius: 4,
      padding: '32px 26px', minHeight: 380,
      display: 'flex', flexDirection: 'column', gap: 18,
      background: accent ? 'color-mix(in oklab, var(--amber) 3%, var(--bg-elev))' : 'var(--bg-elev)',
      borderColor: accent ? 'color-mix(in oklab, var(--amber) 22%, var(--border))' : 'var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      {accent && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, var(--amber-soft), transparent 60%)', pointerEvents: 'none' }} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', position: 'relative', gap: 16 }}>
        <span className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: accent ? 'var(--amber)' : 'var(--fg-soft)' }}>{label}</span>
        <span className="p-mono" style={{ fontSize: 28, color: accent ? 'var(--amber)' : 'var(--fg-faint)', fontWeight: 300 }}>{idx}</span>
      </div>
      <div style={{ position: 'relative' }}>
        <div className="p-serif" style={{ fontSize: 28, lineHeight: 1.05, color: 'var(--fg)' }}>{title}</div>
        <div style={{ fontSize: 13, color: 'var(--fg-soft)', marginTop: 8 }}>{sub}</div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>{body}</div>
    </div>
  );
}

// ───── Variant 3: Single line of light through three states ─────
function FoundationLine() {
  return (
    <div style={{
      border: '1px solid var(--border)', borderRadius: 4,
      padding: '64px 48px', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-elev), var(--bg))',
    }}>
      {/* light line */}
      <div style={{ position: 'relative', height: 80, marginBottom: 32 }}>
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, color-mix(in oklab, var(--amber) 20%, transparent), var(--amber) 50%, color-mix(in oklab, var(--amber) 20%, transparent))',
          boxShadow: '0 0 18px var(--amber-glow)',
        }} />
        {/* nodes */}
        {[
          { x: '12%', label: 'raw' },
          { x: '50%', label: 'refined', big: true },
          { x: '88%', label: 'shipped' },
        ].map((n, i) => (
          <div key={i} style={{
            position: 'absolute', top: '50%', left: n.x, transform: 'translate(-50%,-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: n.big ? 18 : 10, height: n.big ? 18 : 10, borderRadius: '50%',
              background: 'var(--amber)',
              boxShadow: n.big ? '0 0 40px var(--amber), 0 0 80px var(--amber-glow)' : '0 0 16px var(--amber-glow)',
            }} />
            <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-soft)', position: 'absolute', top: 28, whiteSpace: 'nowrap' }}>{n.label.toUpperCase()}</div>
          </div>
        ))}
      </div>
      {/* state captions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 56 }}>
        <StateCol
          eyebrow="01 · INPUT"
          title="Public disclosure"
          body="Footnotes, ESG reports, prospectuses, regulatory filings. Text-heavy data the incumbents couldn’t hold."
        />
        <StateCol
          eyebrow="02 · FOUNDATION"
          title="PROMVIS"
          body="Refined by LLMs into a structured, grounded, citable layer. The foundation under every product we ship."
          accent
        />
        <StateCol
          eyebrow="03 · OUTPUT"
          title="Product family"
          body="Oracle answers. Forge ships datasets. Both stand on the same foundation, so insight compounds."
        />
      </div>
    </div>
  );
}

function StateCol({ eyebrow, title, body, accent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: accent ? 'var(--amber)' : 'var(--fg-soft)' }}>{eyebrow}</div>
      <div className="p-serif" style={{ fontSize: 26, lineHeight: 1.1, color: 'var(--fg)' }}>{title}</div>
      <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-mute)' }}>{body}</div>
    </div>
  );
}

// Mobile variant (single column stack of variant 2)
function FoundationMobile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <ColumnCard idx="01" label="RAW" title="Disclosure text" sub="What public companies actually say."
        body={(
          <div className="p-mono" style={{ fontSize: 10.5, lineHeight: 1.55, padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 2, color: 'var(--fg-mute)' }}>
            “…Scope 3 emissions remain provisional pending supplier survey…”
          </div>
        )} />
      <ColumnCard idx="02" label="FOUNDATION" accent title="Refined into structure" sub="Read by LLMs. Indexed for retrieval."
        body={(
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {['entities','events','relations','narratives'].map(t => (
              <div key={t} className="p-mono" style={{ fontSize: 10.5, padding: '8px 10px', borderRadius: 2,
                border: '1px solid color-mix(in oklab, var(--amber) 24%, var(--border))',
                color: 'var(--amber)', textAlign: 'center',
                background: 'color-mix(in oklab, var(--amber) 5%, transparent)' }}>{t}</div>
            ))}
          </div>
        )} />
      <ColumnCard idx="03" label="PRODUCTS" title="Built on the foundation" sub="Every product. One layer."
        body={(
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ProductChip name="Oracle" status="Available" accent />
            <ProductChip name="Forge" status="Coming" />
          </div>
        )} />
    </div>
  );
}

window.FoundationOre = FoundationOre;
window.FoundationColumns = FoundationColumns;
window.FoundationLine = FoundationLine;
window.FoundationMobile = FoundationMobile;
window.ProductChip = ProductChip;
