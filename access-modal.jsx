// Access Request modal + "already invited?" sign-in shortcut.
// Two visitors arrive at promvis.io:
//   1. existing invitees  → quiet "Sign in" link → chatbot.promvis.io
//   2. new prospects      → modal that captures email + firm + role + why
//
// State is driven by a window.__access store so any CTA in any section can
// open it without prop drilling. The store is mounted by <AccessRoot/> in
// app.jsx.

const ANALYST_URL = 'https://chatbot.promvis.io';

function useTranslation() {
  return React.useContext(window.LanguageContext) || { lang: 'vi', setLang: () => {}, t: (k) => k };
}

// ─────────────────────────────────────────────────────────────
// Tiny pub-sub store so every CTA can pop the modal
// ─────────────────────────────────────────────────────────────
const accessStore = (() => {
  let open = false;
  let product = 'analyst';
  const subs = new Set();
  return {
    isOpen: () => open,
    product: () => product,
    open(p = 'analyst') { open = true; product = p; subs.forEach(fn => fn()); },
    close() { open = false; subs.forEach(fn => fn()); },
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },
  };
})();
window.openAccess = (p) => accessStore.open(p);

function useAccessStore() {
  const [, force] = React.useState(0);
  React.useEffect(() => accessStore.subscribe(() => force(x => x + 1)), []);
  return { open: accessStore.isOpen(), product: accessStore.product() };
}

