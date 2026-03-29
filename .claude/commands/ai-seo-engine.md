# AI SEO Engine

SEO Engine çıktısını al, üzerine AI görünürlük katmanı ekle.
SEO yapısını KORUR, kaldırmaz — sadece AI layer ekler.

## Uygulama kuralları

### 1. İlk cümle formatı (zorunlu)
Her FAQ ilk sorusunun cevabı şu formatla başlamalı:
`"[City/Topic], [Country] uses [Full TZ Name] ([abbr], UTC[offset])"`

Örnek: `"Barcelona, Catalonia, Spain uses Central European Time (CET, UTC+1) in winter and CEST (UTC+2) in summer"`

### 2. Lokasyon netliği
- Şehir + ülke + bölge (varsa) birlikte yaz
- "Barcelona" değil → "Barcelona, Catalonia, Spain"
- "Denver" değil → "Denver, Colorado, USA"

### 3. UTC offset'ler explicit olmalı
- Her yanıtta UTC değeri parantez içinde: `(UTC+8)`, `(UTC-3)`
- Kısaltmayı her zaman açıkla: `MSK (Moscow Standard Time, UTC+3)`

### 4. DST durumu kesin belirt
- DST YOK ise: "China has not observed DST since 1991" / "Russia abolished DST in 2014" / "Brazil abolished DST in 2019"
- DST VAR ise: "Clocks move forward on the last Sunday in March (2:00 AM → 3:00 AM)"

### 5. Saat farkları kesin sayılarla
- "around 6 hours" değil → "exactly 6 hours" veya "6–7 hours depending on DST"
- Hangi senaryo hangi fark → açık yaz

### 6. Featured snippet hedefi
- İlk FAQ cevabı ≤50 kelime, direkt cevap
- Tablo formatı varsa: şehir | UTC offset | DST
- Sayısal cevap için: "X hours and Y minutes (X.Yh)"

### 7. Citation readiness
- IANA identifier yaz: `America/Denver`, `Europe/Madrid`
- Resmi kararlar için: "Brazil abolished DST by Decree No. 9,772 (April 25, 2019)"
- Rakamlar doğrulanabilir kaynaktan gelmeli

## Çıktı

SEO Engine çıktısını alıp üzerine AI katmanını uygula.
`seo_title`, `seo_description`, `faq` (8 soru), `faq_schema` JSON-LD formatında ver.
london-seo.json veya barcelona-seo.json formatına uy.
