// PROMVIS - production app entry point.
// Renders the full landing page directly (no design-canvas wrapper or tweaks panel).

function useMobile() {
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e) => setMobile(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
    // Safari < 14 fallback
    mq.addListener(handler);
    return () => mq.removeListener(handler);
  }, []);
  return mobile;
}

function App() {
  const mobile = useMobile();

  return (
    <window.LanguageProvider>
      <AccessModal />
      <div style={{
        background: 'var(--bg)',
        color: 'var(--fg)',
        fontFamily: 'var(--font-sans)',
        minHeight: '100vh',
      }}>
        <Nav mobile={mobile} />
        <Hero motif="ember-rain" mobile={mobile} />
        <Manifesto mobile={mobile} />
        <Foundation variant="columns" mobile={mobile} />
        <ProductFamily mobile={mobile} />
        <TrustedBy mobile={mobile} />
        <WhyUs mobile={mobile} />
        <CTAStrip mobile={mobile} />
        <Footer mobile={mobile} />
      </div>
    </window.LanguageProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
