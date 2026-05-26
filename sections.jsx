// PROMVIS landing — sections.

// ─────────────────────────────────────────────────────────────
// Brand spark (used in nav + footer + foundation)
// ─────────────────────────────────────────────────────────────
function BrandSpark({ size = 14, animated = true }) {
  return (
    <span
      style={{
        display: 'inline-block', width: size, height: size, position: 'relative',
        animation: animated ? 'ember-flicker 3.4s ease-in-out infinite' : 'none',
      }}
    >
      <span style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, #fff8e6 0%, #ffce6f 25%, var(--amber) 55%, color-mix(in oklab, var(--amber) 30%, transparent) 80%, transparent 100%)',
        filter: 'drop-shadow(0 0 6px var(--amber-glow))',
      }} />
      <span style={{
        position: 'absolute', inset: '-60%', borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, var(--amber-glow), transparent 60%)',
        filter: 'blur(4px)', opacity: 0.7,
      }} />
    </span>
  );
}

function Wordmark({ size = 13 }) {
  return (
    <div className="wordmark" style={{ fontSize: size }}>
      <BrandSpark size={size + 1} />
      <span>PROMVIS</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────
function Nav({ mobile }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; }
  }, [isOpen]);

  if (mobile) {
    return (
      <>
        <div className="nav" style={{ padding: '18px 24px', position: 'relative', zIndex: 100 }}>
          <Wordmark size={12} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href={window.ORACLE_URL || 'https://oracle.promvis.io'}
               className="p-mono"
               style={{ fontSize: 10.5, letterSpacing: '0.12em', color: 'var(--fg-mute)', textDecoration: 'none', display: isOpen ? 'none' : 'block' }}>
              SIGN IN ↗
            </a>
            <button aria-label="menu" onClick={() => setIsOpen(!isOpen)} style={{
              background: 'transparent', border: '1px solid var(--border-strong)',
              width: 36, height: 36, borderRadius: 999, color: 'var(--fg)', display: 'grid', placeItems: 'center',
            }}>
              {isOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16"><path className="ic" d="M4 4l8 8M4 12L12 4" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16"><path className="ic" d="M2 5h12M2 11h12" /></svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div style={{
            position: 'fixed', top: 73, left: 0, right: 0, bottom: 0,
            background: 'var(--bg)', zIndex: 99,
            padding: '40px 32px',
            display: 'flex', flexDirection: 'column', gap: 32,
            borderTop: '1px solid var(--border)',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 24, fontFamily: 'var(--font-serif)' }}>
              <a href="#manifesto" onClick={() => setIsOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none' }}>Manifesto</a>
              <a href="#foundation" onClick={() => setIsOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none' }}>The Foundation</a>
              <a href="#oracle" onClick={() => setIsOpen(false)} style={{ color: 'var(--amber)', textDecoration: 'none' }}>Oracle</a>
              <a href="#forge" onClick={() => setIsOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none' }}>Forge</a>
              <a href="#trusted" onClick={() => setIsOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none' }}>Trusted by</a>
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  window.openAccess && window.openAccess('oracle');
                }}
                className="btn btn-ghost"
                style={{ justifyContent: 'center', padding: '16px', fontSize: 16, border: '1px solid var(--amber)', color: 'var(--amber)' }}
              >
                Talk to the Oracle <span className="arr">→</span>
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <nav className="nav">
      <Wordmark />
      <div className="nav-links">
        <a href="#manifesto">Manifesto</a>
        <a href="#foundation">The Foundation</a>
        <a href="#oracle" className="amber">Oracle</a>
        <a href="#forge">Forge</a>
        <a href="#trusted">Trusted by</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <a
          href={window.ORACLE_URL || 'https://oracle.promvis.io'}
          className="p-mono"
          style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--fg-mute)', textDecoration: 'none' }}
        >
          SIGN IN ↗
        </a>
        <button
          type="button"
          onClick={() => window.openAccess && window.openAccess('oracle')}
          className="btn btn-ghost"
          style={{ padding: '10px 18px', fontSize: 13 }}
        >
          Talk to the Oracle <span className="arr">→</span>
        </button>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero — type-led massive serif, low horizon sweep, ember spark
// ─────────────────────────────────────────────────────────────
function Hero({ motif, mobile }) {
  // motif: "horizon" | "ember-rain" | "type-only"
  return (
    <section className="section" style={{
      paddingTop: mobile ? 56 : 72,
      paddingBottom: mobile ? 80 : 120,
      minHeight: mobile ? 'auto' : '92vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Horizon sweep */}
      {motif !== 'type-only' && (
        <div aria-hidden style={{
          position: 'absolute', left: 0, right: 0, bottom: -10,
          height: mobile ? 280 : 420, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 100% at 50% 100%, color-mix(in oklab, var(--amber) 32%, transparent) 0%, color-mix(in oklab, var(--amber) 8%, transparent) 38%, transparent 70%)',
          animation: 'horizon-pulse 7s ease-in-out infinite',
        }} />
      )}
      {motif !== 'type-only' && (
        <div aria-hidden style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--amber) 50%, transparent)',
          opacity: 0.6,
        }} />
      )}

      {/* Embers */}
      {motif === 'ember-rain' && <EmberField mobile={mobile} />}

      {/* Single calm spark (default motif) */}
      {motif === 'horizon' && !mobile && (
        <div aria-hidden style={{
          position: 'absolute', right: '14%', top: '32%',
          width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)',
          boxShadow: '0 0 20px var(--amber), 0 0 40px var(--amber-glow)',
          animation: 'ember-flicker 4s ease-in-out infinite',
        }} />
      )}

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: mobile ? '100%' : 1180, margin: '0 auto', width: '100%' }}>
        <div className="p-eyebrow" style={{ marginBottom: mobile ? 28 : 40 }}>
          <span className="dot" />AI-NATIVE FINANCIAL INTELLIGENCE · VIETNAM
        </div>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: mobile ? 'clamp(40px, 10vw, 56px)' : 'clamp(64px, 7.2vw, 108px)',
          lineHeight: mobile ? 1.02 : 0.96,
          letterSpacing: '-0.022em',
          margin: 0, fontWeight: 400,
          color: 'var(--fg)', textWrap: 'balance',
          maxWidth: mobile ? '100%' : '15ch',
        }}>
          Read what databases <span className="p-amber" style={{ fontStyle: 'italic' }}>couldn’t.</span>
          <br />
          <span style={{ color: 'var(--fg-mute)' }}>Built for Vietnam’s markets.</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: mobile ? 16 : 19,
          lineHeight: 1.5,
          color: 'var(--fg-mute)',
          maxWidth: mobile ? '100%' : '52ch',
          margin: mobile ? '28px 0 0' : '40px 0 0',
        }}>
          The AI-native financial data platform for Vietnam’s capital markets — reading footnotes,
          filings, and disclosures the pre-LLM stacks could never hold.
        </p>

        <div style={{ display: 'flex', gap: 14, marginTop: mobile ? 32 : 48, flexWrap: 'wrap' }}>
          <button type="button" onClick={() => window.openAccess('oracle')} className="btn btn-primary">Talk to the Oracle <span className="arr">→</span></button>
          <a href="#manifesto" className="btn btn-ghost">Read our manifesto</a>
        </div>
        <AlreadyInvited mobile={mobile} />

        {/* Quiet stat rail */}
        {!mobile && (
          <div style={{
            position: 'absolute', right: 0, bottom: -20, maxWidth: 300,
            paddingLeft: 20, borderLeft: '1px solid var(--border-strong)',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--amber)' }}>
              · LIVE WITH <a href="https://tps.vn/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>TPS</a>
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.4, color: 'var(--fg-mute)' }}>
              Vietnam’s first AI-native securities firm is already on Oracle.
            </div>
          </div>
        )}
      </div>

      {/* Scroll cue */}
      {!mobile && (
        <div style={{
          position: 'absolute', left: 'var(--pad-x)', bottom: 32, display: 'flex',
          alignItems: 'center', gap: 12, color: 'var(--fg-soft)',
        }}>
          <span className="p-mono" style={{ fontSize: 10, letterSpacing: '0.18em' }}>SCROLL</span>
          <span style={{ width: 36, height: 1, background: 'var(--fg-faint)' }} />
        </div>
      )}
    </section>
  );
}