// ─────────────────────────────────────────────────────────────
// "Already invited?" inline shortcut - sits under primary CTAs
// ─────────────────────────────────────────────────────────────
function AlreadyInvited({ align = 'left', mobile }) {
  const { t } = useTranslation();
  return (
    <div className="p-mono" style={{
      display: 'flex', alignItems: 'center', gap: 8,
      fontSize: 11, color: 'var(--fg-soft)',
      marginTop: mobile ? 18 : 22,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
    }}>
      <span style={{ letterSpacing: 'var(--track-caps)' }}>{t('ALREADY INVITED?')}</span>
      <a
        href={ANALYST_URL}
        style={{ color: 'var(--amber)', textDecoration: 'none', borderBottom: '1px solid color-mix(in oklab, var(--amber) 50%, transparent)', paddingBottom: 1 }}
      >
        {t('Sign in at chatbot.promvis.io →')}
      </a>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// The modal
// ─────────────────────────────────────────────────────────────
const ROLES = [
  'Head of Research', 'Chief Investment Officer', 'Portfolio Manager',
  'Analyst', 'COO / Head of Operations', 'Other',
];

function AccessModal() {
  const { open, product } = useAccessStore();
  const { t } = useTranslation();
  const [step, setStep] = React.useState('form'); // 'form' | 'sending' | 'done'
  const [form, setForm] = React.useState({ name: '', email: '', firm: '', role: '', why: '' });
  const [touched, setTouched] = React.useState(false);

  // Reset on close
  React.useEffect(() => {
    if (!open) {
      const id = setTimeout(() => {
        setStep('form'); setForm({ name: '', email: '', firm: '', role: '', why: '' }); setTouched(false);
      }, 250);
      return () => clearTimeout(id);
    }
  }, [open]);

  // Esc to close
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') accessStore.close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.email && form.firm && form.role && emailOk;

  const submit = async (e) => {
    e?.preventDefault();
    if (!canSubmit) { setTouched(true); return; }
    setStep('sending');
    try {
      const res = await fetch('https://formspree.io/f/xkokgagv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: form.email,
          company: form.firm,
          title: form.role,
          product: product,
        })
      });
      setStep('done');
    } catch(err) {
      setStep('done');
    }
  };

  if (!open) return null;

  const headline = product === 'forge'
    ? t('Be among the first to read Forge.')
    : t('Talk to the Analyst.');
  const lede = product === 'forge'
    ? t('Forge ships first to firms already on Promvis Analyst. Leave your details and we’ll bring you in when the dataset is ready.')
    : t('Promvis Analyst is invite-only. We onboard a small number of Vietnamese securities and investment firms each month, by hand. Tell us who you are.');

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Request access"
      onClick={(e) => { if (e.target === e.currentTarget) accessStore.close(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'color-mix(in oklab, #000 70%, transparent)',
        backdropFilter: 'blur(8px) saturate(120%)',
        WebkitBackdropFilter: 'blur(8px) saturate(120%)',
        display: 'grid', placeItems: 'center',
        padding: 24, overflow: 'auto',
        animation: 'access-fade 200ms ease-out',
      }}
    >
      <style>{`
        @keyframes access-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes access-rise { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .am-field input, .am-field textarea, .am-field select {
          width: 100%; padding: 12px 14px; background: color-mix(in oklab, var(--bg) 70%, var(--bg-elev));
          border: 1px solid var(--border-strong); color: var(--fg);
          border-radius: 3px; font-family: var(--font-sans); font-size: 14px;
          line-height: 1.4; outline: none; transition: border-color .15s, background .15s;
          appearance: none;
        }
        .am-field textarea { resize: vertical; min-height: 84px; font-family: var(--font-sans); }
        .am-field input:focus, .am-field textarea:focus, .am-field select:focus {
          border-color: var(--amber); background: color-mix(in oklab, var(--amber) 4%, var(--bg-elev));
        }
        .am-field input::placeholder, .am-field textarea::placeholder { color: var(--fg-faint); }
        .am-field label {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: var(--font-sans); font-size: 10px; letter-spacing: var(--track-caps);
          text-transform: uppercase; color: var(--fg-soft); margin-bottom: 8px;
        }
        .am-field { display: flex; flex-direction: column; }
        .am-field .req { color: var(--amber); }
        .am-field.err input, .am-field.err select, .am-field.err textarea { border-color: oklch(0.65 0.16 28); }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 520,
          background: 'linear-gradient(180deg, var(--bg-elev), color-mix(in oklab, var(--bg-elev) 85%, black))',
          border: '1px solid var(--border-strong)',
          borderRadius: 6, position: 'relative', overflow: 'hidden',
          animation: 'access-rise 280ms cubic-bezier(.2,.7,.2,1)',
          boxShadow: '0 30px 80px rgba(0,0,0,.5), 0 0 0 1px color-mix(in oklab, var(--amber) 8%, transparent)',
        }}
      >
        {/* amber top edge */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, var(--amber) 50%, transparent)',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 180,
          background: 'radial-gradient(ellipse 80% 100% at 50% 0%, var(--amber-soft), transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* close */}
        <button
          onClick={() => accessStore.close()}
          aria-label="Close"
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 2,
            width: 32, height: 32, borderRadius: 999,
            border: '1px solid var(--border)', background: 'transparent',
            color: 'var(--fg-mute)', cursor: 'pointer',
            display: 'grid', placeItems: 'center',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12"><path className="ic" strokeWidth="1.4" d="M2 2l8 8M10 2l-8 8" /></svg>
        </button>

        {step !== 'done' ? (
          <form onSubmit={submit} style={{ padding: '36px 36px 32px', position: 'relative' }}>
            <div className="p-mono" style={{ fontSize: 10, letterSpacing: 'var(--track-caps)', color: 'var(--amber)', marginBottom: 14 }}>
              · {product === 'forge' ? t('FORGE · WAITLIST') : t('ANALYST · ACCESS REQUEST')}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-sans)', fontSize: 34, lineHeight: 1.08,
              letterSpacing: 'var(--track-tighter)', margin: 0, color: 'var(--fg)', fontWeight: 'var(--weight-bold)', textWrap: 'balance',
            }}>{headline}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg-mute)', margin: '14px 0 24px' }}>
              {lede}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label={t('Name')} field="name" form={form} setForm={setForm} placeholder="Nguyễn An" />
              <Field label={t('Work email')} req field="email" form={form} setForm={setForm}
                     placeholder="you@firm.vn" type="email" touched={touched} valid={!form.email || emailOk}
                     errorMsg={t('Use a valid work email')} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
              <Field label={t('Firm')} req field="firm" form={form} setForm={setForm}
                     placeholder="e.g. ABC Securities JSC" touched={touched} valid={!!form.firm} />
              <div className={'am-field' + (touched && !form.role ? ' err' : '')}>
                <label>{t('Role')} <span className="req">*</span></label>
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                  <option value="" disabled>{t('Choose…')}</option>
                  {ROLES.map(r => <option key={r} value={r}>{t(r)}</option>)}
                </select>
              </div>
            </div>

            <div className="am-field" style={{ marginTop: 14 }}>
              <label>
                <span>{product === 'forge' ? t('Dataset of interest') : t('Why Promvis Analyst, why now?')}</span>
                <span style={{ color: 'var(--fg-faint)' }}>{t('optional · 1-2 lines')}</span>
              </label>
              <textarea
                value={form.why}
                onChange={(e) => setForm({ ...form, why: e.target.value })}
                placeholder={product === 'forge'
                  ? t('e.g. VN-listco ESG narrative dataset for 2026 portfolio screening.')
                  : t('e.g. We cover VN listcos for a frontier-market fund and read filings every morning.')}
                maxLength={400}
              />
            </div>

            <div style={{ marginTop: 26, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <div className="p-mono" style={{ fontSize: 10, letterSpacing: 'var(--track-caps)', color: 'var(--fg-faint)' }}>
                <span style={{ color: 'var(--amber)' }}>·</span> {t('WE REPLY FROM ANALYST@PROMVIS.IO')}
              </div>
              <button
                type="submit"
                disabled={step === 'sending'}
                className="btn btn-primary"
                style={{ padding: '14px 22px', opacity: step === 'sending' ? 0.7 : 1 }}
              >
                {step === 'sending' ? t('Sending…') : (product === 'forge' ? t('Join the waitlist') : t('Request access'))}
                <span className="arr">→</span>
              </button>
            </div>

            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
              <AlreadyInvited />
            </div>
          </form>
        ) : (
          <SuccessState email={form.email} firm={form.firm} product={product} />
        )}
      </div>
    </div>
  );
}

function Field({ label, req, field, form, setForm, placeholder, type = 'text', touched, valid = true, errorMsg }) {
  const showErr = touched && !valid;
  return (
    <div className={'am-field' + (showErr ? ' err' : '')}>
      <label>
        <span>{label}{req && <span className="req"> *</span>}</span>
        {showErr && errorMsg && <span style={{ color: 'oklch(0.7 0.16 28)', textTransform: 'none', letterSpacing: 0 }}>{errorMsg}</span>}
      </label>
      <input
        type={type} value={form[field]} placeholder={placeholder}
        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
      />
    </div>
  );
}

function SuccessState({ email, firm, product }) {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '52px 36px 36px', position: 'relative', textAlign: 'left' }}>
      <div style={{
        width: 44, height: 44, borderRadius: 999, marginBottom: 22,
        background: 'color-mix(in oklab, var(--amber) 18%, transparent)',
        border: '1px solid color-mix(in oklab, var(--amber) 50%, transparent)',
        display: 'grid', placeItems: 'center', color: 'var(--amber)',
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20"><path className="ic" strokeWidth="1.6" d="M4 10.5l3.5 3.5L16 6" /></svg>
      </div>

      <div className="p-mono" style={{ fontSize: 10, letterSpacing: 'var(--track-caps)', color: 'var(--amber)', marginBottom: 12 }}>
        · {t('REQUEST RECEIVED')}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-sans)', fontSize: 32, lineHeight: 1.08,
        letterSpacing: 'var(--track-tighter)', margin: 0, color: 'var(--fg)', fontWeight: 'var(--weight-bold)', textWrap: 'balance',
      }}>
        {t('We’ll be in touch.')}
      </h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg-mute)', margin: '14px 0 0' }}>
        {product === 'forge'
          ? <>{t('You’re on the Forge waitlist. We’ll write to')} <strong style={{ color: 'var(--fg)' }}>{email}</strong> {t('the moment the first dataset is ready to ship.')}</>
          : <>{t('Promvis Analyst is curated. We onboard a handful of firms each month, by hand. Expect a note from Promvis at')} <strong style={{ color: 'var(--fg)' }}>{email}</strong> {t('within 24 hours.')}</>}
      </p>

      {/* Receipt-style detail panel */}
      <div style={{
        marginTop: 28, padding: '16px 18px',
        border: '1px solid var(--border)', borderRadius: 3,
        background: 'color-mix(in oklab, var(--bg) 60%, var(--bg-elev))',
        display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 18, rowGap: 8,
        fontFamily: 'var(--font-sans)', fontSize: 11, fontFeatureSettings: '"tnum"', color: 'var(--fg-mute)',
      }}>
        <span style={{ color: 'var(--fg-soft)' }}>REF</span>
        <span className="tnum">PV-{Math.random().toString(36).slice(2, 8).toUpperCase()}</span>
        <span style={{ color: 'var(--fg-soft)' }}>{t('FIRM')}</span>
        <span>{firm}</span>
        <span style={{ color: 'var(--fg-soft)' }}>{t('PRODUCT')}</span>
        <span>{product === 'forge' ? t('Forge - Waitlist') : t('Analyst - Early access')}</span>
        <span style={{ color: 'var(--fg-soft)' }}>{t('REPLY-BY')}</span>
        <span>{t('24 hours')}</span>
      </div>

      <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--border)' }}>
        <AlreadyInvited />
      </div>

      <div style={{ marginTop: 22, display: 'flex', gap: 12 }}>
        <button onClick={() => accessStore.close()} className="btn btn-ghost" style={{ padding: '12px 20px' }}>{t('Close')}</button>
      </div>
    </div>
  );
}

Object.assign(window, { AccessModal, AlreadyInvited, ANALYST_URL });
