// PROMVIS — main app. Composes the landing page into desktop + mobile
// artboards on a DesignCanvas and wires up the Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#e8a04a",
  "bgTone": "warm",
  "density": "regular",
  "heroMotif": "horizon",
  "foundationVariant": "ore",
  "showMobile": true
}/*EDITMODE-END*/;

const ACCENTS = ['#e8a04a', '#d97742', '#c46a2c', '#f4c06a', '#b8541c'];

function LandingPage({ mobile, motif, foundationVariant }) {
  return (
    <div style={{
      background: 'var(--bg)',
      color: 'var(--fg)',
      fontFamily: 'var(--font-sans)',
      minHeight: mobile ? 'auto' : '100%',
    }}>
      <Nav mobile={mobile} />
      <Hero motif={motif} mobile={mobile} />
      <Manifesto mobile={mobile} />
      <Foundation variant={foundationVariant} mobile={mobile} />
      <ProductFamily mobile={mobile} />
      <TrustedBy mobile={mobile} />
      <WhyUs mobile={mobile} />
      <CTAStrip mobile={mobile} />
      <Footer mobile={mobile} />
    </div>
  );
}

// Custom tall mobile bezel — IOSDevice caps height, we want a full scroll mockup.
function MobileMockup({ children, width = 390 }) {
  return (
    <div style={{
      width: width + 16, padding: 8, background: '#0a0908',
      borderRadius: 48, border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 30px 60px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,0.04)',
      position: 'relative',
    }}>
      {/* notch */}
      <div style={{
        position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)',
        width: 120, height: 32, borderRadius: 20, background: '#000', zIndex: 30,
      }} />
      <div style={{
        width, borderRadius: 40, overflow: 'hidden',
        position: 'relative', background: 'var(--bg)',
      }}>
        {/* status bar overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 50, zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 30px', pointerEvents: 'none',
        }}>
          <span style={{ fontFamily: '-apple-system, system-ui', fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>9:41</span>
          <span style={{ fontFamily: '-apple-system, system-ui', fontSize: 12, color: 'var(--fg)', opacity: 0.7 }}>5G &nbsp;&nbsp; 􀛨</span>
        </div>
        <div style={{ paddingTop: 50 }}>
          {children}
        </div>
        {/* home indicator */}
        <div style={{ height: 28, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 8 }}>
          <div style={{ width: 134, height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.6)' }} />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent + bg-tone + density to :root via inline style override
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-density', t.density);
    root.setAttribute('data-bg', t.bgTone);
    // Push the accent override
    root.style.setProperty('--amber', t.accent);
    // re-derive soft + glow from the accent
    root.style.setProperty('--amber-soft', `color-mix(in oklab, ${t.accent} 18%, transparent)`);
    root.style.setProperty('--amber-glow', `color-mix(in oklab, ${t.accent} 40%, transparent)`);
  }, [t.accent, t.bgTone, t.density]);

  return (
    <>
      <AccessModal />
      <DesignCanvas>
        <DCSection id="landing" title="PROMVIS — Homepage" subtitle="Desktop hi-fi + mobile companion. The Tweaks panel changes both.">
          <DCArtboard id="desktop" label="Desktop · 1440 wide · full scroll" width={1440} height={5600}>
            <LandingPage motif={t.heroMotif} foundationVariant={t.foundationVariant} />
          </DCArtboard>
          {t.showMobile && (
            <DCArtboard id="mobile" label="Mobile · 390 · companion" width={422} height={5600}>
              <div style={{ background: '#15110d', minHeight: '100%', padding: '32px 16px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <MobileMockup>
                  <LandingPage mobile motif={t.heroMotif} foundationVariant={t.foundationVariant} />
                </MobileMockup>
              </div>
            </DCArtboard>
          )}
        </DCSection>

        <DCSection id="foundation-variants" title="Foundation viz — variant gallery" subtitle="Cycle these in Tweaks. The desktop artboard above mirrors the selected variant.">
          <DCArtboard id="ore" label="Variant A · Ore → Molten (default)" width={1280} height={420}>
            <div style={{ background: 'var(--bg)', padding: 40, minHeight: '100%' }}>
              <FoundationOre />
            </div>
          </DCArtboard>
          <DCArtboard id="columns" label="Variant B · Three columns" width={1280} height={520}>
            <div style={{ background: 'var(--bg)', padding: 40, minHeight: '100%' }}>
              <FoundationColumns />
            </div>
          </DCArtboard>
          <DCArtboard id="line" label="Variant C · Single line of light" width={1280} height={420}>
            <div style={{ background: 'var(--bg)', padding: 40, minHeight: '100%' }}>
              <FoundationLine />
            </div>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Accent" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label="Hero" />
        <TweakRadio
          label="Motif"
          value={t.heroMotif}
          options={[
            { value: 'horizon',     label: 'Horizon' },
            { value: 'ember-rain',  label: 'Embers' },
            { value: 'type-only',   label: 'Type-only' },
          ]}
          onChange={(v) => setTweak('heroMotif', v)}
        />

        <TweakSection label="The Foundation" />
        <TweakRadio
          label="Variant"
          value={t.foundationVariant}
          options={[
            { value: 'ore', label: 'Ore' },
            { value: 'columns', label: 'Columns' },
            { value: 'line', label: 'Line' },
          ]}
          onChange={(v) => setTweak('foundationVariant', v)}
        />

        <TweakSection label="Page" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={[
            { value: 'compact', label: 'Compact' },
            { value: 'regular', label: 'Regular' },
            { value: 'editorial', label: 'Editorial' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakSelect
          label="Background"
          value={t.bgTone}
          options={[
            { value: 'warm',  label: 'Warm charcoal (default)' },
            { value: 'black', label: 'Pure near-black' },
            { value: 'cool',  label: 'Cool charcoal' },
            { value: 'ink',   label: 'Deep ink' },
          ]}
          onChange={(v) => setTweak('bgTone', v)}
        />
        <TweakToggle
          label="Show mobile companion"
          value={t.showMobile}
          onChange={(v) => setTweak('showMobile', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