function EmberField({ mobile }) {
  const embers = React.useMemo(() => Array.from({ length: mobile ? 12 : 36 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 5 + Math.random() * 7,
    drift: (Math.random() - 0.5) * 80 + 'px',
    size: 2 + Math.random() * 4,
  })), [mobile]);
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {embers.map((e, i) => (
        <div key={i} style={{
          position: 'absolute', left: e.left + '%', bottom: -20,
          width: e.size, height: e.size, borderRadius: '50%',
          background: 'var(--amber)',
          boxShadow: '0 0 12px var(--amber)',
          ['--drift']: e.drift,
          animation: `ember-rise ${e.duration}s ease-in ${e.delay}s infinite backwards`,
        }} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Etymology callout (between hero + manifesto)
// ─────────────────────────────────────────────────────────────
function Etymology({ mobile }) {
  return (
    <section style={{
      padding: mobile ? '64px 28px' : '88px var(--pad-x)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'color-mix(in oklab, var(--bg-elev) 50%, var(--bg))',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'auto 1fr', gap: mobile ? 28 : 80, alignItems: 'start' }}>
        <div className="p-eyebrow" style={{ whiteSpace: 'nowrap' }}>
          <span className="dot" />ON THE NAME
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: mobile ? 28 : 'clamp(32px, 3.4vw, 46px)',
            lineHeight: 1.15, color: 'var(--fg)', letterSpacing: '-0.015em',
            textWrap: 'balance', maxWidth: 22 + 'ch'
          }}>
            <span className="p-mono p-amber" style={{ fontSize: mobile ? 14 : 18, letterSpacing: '0.18em', display: 'block', marginBottom: 18 }}>
              PROM · VIS
            </span>
            <i>Prometheus stole fire from the gods and gave it to humans.</i>
            <br />
            <span style={{ color: 'var(--fg-mute)' }}>We use LLMs to surface what databases couldn’t — and hand it back to the people pricing Vietnam.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Manifesto
// ─────────────────────────────────────────────────────────────
function Manifesto({ mobile }) {
  return (
    <section id="manifesto" className="section">
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div className="p-eyebrow" style={{ marginBottom: 36 }}><span className="dot" />MANIFESTO · §01</div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 36 : 96 }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: mobile ? 36 : 'clamp(40px, 4.4vw, 64px)',
              lineHeight: 1.05, letterSpacing: '-0.018em', margin: 0, fontWeight: 400,
              textWrap: 'balance',
            }}>
              For a quarter century, the most valuable signals in Vietnam’s market
              <span className="p-amber" style={{ fontStyle: 'italic' }}> lived where databases couldn’t see them.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, fontSize: mobile ? 16 : 17.5, lineHeight: 1.6, color: 'var(--fg-mute)' }}>
            <p style={{ margin: 0 }}>
              Footnotes. Narrative disclosures. Sustainability reports. Regulatory filings. The signal sat in <i>text</i> — pages of it —
              and the pre-LLM stacks that defined Vietnam’s data layer could not efficiently structure, store, or query it.
            </p>
            <p style={{ margin: 0 }}>
              The pre-LLM incumbents who still define this market built their pipelines, schemas, and org charts before LLMs existed.
              Those decisions are dependencies they cannot shed.
            </p>
            <p style={{ margin: 0, color: 'var(--fg)' }}>
              PROMVIS was built in the AI era to do one thing: <span className="p-amber"><i>read what databases couldn’t</i></span>, and refine it into the foundation under every product we ship.
            </p>
            <div style={{ marginTop: 12 }}>
              <a className="btn-quiet btn" href="#foundation">
                See the foundation <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Foundation section (variant chosen via tweak)
// ─────────────────────────────────────────────────────────────
function Foundation({ variant, mobile }) {
  let Viz;
  if (mobile) Viz = window.FoundationMobile;
  else if (variant === 'columns') Viz = window.FoundationColumns;
  else if (variant === 'line') Viz = window.FoundationLine;
  else Viz = window.FoundationOre;

  return (
    <section id="foundation" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div className="p-eyebrow" style={{ marginBottom: 18 }}><span className="dot" />MANIFESTO · §02 — THE FOUNDATION</div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: mobile ? 34 : 'clamp(40px, 4.4vw, 62px)',
              lineHeight: 1.05, letterSpacing: '-0.018em', margin: 0, fontWeight: 400,
              textWrap: 'balance', maxWidth: '18ch',
            }}>
              Ore into something <i className="p-amber">molten and useful.</i>
            </h2>
          </div>
          <p style={{ maxWidth: 44 + 'ch', fontSize: mobile ? 15 : 16, lineHeight: 1.55, color: 'var(--fg-mute)', margin: 0 }}>
            Public disclosures, refined by LLMs into a structured, grounded, citable layer.
            Every product we ship stands on it — so every answer is the same kind of answer.
          </p>
        </div>

        <Viz />

        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 24, paddingTop: 36, borderTop: '1px solid var(--border)' }}>
          <FoundationStat n="~1,600" label="Public companies indexed" foot="HOSE · HNX · UPCoM" />
          <FoundationStat n="25 yrs" label="Of disclosure history" foot="Since the market opened, 2000" />
          <FoundationStat n="VN" label="Native disclosure language" foot="Vietnamese + English filings" />
          <FoundationStat n="100%" label="Public source, fully cited" foot="Never LLM-guessed" />
        </div>
      </div>
    </section>
  );
}

