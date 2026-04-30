# Elif Vural — Dijital Pazarlama Danışmanı (Demo Site)

Statik tek-sayfalık tanıtım sitesi. Dependency yok, build yok — `index.html`'i tarayıcıda aç yeter.

## Özellikler

- 3 dil: TR (varsayılan) / EN / FR — `assets/i18n.js` içinden yönetiliyor
- Dark mode varsayılan, tek tıkla light mode'a geçiş (tercih `localStorage`'da)
- Pembe (`#ec4899`) + Mor (`#8b5cf6`) gradient teması
- Bölümler: Hero, Markalar, Hizmetler (3 kart), Hakkımda, Blog (3 kart), İletişim, Footer
- Responsive: mobil menü, grid'ler tek kolona düşer
- Demo iletişim formu (gönderim simüle edilir, backend yok)

## Yerel önizleme

```bash
cd elif-vural-site
python3 -m http.server 8000
# http://localhost:8000
```

veya doğrudan `index.html`'i tarayıcıda aç.

## Düzenleme

| Ne değişecek | Nerede |
|---|---|
| Metin / çeviriler | `assets/i18n.js` |
| Renkler / stiller | `assets/styles.css` (`:root` CSS değişkenleri) |
| Bölümler / yapı | `index.html` |
| Form davranışı | `assets/script.js` |

## Yayınlama

Statik olduğu için Netlify, Vercel, GitHub Pages, Cloudflare Pages — herhangi birine sürüklenip bırakılabilir.
