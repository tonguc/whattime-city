// Elif Vural — site interactivity
(function () {
  const STORAGE_LANG = 'ev_lang';
  const STORAGE_THEME = 'ev_theme';

  // ---------- i18n ----------
  function applyLang(lang) {
    const dict = window.I18N[lang] || window.I18N.tr;
    document.documentElement.lang = lang;
    document.title = dict['doc.title'] || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['doc.desc']) metaDesc.setAttribute('content', dict['doc.desc']);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) {
        // allow simple HTML in some keys (hero.title)
        if (/<[a-z][\s\S]*>/i.test(dict[key])) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('.lang-switch button').forEach((b) => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_LANG);
      if (saved && window.I18N[saved]) return saved;
    } catch (e) {}
    const nav = (navigator.language || 'tr').slice(0, 2).toLowerCase();
    return window.I18N[nav] ? nav : 'tr';
  }

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(detectLang());

  // ---------- Theme ----------
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  function detectTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_THEME);
      if (saved) return saved;
    } catch (e) {}
    return 'dark'; // dark first
  }

  applyTheme(detectTheme());

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  // ---------- Mobile menu ----------
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  menuBtn?.addEventListener('click', () => nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));

  // ---------- Year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Contact form (demo) ----------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || 'tr';
    const dict = window.I18N[lang] || window.I18N.tr;
    if (status) {
      status.hidden = false;
      status.textContent = dict['contact.form.success'];
    }
    form.reset();
  });
})();