function FoundationStat({ n, label, foot }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, lineHeight: 1, color: 'var(--amber)', letterSpacing: '-0.02em' }}>{n}</div>
      <div className="p-mono" style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-soft)' }}>{label}</div>
      {foot && <div className="p-mono" style={{ fontSize: 9.5, letterSpacing: '0.08em', color: 'var(--fg-faint)', marginTop: 2 }}>{foot}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Product family
// ─────────────────────────────────────────────────────────────
function ProductFamily({ mobile }) {
  return (
    <section id="oracle" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div className="p-eyebrow" style={{ marginBottom: 18 }}><span className="dot" />THE PRODUCT FAMILY</div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: mobile ? 34 : 'clamp(40px, 4.4vw, 62px)',
              lineHeight: 1.05, letterSpacing: '-0.018em', margin: 0, fontWeight: 400,
              maxWidth: '20ch', textWrap: 'balance',
            }}>
              Not a feature list. <i className="p-amber">A family.</i>
            </h2>
          </div>
          <p style={{ maxWidth: 44 + 'ch', fontSize: mobile ? 15 : 16, lineHeight: 1.55, color: 'var(--fg-mute)', margin: 0 }}>
            Each product is a different shape of the same answer: take the foundation, and put it where the work happens.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr', gap: mobile ? 16 : 20 }}>
          <ProductCard
            name="Oracle"
            status="AVAILABLE · EARLY ACCESS"
            statusKind="live"
            tagline="The AI analyst on your desk."
            body="Ask anything about a listed Vietnamese company. Oracle answers like your sharpest in-house analyst — grounded in the foundation, citing the filing, never guessing."
            audience="Built for securities firms."
            cta="Request access"
            samples={[
              { q: 'What changed in HPG’s related-party disclosure this quarter?', kind: 'live' },
              { q: 'Show every Vietnamese listco with a Scope 3 commitment by 2030.' },
              { q: 'Summarise VCB’s capital adequacy narrative across the last 4 quarters.' },
            ]}
            highlight
          />
          <ProductCard
            name="Forge"
            status="COMING SOON"
            statusKind="soon"
            tagline="Datasets you can’t buy anywhere else."
            body="Research-grade datasets forged from raw corporate disclosures. We start with ESG and sustainability activity of public-listed companies — the data that incumbents can’t structure."
            audience="Built for research firms and institutional investors."
            cta="Get notified"
            samples={[
              { dataset: 'VN-ESG-100', note: 'ESG narrative dataset · 14 yrs history' },
              { dataset: 'VN-RPT', note: 'Related-party transaction graph' },
              { dataset: 'VN-GUIDANCE', note: 'Management guidance language, classified' },
            ]}
          />
          <ProductCard
            name="…"
            status="IN THE FORGE"
            statusKind="ghost"
            tagline="More on the way."
            body="The foundation supports many shapes of product. We’re shipping the next one when it earns its name — not before."
            cta="Stay close"
            ghost
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ name, status, statusKind, tagline, body, audience, cta, samples, ghost, highlight }) {
  return (
    <div className="card" style={{
      borderColor: highlight ? 'color-mix(in oklab, var(--amber) 40%, var(--border))' : 'var(--border)',
      background: highlight ? 'linear-gradient(180deg, color-mix(in oklab, var(--amber) 5%, var(--bg-card)), var(--bg-card))' : undefined,
      opacity: ghost ? 0.7 : 1,
      display: 'flex', flexDirection: 'column', gap: 24, minHeight: 460,
      padding: 36,
    }}>
      {highlight && (
        <div aria-hidden style={{ position: 'absolute', top: -1, left: -1, right: -1, height: 1, background: 'linear-gradient(90deg, transparent, var(--amber), transparent)' }} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--fg)' }}>
          {name}
        </div>
        <StatusPill label={status} kind={statusKind} />
      </div>

      <div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.2, color: 'var(--fg)', letterSpacing: '-0.012em' }}>{tagline}</div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-mute)', marginTop: 12 }}>{body}</div>
        {audience && <div className="p-mono" style={{ fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-soft)', marginTop: 14 }}>{audience}</div>}
      </div>

      {samples && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          {samples.map((s, i) => (
            <div key={i} className="p-mono" style={{
              fontSize: 10.5, lineHeight: 1.5, padding: '8px 10px',
              border: '1px solid var(--border)', borderRadius: 2,
              color: s.kind === 'live' ? 'var(--amber)' : 'var(--fg-mute)',
              background: s.kind === 'live' ? 'color-mix(in oklab, var(--amber) 6%, transparent)' : 'transparent',
              borderColor: s.kind === 'live' ? 'color-mix(in oklab, var(--amber) 30%, var(--border))' : 'var(--border)',
            }}>
              {s.q && <><span style={{ color: 'var(--fg-soft)' }}>›_ </span>{s.q}</>}
              {s.dataset && (<>
                <span style={{ color: 'var(--amber)' }}>{s.dataset}</span>
                <span style={{ color: 'var(--fg-soft)' }}> · {s.note}</span>
              </>)}
            </div>
          ))}
        </div>
      )}
      {ghost && (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--border)', borderRadius: 3, padding: 24 }}>
          <BrandSpark size={28} animated={false} />
        </div>
      )}

      <div style={{ marginTop: 'auto' }}>
        <button
          type="button"
          onClick={() => window.openAccess(name === 'Forge' ? 'forge' : 'oracle')}
          disabled={ghost}
          className={highlight ? 'btn btn-primary' : 'btn btn-ghost'}
          style={{ width: '100%', justifyContent: 'space-between', padding: '14px 18px', opacity: ghost ? 0.6 : 1, cursor: ghost ? 'default' : 'pointer' }}
        >
          <span>{cta}</span>
          <span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}

