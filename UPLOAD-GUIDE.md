# 📤 GITHUB'A UPLOAD NASIL YAPILIR

## ⚡ 3 ADIMDA UPLOAD:

### ADIM 1: Zip'i Aç
- `whattime-city-vercel.zip` dosyasını extract et
- İçindeki tüm dosya ve klasörleri gör

### ADIM 2: GitHub'a Git
```
https://github.com/tonguc/whattime-city
```

### ADIM 3: Upload Files
1. **"Add file"** dropdown'a tıkla
2. **"Upload files"** seç
3. **Tüm dosya ve klasörleri sürükle** (hepsini seç, sürükle-bırak)
4. Commit message: 
   ```
   feat: migrate to Vercel with SSR and dynamic rendering
   ```
5. **"Commit changes"** (yeşil buton)

---

## ✅ UPLOAD EDİLECEK DOSYALAR:

```
✅ next.config.js                          (mevcut dosya üzerine yazılır)
✅ vercel.json                             (yeni dosya eklenir)
✅ .gitignore                              (mevcut dosya üzerine yazılır)
✅ app/time/[from]/[to]/page.tsx          (mevcut dosya üzerine yazılır)
✅ components/Header.tsx                   (mevcut dosya üzerine yazılır)
✅ components/TimeComparisonContent.tsx    (mevcut dosya üzerine yazılır)
📖 DEPLOYMENT_GUIDE.md                     (yeni dosya - referans)
```

---

## 🎯 SONRA NE OLACAK?

**Upload bitince (2-3 dakika):**
- ✅ GitHub'da dosyalar güncellenmiş olacak
- ✅ Vercel'e deployment için hazırsın!

**Sonraki adım:**
- Vercel'e git ve deploy et
- Detaylar için: `DEPLOYMENT_GUIDE.md`

---

## 💡 ÖNEMLİ:

**GitHub mevcut dosyaların üzerine yazacak!**
- Klasör yapısı aynı olduğu için otomatik eşleşir
- Yeni dosyalar (vercel.json) eklenir
- Değişen dosyalar güncellenir

**Hepsi bu kadar!** 🚀
