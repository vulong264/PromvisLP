/* PROMVIS blog — bilingual toggle. Shares localStorage 'promvis-lang' with the main site (default 'vi'). */
(function () {
  var KEY = 'promvis-lang';

  function current() {
    var l = document.documentElement.getAttribute('data-lang');
    return l === 'en' || l === 'vi' ? l : 'vi';
  }

  function apply(lang) {
    if (lang !== 'en' && lang !== 'vi') lang = 'vi';
    document.documentElement.setAttribute('data-lang', lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-set') === lang));
    });
  }

  // Click on either EN / VI control
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang-set]');
    if (!btn) return;
    e.preventDefault();
    apply(btn.getAttribute('data-lang-set'));
  });

  // Keep in sync if the language is changed in another tab / on another page
  window.addEventListener('storage', function (e) {
    if (e.key === KEY && (e.newValue === 'en' || e.newValue === 'vi')) apply(e.newValue);
  });

  // Initialise pressed-state from whatever the no-flash head script already set
  apply(current());
})();