function StatusPill({ label, kind }) {
  const colors = {
    live:  { bg: 'color-mix(in oklab, var(--amber) 14%, transparent)', fg: 'var(--amber)', dot: 'var(--amber)' },
    soon:  { bg: 'transparent', fg: 'var(--fg-soft)', dot: 'var(--fg-soft)' },
    ghost: { bg: 'transparent', fg: 'var(--fg-faint)', dot: 'var(--fg-faint)' },
  }[kind] || {};
  return (
    <span className="p-mono" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
      padding: '5px 10px 5px 8px', borderRadius: 999,
      border: '1px solid ' + (kind === 'live' ? 'color-mix(in oklab, var(--amber) 35%, var(--border))' : 'var(--border)'),
      background: colors.bg, fontSize: 9.5, letterSpacing: '0.14em', color: colors.fg,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: colors.dot,
        boxShadow: kind === 'live' ? '0 0 8px var(--amber)' : 'none',
        animation: kind === 'live' ? 'ember-flicker 2s ease-in-out infinite' : 'none',
      }} />
      {label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Trusted by
// ─────────────────────────────────────────────────────────────
function TrustedBy({ mobile }) {
  return (
    <section id="trusted" className="section" style={{
      paddingTop: 'calc(var(--pad-section) * 0.7)', paddingBottom: 'calc(var(--pad-section) * 0.7)',
      borderTop: '1px solid var(--border)',
      background: 'color-mix(in oklab, var(--bg-elev) 30%, var(--bg))',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="p-eyebrow" style={{ marginBottom: 18, justifyContent: 'center' }}><span className="dot" />TRUSTED BY</div>
          <div style={{
            fontFamily: 'var(--font-serif)', fontSize: mobile ? 24 : 32, lineHeight: 1.2,
            color: 'var(--fg)', maxWidth: '32ch', margin: '0 auto', textWrap: 'balance',
          }}>
            Vietnam’s most forward-looking institutions.
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: 0,
          border: '1px solid var(--border)',
          borderRadius: 4,
          overflow: 'hidden',
        }}>
          <TPSLot />
          <LogoSlot label="Coming soon" />
          <LogoSlot label="Coming soon" />
          <LogoSlot label="Coming soon" />
        </div>

        <div style={{ marginTop: 32, textAlign: 'center', fontSize: 13, color: 'var(--fg-soft)' }}>
          TPBank Securities — Vietnam’s first AI-native securities firm — is live on Oracle.
        </div>
      </div>
    </section>
  );
}

function TPSLot() {
  return (
    <a href="https://tps.vn/" target="_blank" rel="noopener noreferrer" style={{
      padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
      borderRight: '1px solid var(--border)', background: 'color-mix(in oklab, var(--amber) 4%, transparent)',
      position: 'relative', minHeight: 180, textDecoration: 'none', transition: 'background 0.2s ease', cursor: 'alias'
    }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, var(--amber-soft), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 140, height: 50 }}>
        {/* We use the original logo as a mask, and paint it with our amber gradient to match the site's effect */}
        <div style={{
          position: 'absolute', inset: 0,
          WebkitMaskImage: 'url(/tps-logo.png)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: 'url(/tps-logo.png)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          background: 'linear-gradient(90deg, var(--amber), color-mix(in oklab, var(--amber) 50%, transparent))'
        }} />
        {/* Fallback text just in case the image hasn't been uploaded yet */}
        <span style={{ opacity: 0 }} className="p-mono">TPS LOGO</span>
      </div>
      <div className="p-mono" style={{ fontSize: 9.5, letterSpacing: '0.18em', color: 'var(--amber)', position: 'relative' }}>· LIVE ON ORACLE</div>
    </a>
  );
}

function LogoSlot({ label }) {
  return (
    <div style={{
      padding: '48px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRight: '1px solid var(--border)', minHeight: 180,
      background: 'repeating-linear-gradient(135deg, transparent 0 12px, color-mix(in oklab, var(--fg-faint) 8%, transparent) 12px 13px)',
    }}>
      <span className="p-mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--fg-faint)' }}>· {label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Why us
// ─────────────────────────────────────────────────────────────
function WhyUs({ mobile }) {
  const pillars = [
    {
      num: '01', title: 'Built AI-First',
      body: 'We were founded in the AI era. There is no legacy stack to defend, no pre-LLM schema to retrofit, no org chart to renegotiate.',
      glyph: 'flame',
    },
    {
      num: '02', title: 'Vietnam-Native',
      body: 'Built in Vietnam, for Vietnam’s capital markets. We read Vietnamese disclosure language natively — diacritics, conventions, regulatory dialect.',
      glyph: 'star',
    },
    {
      num: '03', title: 'Foundation-Driven',
      body: 'Every product sits on the same refined data layer. Insight compounds across Oracle, Forge, and whatever we forge next.',
      glyph: 'forge',
    },
  ];
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div className="p-eyebrow" style={{ marginBottom: 18 }}><span className="dot" />WHY NOW · WHY US</div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: mobile ? 34 : 'clamp(40px, 4.4vw, 62px)',
            lineHeight: 1.05, letterSpacing: '-0.018em', margin: 0, fontWeight: 400, maxWidth: '24ch', textWrap: 'balance',
          }}>
            Three reasons we’re the company built to do this.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr 1fr', gap: 0, border: '1px solid var(--border)', borderRadius: 4 }}>
          {pillars.map((p, i) => (
            <Pillar key={p.num} {...p} last={i === pillars.length - 1} mobile={mobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({ num, title, body, glyph, last, mobile }) {
  const Glyph = { flame: FlameGlyph, star: StarGlyph, forge: ForgeGlyph }[glyph] || FlameGlyph;
  return (
    <div style={{
      padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 22, minHeight: 280,
      borderRight: (!last && !mobile) ? '1px solid var(--border)' : 'none',
      borderBottom: (mobile && !last) ? '1px solid var(--border)' : 'none',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <span className="p-mono" style={{ fontSize: 10, letterSpacing: '0.14em', color: 'var(--fg-soft)' }}>· {num}</span>
        <div style={{ color: 'var(--amber)' }}><Glyph /></div>
      </div>
      <div className="p-serif" style={{ fontSize: 28, lineHeight: 1.15, color: 'var(--fg)', letterSpacing: '-0.015em' }}>{title}</div>
      <div style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-mute)' }}>{body}</div>
    </div>
  );
}

// Minimal geometric glyphs — single concept each, no SVG slop
function FlameGlyph() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36">
      <path className="ic" strokeWidth="1.2" d="M18 4 C 14 12, 8 14, 8 22 a 10 10 0 0 0 20 0 c 0 -6 -4 -10 -10 -18 z" />
      <path className="ic" strokeWidth="1.2" d="M18 14 C 16 18, 14 19, 14 24 a 4 4 0 0 0 8 0 c 0 -3 -2 -6 -4 -10 z" opacity="0.6" />
    </svg>
  );
}
function StarGlyph() {
  // Vietnamese gold star — simplified geometry
  return (
    <svg width="36" height="36" viewBox="0 0 36 36">
      <polygon points="18,5 21.5,13.5 31,14 23.5,20 26,29 18,24 10,29 12.5,20 5,14 14.5,13.5" className="ic" strokeWidth="1.2" />
    </svg>
  );
}
function ForgeGlyph() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36">
      <rect x="6" y="18" width="24" height="14" className="ic" strokeWidth="1.2" rx="1" />
      <path className="ic" strokeWidth="1.2" d="M10 18 L 12 8 L 24 8 L 26 18" />
      <path className="ic" strokeWidth="1.2" d="M14 24 v 2 M18 24 v 2 M22 24 v 2" opacity="0.6" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// CTA + Footer
// ─────────────────────────────────────────────────────────────
function CTAStrip({ mobile }) {
  return (
    <section id="contact" className="section" style={{
      paddingTop: 120, paddingBottom: 120,
      borderTop: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
      background: 'color-mix(in oklab, var(--bg-elev) 50%, var(--bg))',
    }}>
      <div aria-hidden style={{
        position: 'absolute', left: 0, right: 0, top: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--amber) 50%, transparent)', opacity: 0.6,
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 80% at 50% 0%, color-mix(in oklab, var(--amber) 14%, transparent), transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <BrandSpark size={20} />
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: mobile ? 36 : 'clamp(40px, 5.4vw, 76px)',
          lineHeight: 1.02, letterSpacing: '-0.02em', margin: '24px 0 16px', fontWeight: 400, textWrap: 'balance',
        }}>
          Put the foundation on your desk.
        </h2>
        <p style={{ fontSize: mobile ? 16 : 18, lineHeight: 1.5, color: 'var(--fg-mute)', maxWidth: '52ch', margin: '0 auto 36px' }}>
          Oracle is in early access with a handful of Vietnamese securities firms. If you read disclosures for a living, you should be one of them.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => window.openAccess('oracle')} className="btn btn-primary">Talk to the Oracle <span className="arr">→</span></button>
          <a href="mailto:oracle@promvis.io" className="btn btn-ghost">Email oracle@promvis.io</a>
        </div>
        <div style={{ marginTop: 22 }}><AlreadyInvited align="center" /></div>
      </div>
    </section>
  );
}

function Footer({ mobile }) {
  return (
    <footer style={{
      padding: mobile ? '48px 28px 36px' : '72px var(--pad-x) 48px',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.5fr 1fr 1fr 1fr', gap: 36, marginBottom: 56 }}>
          <div>
            <Wordmark />
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, lineHeight: 1.3, color: 'var(--fg-mute)', marginTop: 18, maxWidth: '28ch' }}>
              The AI-native financial data platform for Vietnam’s capital markets.
            </div>
          </div>
          <FooterCol title="Products" links={['Oracle (Early access)', 'Forge (Coming soon)', 'Roadmap']} />
          <FooterCol title="Company" links={['Manifesto', 'About', 'Careers', 'Contact']} />
          {/* The Prometheus inception story lives at /origin — surfaced quietly only in the footer copyright row. */}
          <FooterCol title="Reach us" links={['oracle@promvis.io', 'Hanoi · District Ba Đình', 'LinkedIn']} />
        </div>
        <hr className="rule" />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginTop: 24,
          fontSize: 12, color: 'var(--fg-soft)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span>© 2026 PROMVIS</span>
            <span>·</span>
            <span>Built by the people at <a href="https://coderpush.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted currentColor' }}>CoderPush</a></span>
            <span>·</span>
            <span>MADE IN VIETNAM ★</span>
            <span>·</span>
            <a href="/origin" style={{ color: 'var(--fg-faint)', textDecoration: 'none', borderBottom: '1px dotted var(--fg-faint)' }} title="—">ORIGIN</a>
          </div>
          <div>EARLY ACCESS · 2026</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="p-mono" style={{ fontSize: 10, letterSpacing: '0.16em', color: 'var(--fg-soft)', textTransform: 'uppercase', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(l => (
          <a key={l} href="#" style={{ fontSize: 13.5, color: 'var(--fg-mute)', textDecoration: 'none' }}>{l}</a>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  BrandSpark, Wordmark, Nav, Hero, Etymology, Manifesto, Foundation,
  ProductFamily, ProductCard, TrustedBy, WhyUs, CTAStrip, Footer,
});
